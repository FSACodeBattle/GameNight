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
		socket.on('joinGameLobby', (data) => {
			if(io.sockets.adapter.rooms[data] === undefined){
				socket.join(data);
			}

			else{
				if(io.sockets.adapter.rooms[data].length < 2) socket.join(data);
				else {
					socket.emit('game is full', 'The game lobby is already full');
				}
			}
			
		})
		socket.on('my other event', socketCallbacks.hello);
		var currentClients = io.sockets.adapter.rooms["MainLobby"];
		console.log("currentClients", currentClients);
		let playerProgress = [0, 0];
		socket.on('correct response', (data) => {
  			console.log('receiving correct response on back-end')
  			playerProgress[data.playerNumber - 1]++;
 			socket.emit('update progress', playerProgress); 	
  		});
	});
	return io;

}