const socketio = require('socket.io');
const socketCallbacks = require('../server/sockets/socketCallbacks');
let io = null;

module.exports = function(server) {
	if (io) return io;
	io = socketio(server);
	io.on('connection', function(socket) {
		socket.join('MainLobby');
		//socket.on('joinMainLobby', socketCallbacks.joinMainLobby)
		socket.emit('news', {
			hello: 'world'
		});
		socket.on('my other event', socketCallbacks.hello);
		socket.on('joinGameLobby', socketCallbacks.joinGameLobby)
		var name = "MainLobby";
		var currentClients = io.sockets.adapter.rooms["MainLobby"];
		console.log(currentClients);

		socket.on('correct response', socketCallbacks.updatePlayerProgress);
	});
	console.log("this is inside the io return");
	return io;

}