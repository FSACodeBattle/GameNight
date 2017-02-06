const router = require('express').Router();
const io = require('../../bin/io');


router.get('/all', (req, res, next) => {
  const ioObj = io();
  const mainLobby = ioObj.sockets.adapter.rooms["MainLobby"];

  //console.log(mainLobby.sockets);
  let clients = [];
  if(mainLobby) {
    clients = Object.keys(mainLobby.sockets).map(id => {
      const user = ioObj.sockets.connected[id].user;
      user.socketId = id;
      return user;
    })
  }

  res.send(clients);
})

router.get('/room/:roomid', (req, res, next) => {
  const ioObj = io();
  const roomId = req.params.roomid;
  const clients = Object.keys(ioObj.sockets.adapter.rooms[roomId].sockets);
  res.send(clients);
})

module.exports = router;
