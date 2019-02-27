const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const router = require('./data/router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/', router);

module.exports = server;