const createDocker = require('../runDocker');
const router = require('express').Router();

router.post('/', (req, res, next) => {
  console.log("I'm here");
  const docker = new createDocker();
  const codeToRun = `${req.body.code}`;
  docker.runCommand(codeToRun)
    .then(results => {
      const resultString = JSON.stringify(results);
      res.send(resultString);
  })
})

module.exports = router;
