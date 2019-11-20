module.exports = (req, res, next) => {
  if (!Object.keys(req.body).length) {
    res.status(400).json({
      message: "User information is missing."
    });
  } else if (!req.body.username || !req.body.email || !req.body.password) {
    res.status(400).json({
      message: "One or more is missing: username, email or password."
    });
  } else {
    next();
  }
}