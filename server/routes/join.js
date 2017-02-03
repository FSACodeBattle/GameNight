const router = require('express').Router();
const io = require('../../bin/io');
const socketCallbacks = require('../sockets/socketCallbacks');

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
	//console.log("this is the ioObj.id", ioObj.id);
	const gameRoomId = req.params.invCode;
	console.log("new game room", ioObj.sockets.adapter.rooms[gameRoomId].sockets);
	console.log(req.params.invCode);
	res.send(200);

})
console.log(makeid());
module.exports = router;
