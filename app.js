  'use strict';

  const chalk = require('chalk');
  const AWS = require('aws-sdk');
  require('dotenv').config();

  if (!process.env.NODE_ENV) {
    console.log(chalk.red('No Environment Specified...Default to DEV'));
  }

  AWS.config.update({
    region: 'us-east-1'
  });

  const express = require('express');
  const app = express();
  const server = require('http').createServer(app);
  const io = require('socket.io')(server);

  const config = require('./server/config/environment/index');
  require('./server/config/middleware')(app);
  require('./routes')(app);

  //attach io to global object
  global.io = io;

  server.listen(config.port, () => {
    console.log('Pack API Listening on ', config.port, app.get('env'));
  });


  exports = module.exports = app;
