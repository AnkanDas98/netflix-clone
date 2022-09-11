const router = require("express").Router();
const { check, body } = require("express-validator");

const authController = require("../controller/authController");

router.post(
  "/register",

  [
    check("username", "username must have to be atleast 4 character").isLength({
      min: 4,
    }),
    check("email").isEmail(),
    check("password", "Password needs to be atleast 6 charcter")
      .trim()
      .isLength({ min: 6 })
      .isAlphanumeric(),
  ],
  authController.register
);

router.post(
  "/login",
  [
    check("email").isEmail(),
    check("password", "Password needs to be atleast 6 charcter")
      .trim()
      .isLength({ min: 6 })
      .isAlphanumeric(),
  ],
  authController.login
);

module.exports = router;
