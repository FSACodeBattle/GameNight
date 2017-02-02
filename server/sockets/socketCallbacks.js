const hello = function (data) {
    console.log(data);
}


const onUserCodeSubmit = function(data) {
	return data;
}

const joinMainLobby = function(data) {
	socket.join('Main Lobby');
}

const joinGameLobby = function(data){
	socket.join()
}

const updatePlayerProgress = function(data){
	console.log('receiving correct response on back-end')
  	data.playerProgress[data.playerNumber - 1]++;
  	console.log(data.playerProgress);
 	this.emit('update progress', data.playerProgress); 	
}



module.exports = {hello, onUserCodeSubmit, joinMainLobby, joinGameLobby, updatePlayerProgress}