const hello = function (data) {
    console.log(data);
}

const onUserCodeSubmit = function(data) {
	return data;
}

const joinGameLobby = function(data){
	this.join(data);
}

const reloadLobby = function(io) {
  io.emit('reload');
}

const updatePlayerProgress = function(data){
	// console.log('receiving correct response on back-end')
  	data.playerProgress[data.playerNumber - 1]++;
  	// console.log(data.playerProgress);
 	this.emit('update progress', data.playerProgress);
}

module.exports = {hello, onUserCodeSubmit, joinGameLobby, updatePlayerProgress, reloadLobby}
