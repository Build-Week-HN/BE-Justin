const server = require('./server');
const port = process.env.PORT;

server.get('/', (req, res) => {
  res.send('🌚');
});

server.listen(port, () => {
  console.log(`Server is up on port: ${process.env.PORT}`);
});