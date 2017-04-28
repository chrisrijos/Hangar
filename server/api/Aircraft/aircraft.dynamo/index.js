  'use strict';

   const dynamoose = require('dynamoose'); 
   const AircraftSchema = require('./Aircraft.schema');

   //defines aircraft schema
   const Aircraft = dynamoose.model('Aircraft', AircraftSchema); 

   module.exports = Aircraft;
