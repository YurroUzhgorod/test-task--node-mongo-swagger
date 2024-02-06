module.exports = {
  DEFAULT_PAGE: 1,

  ROLES: {
    SUPER_ADMIN: 1,
    ADMIN: 2,
    ARTIST: 3,
    CART_USER: 10,
    VR_USER: 11,
  },

  MODELS: {
    USERS: "Users",
    CONTENTS: "Contents",
    VIEWS: "Views",
  },
  PAGE_NOT_FOUND: "Page Not Found",
  ID_PATTERN: "123456789abcdefghijklmnopqrstuvwxyz",
  REFRESH_TOKEN_DURATION: 60 * 60 * 24 * 7, // one week
  TOKEN_DURATION: 60 * 60 * 24, // one day
  ADMIN_INVITATION_DURATION: 60 * 60, // one hour
};
