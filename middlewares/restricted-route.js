const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({
          message: "Bad token."
        });
      } else {
        req.decoded = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({
      message: "Token is missing."
    });
  }
};
