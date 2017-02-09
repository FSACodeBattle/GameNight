const socketio = require('socket.io');
const socketCallbacks = require('../server/sockets/socketCallbacks');
const Question = require('../db/database').Question;
const Sequelize = require('sequelize');
const User = require('../db/database').User;
const Fight = require('../db/database').Fight
let io = null;

module.exports = function(server) {
	if (io) return io;
	io = socketio(server);
	io.on('connection', function(socket) {
		socket.on('setUser', payload => {
			payload.user.socketId = socket.id;
			socket.user = payload.user;
			socket.join('MainLobby');
			io.emit('reload');
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
					if(io.sockets.adapter.rooms[data].length > 1) io.in(data).emit('startGame', data);
					//get the random questions from the database
					Question.findAll({
							//limit it to the number of questions you want to get
							limit: 2,
							//gets random rows from the questions table
							// order: [
							// 	[Sequelize.fn('RANDOM')]
							// ]
							order: [["id", "ASC"]]
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

							const room = io.sockets.adapter.rooms[data];
							let users = Object.keys(room.sockets).map(id => {
								const user = io.sockets.connected[id].user;
								return user;
							})

							// console.log('user', users);

							//const arrOfSocketIDs = Object.keys(io.sockets.adapter.rooms[data].sockets);

							const gameData = {
								// assign player one to the socket that connected first to the room
								player1: users[0],
								//assign player two to the socket that connected second to the room
								player2: users[1],
								//stores the array of the question objects created above
								questions: arrOfQuestionObjs
							}
							// console.log("emit this question data", gameData);

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

		socket.on('gameOver', (data) => {
			// console.log("gameover event ", data);
								
			Fight.create({
						winnerId: data.winnerUserID,
						loserId: data.loserUserID,
						winnerDuration: data.time
			})
			.then((savedFight => {
				User.findById(data.winnerUserID)
					.then((winningUser) => {
						winningUser.update({wins: (winningUser.wins + 1), points: (winningUser.points + 25)})

					})
				User.findById(data.loserUserID)
					.then((losingUser) => {
						losingUser.update({losses: (losingUser.losses + 1), points: (losingUser.points - 25)})
					})
			}))
			

			io.in(data.roomID).emit('gameWinningState', data);
		})

		var currentClients = io.sockets.adapter.rooms["MainLobby"];

		socket.on('correct response', socketCallbacks.updatePlayerProgress);

		socket.on('sending attack', socket.emit('receiving attack'));

		socket.on('disconnect', () => socketCallbacks.reloadLobby(io))
	});

	return io;
}
