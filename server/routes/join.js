const router = require('express').Router();
const io = require('../../bin/io');
const socketCallbacks = require('../sockets/socketCallbacks');
console.log("this is io",io);
function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 6; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}


router.get('/:invCode', (req, res, next) =>{

	const ioObj = io();
	//io.socket.on('')
	console.log("ioObj",ioObj);
	console.log(req.params.invCode);
	res.send(200);

})

module.exports = router;