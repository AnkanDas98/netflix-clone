const List = require("../models/List");
const { validationResult } = require("express-validator");
const { aggregate } = require("../models/Movie");

exports.store = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const newList = new List(req.body);
  try {
    const savedList = await newList.save();
    res.status(200).json(savedList);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete
exports.delete = async (req, res, next) => {
  try {
    await List.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "List Deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get List
exports.allList = async (req, res, next) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;

  let list = [];

  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          {
            $sample: { size: 10 },
          },
          { $match: { type: typeQuery, genre: genreQuery } },
        ]);
      } else {
        list = await List.aggregate([
          {
            $sample: { size: 10 },
          },
          { $match: { type: typeQuery } },
        ]);
      }
    } else {
      list = await List.aggregate([{ $sample: { size: 10 } }]);
    }
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json(error);
  }
};
