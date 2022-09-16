const router = require("express").Router();
const { check, body } = require("express-validator");

const userController = require("../controller/userController");
const verifyToken = require("../middleware/verifyToken");

// Get All User
router.get("/", verifyToken, userController.getAllUser);

// Get User Stats
router.get("/stats", verifyToken, userController.getUserStats);

// Get Single User
router.get("/find/:id", userController.getSingleUser);

// Update
router.put(
  "/:id",
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
  verifyToken,
  userController.update
);

// Delete
router.delete("/:id", verifyToken, userController.delete);

module.exports = router;
