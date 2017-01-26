const DockerRunner = require('./runDocker.js');
const router = require('express').Router();

router.post('/code', (req, res, next) => {
  const docker = new DockerRunner();
  const codeToRun = `${req.body.code}`;
  docker.runCommand(codeToRun)
    .then(results => res.json(JSON.stringify(results)))
})
