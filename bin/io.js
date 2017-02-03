const socketio = require('socket.io');
const socketCallbacks = require('../server/sockets/socketCallbacks');
const Question = require('../db/database').Question;
const Sequelize = require('sequelize');
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

		io.emit('reload');

		//joining and creating a game lobby
		socket.on('joinGameLobby', (data) => {
			//if the room doesn't exist
			if (io.sockets.adapter.rooms[data] === undefined) {
				socket.join(data);
			} else {
				//if there is one player already in the room we need to grab the questions from the DB
				//since the game is ready to start and we will have 2 players in the room 
				if (io.sockets.adapter.rooms[data].length === 1) {
					socket.join(data);
					//get the random questions from the database
					Question.findAll({
							//limit it to the number of questions you want to get
							limit: 1,
							//gets random rows from the questions table
							order: [
								[Sequelize.fn('RANDOM')]
							]
						})
						.then((setOfQuestions) => {
							//arrOfQuestionObj holds objects that contain each questions ID, Name, and Text
							const arrOfQuestionObjs = setOfQuestions.map((question) => {
								return {
									questionID: question.id,
									questionName: question.name,
									questionText: question.questionText
								}
							})
							//grab the socket Id of all the connected sockets in the room
							const arrOfSocetIDs = Object.keys(io.sockets.adapter.rooms[data].sockets);
							const gameData = {
								// assign player one to the socket that connected first to the room 
								player1: arrOfSocketIDs[0],
								//assign player two to the socket that connected second to the room
								player2: arrOfSocketIDs[1],
								//stores the array of the question objects created above
								questions: arrOfQuestionObjs
							}
							console.log("emit this question data", gameData);

							//emits the game data object to all the connected sockets in the room 
							io.in(data).emit('sending Questions', gameData);
						});
				//if someone else attempts to join the room and it already has 2 people in it			
				} else if (io.sockets.adapter.rooms[data].length < 2) socket.join(data);
				else {
					//this emit will tell the person who is attempting to join a full room, that is already full
					socket.emit('game is full', 'The game lobby is already full');
				}
			}

		})

		socket.on('my other event', socketCallbacks.hello);
		var currentClients = io.sockets.adapter.rooms["MainLobby"];

		socket.on('correct response', socketCallbacks.updatePlayerProgress);

		let playerProgress = [0, 0];
		socket.on('correct response', (data) => {
			console.log('receiving correct response on back-end')
			playerProgress[data.playerNumber - 1]++;
			socket.emit('update progress', playerProgress);
		});

		socket.on('disconnect', () => socketCallbacks.reloadLobby(io))
	});

	return io;
}