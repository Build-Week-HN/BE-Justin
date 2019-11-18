const axios = require("axios");
const STORIES = require("../models/stories");

const replaceStories = async () => {
  try {
    const API =
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
    const fetchedStories = await axios.get(API);
    const top20stories = fetchedStories.data;
    top20stories.length = 20;

    await STORIES.cleanUp();

    top20stories.map(async storyID => {
      try {
        let API = `https://hacker-news.firebaseio.com/v0/item/${storyID}.json`;
        const story = await axios.get(API);
        const { id, by, descendants, score, time, title, url } = story.data;

        await STORIES.add({
          id,
          author: by,
          comments_count: descendants,
          score,
          time,
          title,
          url
        });
      } catch (err) {
        res.status(500).json({
          message: err.message
        });
      }
    });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};

module.exports = replaceStories;
