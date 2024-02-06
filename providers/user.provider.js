const { Provider } = require("./super");
const { MODELS } = require("../constants");

class UserProvider extends Provider {
  constructor() {
    super(MODELS.USERS);
  }

  /**
   * @async
   * @param {PaginationFields} params
   * @returns {Promise<getUsersWithPurhchase>}
   */
  async getUsers({ skip, limit }) {
    const $match = {};

    const pipeline = [
      {
        $match,
      },
      {
        $sort: {
          createdAt: -1,
        },
      },
      {
        $skip: skip,
      },
      {
        $limit: limit,
      },
      {
        $project: {
          _id: 1,
          userName: 1,
          email: 1,
          lastName: 1,
          source: 1,
        },
      },
    ];

    const [data, total] = await Promise.all([
      this.aggregation(pipeline),
      this.count($match),
    ]);

    return { data, total };
  }

  async getUserByEmailUserName(email, userName = null) {
    const criteria = {};

    criteria.$or = [
      { email: email.toLowerCase() },
      { userNameSearch: userName.toLowerCase() },
    ];

    const result = await this.getSingle(criteria, {
      userName: 1,
      email: 1,
    });

    return result;
  }

  /**
   * @async
   * @param {UserFields['userId']} userId
   * @returns {Promise<Object>}
   */

  async getUserById(userId) {
    const aggregation = [
      {
        $match: {
          _id: this.ObjectId(userId),
        },
      },

      {
        $project: {
          email: 1,
          role: 1,
          userName: 1,
          createdAt: 1,
        },
      },
    ];

    const [user] = await this.aggregation(aggregation);

    return user;
  }

  /**
   * @async
   * @param {String} email
   * @param {String} [userName=null]
   * @returns {Promise<Object>}
   */
  async setPassUser({ userId, contentId }) {
    await this.updateSingleById(userId, {
      $push: { completed: contentId },
      $pull: { assigned: contentId },
    });

    return true;
  }

  /**
   * @async
   * @param {String} email
   * @param {String} [userName=null]
   * @returns {Promise<Object>}
   */
  async assignTest({ idUser, contentId }) {
    const status = await this.updateSingleById(idUser, {
      $push: { assigned: contentId },
    });

    return status;
  }

  async getUserForLogin({ email, userName }) {
    const userNameSearch = userName ? userName.toLowerCase() : null;

    const match = { isDeleted: false };

    match.$or = [
      { email: email?.toLowerCase() || null },
      { userNameSearch },
      { userName },
    ];

    const projection = {
      userName: 1,
      email: 1,
      hash: 1,
      salt: 1,
      role: 1,
    };

    const user = await this.getSingle(match, projection);

    return user;
  }
}

module.exports = { userProvider: new UserProvider() };
