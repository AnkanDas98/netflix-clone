function checkAdmin(req, res, next) {
  if (req.user.isAdmin) {
    next();
  } else {
    res.status(401).json({ error: "You do not have any access" });
    throw new Error({ message: "Not Authorized As An Admin" });
  }
}

module.exports = checkAdmin;
