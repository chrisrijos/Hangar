  'use strict';

  var User = require('../../user.dynamo/index.js');

  function getUser(req, res, next) {
    User.get(req.params.userID, (user) => {
      return res.status(200).json(user);
    });
  }

  module.exports = getUser;
  
