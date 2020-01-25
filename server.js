const express = require('express');
const routerProjects = require('./routerProjects');
const routerActions = require('./routerActions');

const server = express();

server.use(express.json());

server.use('/projects', routerProjects);
server.use('/actions', routerActions);

module.exports = server;