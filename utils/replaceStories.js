const axios = require("axios");
const STORIES = require("../models/stories");

const replaceStories = async () => {
  try {
    const API = "https://hacker-news.firebaseio.com/v0/topstories.json";
    const { data: top20stories } = await axios.get(API);
    
    if (top20stories.length > 0) {
      await STORIES.cleanUp();
      top20stories.length = 20;

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
          console.log(err.message);
        }
      });
    } else {
      console.log(`Error: top20stories length is ${top20stories.length}.`);
    }
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = replaceStories;
