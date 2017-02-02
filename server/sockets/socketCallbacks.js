const hello = function (data) {
    console.log(data);
  };


const onUserCodeSubmit = function(data) {
	return data;
}


const joinGameLobby = function(data){
	console.log("this is inside data joinGameLobby", data);
	//console.log("this is inside joinGameLobby",io.sockets.adapter.rooms);
	//console.log("this is this", this);
	this.join(data);
}

module.exports = {hello, onUserCodeSubmit, joinGameLobby}