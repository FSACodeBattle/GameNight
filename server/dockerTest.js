
const DockerRunner = require('./runDocker.js');

const docker = new DockerRunner();


docker.runCommand()
    .then((results) => console.log('this is the output:', results))

