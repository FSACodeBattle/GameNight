const createDocker = require('../runDocker');
const router = require('express').Router();
const Sequelize = require('sequelize');
const Question = require('../../db/database').Question;
const io = require('../../bin/io');
const axios = require('axios');

router.post('/', (req, res, next) => {
  const ioObj = io();
  const docker = new createDocker();
  const codeToRun = `${req.body.code}`;

  //socket room that is passed in from the post request
  const room = req.body.room;
  //the socket ID from the user that posted the code to test
  const socketID = req.body.socketID;
  //an array of IDs from all the sockets in the room 
  const arrOfSocketIDs = Object.keys(ioObj.sockets.adapter.rooms[room].sockets);
  //ID of the question the user is trying to test
  const currentQuestionID = req.body.currentQuestionID;
  
  //In the Question table find the row that matches the current questions ID
  Question.findById(currentQuestionID)
    .then((question) => {
      //grab the tests associated with the selected question
      const tests = question.tests
      //create a new docker container and run the users code through the tests
      axios.post("http://code.myrandomcode.com:3000/", { code: codeToRun, tests })
        .then(res => res.data)
        .then(results => {
          //turns the results into a usable string
          let resultString = JSON.stringify(results);
          //since player 1 is associated with the socket that is at index 0 and player 2 at index 1, 
          //we know which socket should update their current question 
          let playerToUpdate = arrOfSocketIDs.indexOf(socketID);

          //if the result string does not contain the words failing (they failed at least 1 test) or SyntaxError (their code throws a syntax error)
          if(resultString.indexOf('failing') === -1 && resultString.indexOf('SyntaxError') === -1 && resultString.indexOf('FATAL ERROR') === -1 && resultString.toLowerCase().indexOf('syntax') === -1){
            //emit to the room the player that needs to be updated along with the player's socket ID 
            ioObj.in(room).emit('updatePlayerScore', {playerToUpdate: `Player${playerToUpdate+1}`, currentPlayer: socketID, roomID: room, code: codeToRun});
            //send the result string back to the frontend
            res.send(resultString);
          }
          else{
            //if the code fails a test or any other way the room will emit that the specific player failed and the reason why
            ioObj.in(room).emit('failedSub', {playerToUpdate: `Player${playerToUpdate+1}`, reason: resultString});
            res.send(resultString);
          }
      })
    }).catch(error => res.send(error.message));
})

module.exports = router;

