const project = require('../config/project.config')
const server = require('../server/main')
const debug = require('debug')('app:bin:dev-server')
const sockets = require('socket.io');

const httpServer = server.listen(project.server_port)
debug(`Server is now running at http://localhost:${project.server_port}.`)
const io = sockets(httpServer);

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});