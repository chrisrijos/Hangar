  'use strict';
  
   var Aircraft = require('../../aircraft.dynamo/Aircraft.schema');
   const chalk = require('chalk');

   function updateAircraft(req, res, next) {
     Aircraft.update(req.params.aircraftId, (err) => {
       if (err) { console.log(chalk.red(err)); }
     });
   } 

   module.exports = updateAircraft;
