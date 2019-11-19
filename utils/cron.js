const cron = require('node-cron');
const replaceStories = require('./replaceStories');

cron.schedule('*/5 * * * *', () => {
  console.log('5 minutes passed - db cleaned & populated.');
  replaceStories();
})