const express = require('express');
const routerProjects = require('./routerProjects');
const routerActions = require('./routerActions');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors());

server.use('/projects', routerProjects);
server.use('/actions', routerActions);

module.exports = server;