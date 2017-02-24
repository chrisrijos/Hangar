 'use strict';

  const User = require('../../user.dynamo/index.js'); 
  const chalk = require('chalk');

  function softdeleteUser(req, res, next) {
    User.delete(req.params.userID, (err) => {
      if (err) { console.log(chalk.red(err)); }
    });
  }

  module.exports = softdeleteUser; 
