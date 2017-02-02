const createDocker = require('../runDocker');
const router = require('express').Router();

router.post('/', (req, res, next) => {
  console.log("I'm here");
  const docker = new createDocker();
  const codeToRun = `${req.body.code}`;
  console.log(req.body.timeElapsed)

  // pull in all testsToRun for every question at one time from the db
  // this will be an array of strings shown like this 
  /// [test1andtest2, test3
  // where test1 and test 2 are associated with question 1
  // and test3 are associated with question 3

  const testsToRun = [`
    describe("isFizz", function(){
      describe("6 must be Fizz", function(){
        it("should return true for 6", function(){
          assert.equal(true, isFizz( 6 ));
        })
      })
    })
    describe("isBuzz", function(){
      describe("10 must be Buzz", function(){
        it("should return true for 10", function(){
          assert.equal(true, isBuzz( 10 ));
        })
      })
    })
    `,
    `
    describe("isFizzBuzz", function(){
      describe("15 must be FizzBuzz", function(){
        it("should return true for 15", function(){
          assert.equal(true, isFizzBuzz( 15 ));
        })
      })
    })
    `]


  docker.runCommand(codeToRun, testsToRun[0])
    .then(results => {
      const resultString = JSON.stringify(results);
      res.send(resultString);
  })
})

module.exports = router;

