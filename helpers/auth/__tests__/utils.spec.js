const { setPassword, validPassword } = require("../utils");

describe("UNIT TEST auth utils", () => {
  describe("METHOD: setPassword", () => {
    it("should generate a salt and hash of a given string", () => {
      const str = "password123456";
      const { salt, hash } = setPassword(str);

      expect(typeof salt).toBe("string");
      expect(typeof hash).toBe("string");
    });
  });

  describe("METHOD: check Hash", () => {
    it("Negative test. Should return false. Hash not equal", () => {
      const hash = "some hash";
      const salt = "some salt";
      const userHash = "some hash";
      const result = validPassword(hash, salt, userHash);

      expect(result).toBeFalsy();
    });
  });
});
