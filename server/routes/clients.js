const router = require('express').Router();
const io = require('../../bin/io');


router.get('/all', (req, res, next) => {
  const ioObj = io();
  console.log('io id', ioObj);
  const clients = Object.keys(ioObj.sockets.adapter.rooms["MainLobby"].sockets);
  res.send(clients);
})

module.exports = router;
