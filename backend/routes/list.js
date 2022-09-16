const router = require("express").Router();
const { check } = require("express-validator");

const listController = require("../controller/listController");
const verifyToken = require("../verifyToken");
const isAdmin = require("../middleware/checkAdmin");

router.post(
  "/store",
  [
    check("title")
      .isString()
      .withMessage("Title is required")
      .isLength({ min: 4 })
      .withMessage("Must have to be atleast 4 charter long"),
    check("type")
      .isString()
      .withMessage("Type is required")
      .isLength({ min: 4 })
      .withMessage("Must have to be atleast 4 charter long"),
    check("genre")
      .isString()
      .withMessage("Genre is required")
      .isLength({ min: 4 })
      .withMessage("Must have to be atleast 4 charter long"),
    check("content")
      .isArray()
      .withMessage("Must Have to be an array")
      .notEmpty()
      .withMessage("Must not be an empty array"),
  ],
  verifyToken,
  isAdmin,
  listController.store
);

router.delete("/:id", verifyToken, isAdmin, listController.delete);
router.get("/", listController.allList);

module.exports = router;
