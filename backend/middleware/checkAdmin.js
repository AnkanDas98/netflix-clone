function checkAdmin(req, res, next) {
  if (req.user.isAdmin) {
    next();
  } else {
    return res.status(401).json({ error: "You do not have any access" });
  }
}

module.exports = checkAdmin;
