const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const authHeader = req.headers.token;
  let token;
  if (authHeader) {
    token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
      if (err) {
        res.status(403).json({ error: "Token is not valid" });
        throw new Error({ message: "Token is not valid" });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ error: "You are not authenticated" });
    throw new Error({ message: "Not authorized, token failed" });
  }
}

module.exports = verifyToken;
