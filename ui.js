const awsServerlessExpress = require('aws-serverless-express');
const server = require('./server');



const serverProxy = awsServerlessExpress.createServer(server, null);
module.exports.universal = (event, context) => awsServerlessExpress.proxy(serverProxy, event, context);
