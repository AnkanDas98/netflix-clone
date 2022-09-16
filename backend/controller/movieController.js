const Movie = require("../models/Movie");
const { validationResult } = require("express-validator");

exports.store = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const newMovie = new Movie(req.body);
  try {
    const savedMovie = await newMovie.save();
    res.status(200).json(savedMovie);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    await Movie.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.singleMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findById({ _id: req.params.id });
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Random Movie
exports.randomMovie = async (req, res, next) => {
  const type = req.query.type;
  let movie;
  try {
    if (type === "series") {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get All movies

exports.allMovies = async (req, res, next) => {
  const query = req.query.new;
  try {
    const movies = query
      ? await Movie.find().sort({ _id: -1 }).limit(10)
      : await Movie.find();
    res.status(200).json(movies.reverse());
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};
