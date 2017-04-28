  'use strict';

   module.exports = (dynamoose) => {
     var AircraftSchema = require('./Aircraft.schema'); 
     var Aircraft = dynamoose.model('Aircraft', AircraftSchema); 
   } 
