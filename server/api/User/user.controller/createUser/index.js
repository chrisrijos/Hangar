  'use strict';
   
   var User = require('../../user.dynamo/index.js');
  
   function createUser(req, res, next) {
     User.create(req.body, (user) => {
        return res.status(201).json(user);
     });
   }

   module.exports = createUser;
   
