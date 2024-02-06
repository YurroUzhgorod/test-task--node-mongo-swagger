const jwt = require("jsonwebtoken");
const { customAlphabet } = require("nanoid");

const CONSTANTS = require("../constants/index");
const { REGULAR_EXPRESSIONS } = require("../constants/regularExpressions");
const { ERROR_CODES } = require("../constants/errorCodes");
const { HttpException } = require("./errors");

const { redisAdapter } = require("../adapters/redis");
const { config } = require("../config");
const { userProvider } = require("../providers/user.provider");

class AuthHelper {
  constructor() {
    this.secret = config.JWT_SECRET;
  }

  async authorize(payload, remember = true) {
    const sid = customAlphabet(CONSTANTS.ID_PATTERN, 12)();

    payload.sid = sid;

    const tasks = [this._createAccessToken(payload)];

    if (remember) {
      tasks.push(this._createRefreshToken({ userId: payload._id, sid }));
    }

    const [token, refreshToken = null] = await Promise.all(tasks);

    return { token, refreshToken };
  }

  async validateToken(token) {
    const data = this._verifyToken(token);

    if (!data) {
      throw HttpException.UNAUTHORIZED();
    }

    if (!REGULAR_EXPRESSIONS.OBJECT_ID.test(data._id)) {
      throw HttpException.BAD_REQUEST(
        `Invalid user identifier has been provided.`
      );
    }

    const session = await redisAdapter.getValue(`${data._id}access`);

    // CHECK IF USER AUTH EXIST IN CACHE
    if (!session) {
      throw HttpException.UNAUTHORIZED(
        null,
        ERROR_CODES[401].USER_NOT_AUTHORIZED
      );
    }

    return data;
  }

  async authorizeByRefreshToken(oldRefreshToken) {
    const data = this._verifyToken(oldRefreshToken);

    if (!data) {
      throw HttpException.UNAUTHORIZED();
    }

    const authData = await redisAdapter.getValue(
      `${data.userId.toString()}refresh`
    );

    if (!authData) {
      throw HttpException.UNAUTHORIZED();
    }

    await redisAdapter.delKeys(`${data.userId.toString()}refresh`);

    const user = await userProvider.getSingle(
      { _id: data.userId },
      { role: 1 }
    );

    if (!user) {
      throw HttpException.NOT_FOUND("User is not found or has been removed");
    }

    const sid = customAlphabet(CONSTANTS.ID_PATTERN, 12)();

    const [token, refreshToken] = await Promise.all([
      this._createAccessToken({
        _id: user._id,
        role: user.role,
        sid,
      }),
      this._createRefreshToken({ userId: user._id, sid }),
    ]);

    return { token, refreshToken };
  }

  async _createAccessToken(payload = {}, exp = CONSTANTS.TOKEN_DURATION) {
    payload.exp = Math.round(Date.now() / 1000 + exp);

    const token = await jwt.sign(payload, this.secret);

    await redisAdapter.setValueEx(`${payload._id}access`, token, exp);

    return token;
  }

  async _createRefreshToken(
    { userId, sid },
    exp = CONSTANTS.REFRESH_TOKEN_DURATION
  ) {
    const refreshToken = jwt.sign({ userId, exp, sid }, this.secret);

    await redisAdapter.setValueEx(
      `${userId.toString()}refresh`,
      refreshToken,
      exp
    );

    return refreshToken;
  }

  _verifyToken(token) {
    try {
      // @ts-ignore
      const decoded = jwt.decode(token, this.secret);

      return decoded;
    } catch (err) {
      return null;
    }
  }
}

module.exports = { authHelper: new AuthHelper() };
