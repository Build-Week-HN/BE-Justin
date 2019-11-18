const cron = require('node-cron');
const replaceStories = require('./replaceStories');

cron.schedule('* * * * * ', () => {
  console.log('db cleaned & populated');
  replaceStories();
})