// import express from 'express';
const http = require('http');

const app = require('./app');

const port = process.env.PORT || 5000;

const server = http.createServer(app)

server.listen(port, () => {
    console.info(`Server started at http://localhost:${port}`);
});