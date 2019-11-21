const router = require("express").Router();
const USERS = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const validateUser = require("../middlewares/validate-user");
const validateCreds = require("../middlewares/validate-creds");
const generateToken = require("../utils/generate-token");

router.get("/", (req, res) => {
  res.send("👫 Users route");
});

router.post("/register", validateCreds, async (req, res) => {
  try {
    const newUser = req.body;
    const hashedPwd = bcrypt.hashSync(newUser.password, 10);
    newUser.password = hashedPwd;

    const user = await USERS.add(newUser);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.post("/login", validateUser, async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await USERS.findBy({ username });

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      res.status(200).json({
        message: "Logged in successfully.",
        token
      });
    } else {
      res.status(401).json({
        message: "Invalid credentials. Double check & try again."
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

module.exports = router;
