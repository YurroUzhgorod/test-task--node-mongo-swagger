const { HttpException } = require("../helpers/errors");

const { userProvider } = require("../providers/user.provider");

class UserService {
  /**
   * Get users with at least one purchase
   * @param {DTO.Request.getAllUsersDTO} DTO
   * @returns {Promise<userProvider.getUsersWithPurhchase>} Return object of data and total
   */
  async getUsers({ skip, limit }) {
    const users = await userProvider.getUsers({ skip, limit });

    return users;
  }

  /**
   * @param {DTO.Request.getUserByIdDTO} DTO
   * @returns {Promise<object>}  user model without sensitive data
   */
  async getUserById({ targetId }) {
    const user = await userProvider.getUserById(targetId);

    if (!user) {
      throw HttpException.NOT_FOUND(`User not found!`);
    }

    return user;
  }
}

module.exports = { userService: new UserService() };
