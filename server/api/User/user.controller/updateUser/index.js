  'use strict';
  
   var User = require('../../user.dynamo/index.js');
   const chalk = require('chalk');

   function updateUser(req, res, next) {
     User.update(req.params.userID, (err) => {
       if (err) { console.log(chalk.red(err)); }
     });
   } 

   module.exports = updateUser;
