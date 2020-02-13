const express = require('express');
const apiRouter = require('./api/apiRouter');
const server = express();

server.use(express.json());
server.use('/api', logger, apiRouter);

server.get('/', (req, res) => {
    res.send('<h1>Welcome to the Golden Girls API</h1>');
})

function logger (req, res, next){
    console.log(`${req.method} request to ${req.originalUrl}`);
    next();
}

module.exports = server;