const router = require("express").Router();
const { check } = require("express-validator");

const movieController = require("../controller/movieController");
const verifyToken = require("../middleware/verifyToken");
const isAdmin = require("../middleware/checkAdmin");

router.get("/", verifyToken, isAdmin, movieController.allMovies);
router.get("/random", movieController.randomMovie);
router.post(
  "/store",
  [
    check("title")
      .isString()
      .withMessage("Title is required")
      .isLength({
        min: 4,
      })
      .withMessage("Must have to be atleast 4 charcter long"),
    check("imageTitle").isString().isLength({
      min: 4,
    }),
    check("image")
      .not()
      .isEmpty()
      .withMessage("Image is reuired")
      .isURL()
      .withMessage("Invalid url"),
    check("imageSm")
      .not()
      .isEmpty()
      .withMessage("ImageSm is reuired")
      .isURL()
      .withMessage("invalid url"),
    check("trailer")
      .not()
      .isEmpty()
      .withMessage("Trailer is Required")
      .isURL()
      .withMessage("invalid url"),
    check("video")
      .not()
      .isEmpty()
      .withMessage("Trailer is Required")
      .isURL()
      .withMessage("invalid url"),
    check("year").isString().withMessage("Year is Required"),
    check("genre").isString().withMessage("Genre is Required"),
    check("limit").isInt().withMessage("Limit is required"),
    check("isSeries").optional().isBoolean(),
  ],
  verifyToken,
  isAdmin,
  movieController.store
);
router.put("/:id", verifyToken, isAdmin, movieController.update);
router.delete("/:id", verifyToken, isAdmin, movieController.delete);
router.get("/:id", verifyToken, movieController.singleMovie);

module.exports = router;
