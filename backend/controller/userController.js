const User = require("../models/User");
const { validationResult } = require("express-validator");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const router = require("../routes/users");

// Update
exports.update = async (req, res, next) => {
  if (req.user.id === req.params.id) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }

    try {
      const updateUser = await User.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json({ error: "This is not your account" });
  }
};

// Delete
exports.delete = async (req, res, next) => {
  if (req.user.id === req.params.id) {
    try {
      await User.findByIdAndDelete({ _id: req.params.id });
      req.user = null;
      res.status(200).json({ message: "Account Deleted" });
    } catch (err) {
      res.status(500).json({ error: "Server Error" });
    }
  } else {
    res.status(403).json({ error: "This is not your account" });
  }
};

//GET single user
exports.getSingleUser = async (req, res, next) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Get All user
exports.getAllUser = async (req, res, next) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(10)
      : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

// User Stats
exports.getUserStats = async (req, res, next) => {
  try {
    const data = await User.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};
