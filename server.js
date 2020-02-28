const express = require('express');

const apiRouter = require('./api/api-router.js');


const server = express();

server.use(express());
server.use('/api', apiRouter);


server.get('/', (req, res) => {
    res.send("Server is up and running");
});


module.exports = server;