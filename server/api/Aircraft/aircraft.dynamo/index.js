  'use strict';
  
   var dynamoose = require('dynamoose'); 
   var Aircraft = require('./Aircraft.model')(dynamoose);

   module.exports = Aircraft;
