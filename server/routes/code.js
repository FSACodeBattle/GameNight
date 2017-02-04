const createDocker = require('../runDocker');
const router = require('express').Router();
const Sequelize = require('sequelize');
const Question = require('../../db/database').Question;
const io = require('../../bin/io');

router.post('/', (req, res, next) => {
  const ioObj = io();
  const docker = new createDocker();
  const codeToRun = `${req.body.code}`;
  // pull in all testsToRun for every question at one time from the db
  // this will be an array of strings shown like this 
  /// [test1andtest2, test3
  // where test1 and test 2 are associated with question 1
  // and test3 are associated with question 3

  // const testsToRun = [`
  //   describe("isFizz", function(){
  //     describe("6 must be Fizz", function(){
  //       it("should return true for 6", function(){
  //         assert.equal(true, isFizz( 6 ));
  //       })
  //     })
  //   })
  //   describe("isBuzz", function(){
  //     describe("10 must be Buzz", function(){
  //       it("should return true for 10", function(){
  //         assert.equal(true, isBuzz( 10 ));
  //       })
  //     })
  //   })
  //   `,
  //   `
  //   describe("isFizzBuzz", function(){
  //     describe("15 must be FizzBuzz", function(){
  //       it("should return true for 15", function(){
  //         assert.equal(true, isFizzBuzz( 15 ));
  //       })
  //     })
  //   })
  //   `]

  // use playerProgress scoreboard to keep track of which
  // question each player is on

  const playerProgress = req.body.playerProgress;
  const playerNumber = req.body.playerNumber;
  const currentQuestionNumber = playerProgress[playerNumber - 1];
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
      docker.runCommand(codeToRun, tests)
        .then(results => {
          //turns the results into a usable string
          let resultString = JSON.stringify(results);
          //since player 1 is associated with the socket that is at index 0 and player 2 at index 1, 
          //we know which socket should update their current question 
          let playerToUpdate = arrOfSocketIDs.indexOf(socketID);

          //if the result string does not contain the words failing (they failed at least 1 test) or SyntaxError (their code throws a syntax error)
          if(resultString.indexOf('failing') === -1 && resultString.indexOf('SyntaxError') === -1){
            //emit to the room the player that needs to be updated along with the player's socket ID 
            ioObj.in(room).emit('updatePlayerScore', {playerToUpdate: `Player${playerToUpdate+1}`, currentPlayer: socketID});
            //send the result string back to the frontend
            res.send(resultString);
          }
          else{
            //if the code fails a test or any other way the room will emit that the specific player failed and the reason why
            ioObj.in(room).emit('failedSub', {playerToUpdate: `Player${playerToUpdate+1}`, reason: resultString});
            res.send(resultString);
          }
      })
    })
})

module.exports = router;

