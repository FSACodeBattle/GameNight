const router = require('express').Router();
const io = require('../../bin/io');


router.get('/all', (req, res, next) => {
  const ioObj = io();
  const clients = Object.keys(ioObj.sockets.adapter.rooms["MainLobby"].sockets);
  res.send(clients);
})

router.get('/room/:roomid', (req, res, next) => {
  const ioObj = io();
  const roomId = req.params.roomid;
  const clients = Object.keys(ioObj.sockets.adapter.rooms[roomId].sockets);
  res.send(clients);
})

module.exports = router;
