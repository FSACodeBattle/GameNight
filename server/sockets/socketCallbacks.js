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

module.exports = {hello, onUserCodeSubmit, joinMainLobby, joinGameLobby}