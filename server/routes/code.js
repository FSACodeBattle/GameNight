const createDocker = require('../runDocker');
const router = require('express').Router();
const Sequelize = require('sequelize');
const Question = require('../../db/database').Question;

router.post('/', (req, res, next) => {
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

  console.log("inside post ", req.body.currentQuestionID)
  Question.findById(req.body.currentQuestionID)
    .then((question) => {
      const tests = question.tests
      docker.runCommand(codeToRun, tests)
        .then(results => {
          let resultString = JSON.stringify(results);
          // check if result string has 'failing' in it
          // if not, advance to next question
          if(resultString.indexOf('failing') === -1){
            resultString += "1";
            res.send(resultString);
          }
          
          // otherwise, stay on same question
      })
    })
})

module.exports = router;

