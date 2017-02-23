  'use strict';
  
   var dynamoose = require('dynamoose'); 
 
   var User = require('./User.model')(dynamoose);

   module.exports = User;
