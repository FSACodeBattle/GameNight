const hello = function (data) {
    console.log(data);
  };


const onUserCodeSubmit = function(data) {
	return data;
}

const joinMainLobby = function(data) {
	socket.join('Main Lobby');
}

const joinGameLobby = function(data){
	socket.join()
}

const reloadLobby = function(io) {
  io.emit('reload');
}

module.exports = { hello, onUserCodeSubmit, joinMainLobby, joinGameLobby, reloadLobby }
