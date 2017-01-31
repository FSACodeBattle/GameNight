const createDocker = require('../runDocker');
const router = require('express').Router();

router.post('/', (req, res, next) => {
  console.log("I'm here");
  const docker = new createDocker();
  const codeToRun = `${req.body.code}`;
  console.log(req.body.timeRemaining)
  const testToRun = `
describe("isFizz", function(){
  describe("6 must be Fizz", function(){
    it("should return true for 6", function(){
      assert.equal(true, fizzbuzz.isFizz( 6 ));
    })
  })
})
describe("isBuzz", function(){
  describe("10 must be Buzz", function(){
    it("should return true for 10", function(){
      assert.equal(true, fizzbuzz.isBuzz( 10 ));
    })
  })
})
describe("isFizzBuzz", function(){
  describe("15 must be FizzBuzz", function(){
    it("should return true for 15", function(){
      assert.equal(true, fizzbuzz.isFizzBuzz( 15 ));
    })
  })
})`
  docker.runCommand(codeToRun, testToRun)
    .then(results => {
      const resultString = JSON.stringify(results);
      res.send(resultString);
  })
})

module.exports = router;
