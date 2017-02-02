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
		let playerProgress = [0, 0];
		socket.on('correct response', (data) => {
  			console.log('receiving correct response on back-end')
  			playerProgress[data.playerNumber - 1]++;
 			socket.emit('update progress', playerProgress); 	
  		});
	});
	console.log("this is inside the io return");
	return io;

}