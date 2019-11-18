require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const server = express();

const stories = require('./routes/stories');
const users = require('./routes/users');

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/stories', stories);
server.use('/users', users);

module.exports = server;