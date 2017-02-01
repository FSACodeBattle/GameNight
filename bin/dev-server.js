const project = require('../config/project.config');
const server = require('../server/main');
const httpServer = server.listen(project.server_port)
require('./io')(httpServer)
const debug = require('debug')('app:bin:dev-server');
const socketCallbacks = require('../server/sockets/socketCallbacks');

debug(`Server is now running at http://localhost:${project.server_port}.`)
