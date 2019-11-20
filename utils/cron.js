const cron = require('node-cron');
const replaceStories = require('./replaceStories');

cron.schedule('*/10 * * * *', () => {
  console.log('Right on time! DB cleaned & populated successfully.');
  replaceStories();
})