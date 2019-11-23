const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

const express = require('express');
const path = require('path');

const server = express();
server.use(express.static(path.join(process.cwd() + '/build')));


server.get('*', (req, res) => {
    res.sendFile(path.join(process.cwd() + '/build/index.html'));
});


server.use(awsServerlessExpressMiddleware.eventContext());


module.exports = server;
