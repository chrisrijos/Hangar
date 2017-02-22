  'use strict';

  const chalk = require('chalk');

  if (!process.env.NODE_ENV) {
    console.log(chalk.red('No Environment Specified...Default to DEV'));
  }

  const express = require('express');
  const app = express();
  const server = require('http').createServer(app);
  const io = require('socket.io')(server);
  const config = require('./server/config/environment/index');

  require('./server/config/middleware')(app);

  //attach io to global object
  global.io = io;

  server.listen(config.port, () => {
    console.log('Pack API Listening on ', config.port, app.get('env'));
  });


  exports = module.exports = app;
