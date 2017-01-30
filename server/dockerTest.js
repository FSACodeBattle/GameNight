const DockerRunner = require('./runDocker');
const docker = new DockerRunner();

var testCode = `function combine(arrToCombine){

	var combinedArr = [1];
  for(i = 0; i < arrToCombine.length -1; i++){
	 	combinedArr.push(arrToCombine[i] + arrToCombine[i+1]);
  }

  combinedArr.push(1);
	return combinedArr;
}

function pascalsTriangle(n) {

  var arr = [[1]];
  if(n >= 2) arr.push([1,1]);
  for(var i = 2; i < n; i++){
  	arr.push(combine(arr[i -1]))
  }
  return [].concat.apply([], arr);
}

pascalsTriangle(4)`;


console.log("\"");

docker.runCommand(testCode)
    .then((results) => console.log('this is the output:', results))
