const router = require('express').Router();
const io = require('../../bin/io');


router.get('/all', (req, res, next) => {
  const ioObj = io();
  const clients = Object.keys(ioObj.sockets.adapter.rooms["MainLobby"].sockets);
  res.send(clients);
})

module.exports = router;
