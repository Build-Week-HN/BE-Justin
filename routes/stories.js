const router = require("express").Router();
const STORIES = require("../models/stories");
const restricted = require("../middlewares/restricted-route");

router.get("/", restricted, async (req, res) => {
  try {
    const stories = await STORIES.returnAll();
    res.status(200).json(stories);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

module.exports = router;