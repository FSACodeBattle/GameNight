const Docker = require('dockerode');

const streamBuffers = require('stream-buffers');
const Bluebird = require('bluebird');

function createDocker () {
    this.docker = new Docker();
}



createDocker.prototype.runCommand = function (userCode, testCode, scenario) {

   	let userCodeEdited = userCode.replace(/'/gm, '"');
    //const userCodeEdited = userCode;
    //const runUserCodeCommand = `node -p  '${userCode}' && exit`;

    userCodeEdited = 'var assert = require("assert");' + userCodeEdited;

    const runUserCodeCommand = `touch test.js && echo '${userCodeEdited}' > test.js && babel test.js --out-file test-compiled.js && mocha -R spec test-compiled.js && exit`;
    const stdoutStream = new streamBuffers.WritableStreamBuffer();

    const finishedPromise = new Bluebird((resolve, reject) => {
      
        this.docker.run('mocha-chai-node', ['bash', '-c', runUserCodeCommand], stdoutStream, function(err, data, container) {
            if (err) return reject(err);

            const results = stdoutStream.getContentsAsString('utf8');
            container.remove(function (error, response) {
                if (error) console.log(error);
            });

            resolve(results.replace(/\[\d+m/gi, ""));
        });
    });

    return finishedPromise;

};

module.exports = createDocker;
