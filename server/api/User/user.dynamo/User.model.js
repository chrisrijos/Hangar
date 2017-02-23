  'use strict';

   module.exports = (dynamoose) => {
     var UserSchema = require('./User.schema'); 
     var User = dynamoose.model('User', UserSchema); 
   } 

