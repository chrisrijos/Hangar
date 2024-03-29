 'use strict';

  const Aircraft = require('../../aircraft.dynamo/Aircraft.schema'); 
  const chalk = require('chalk');

  function deleteAircraft(req, res, next) {
    Aircraft.delete(req.params.aircraftId, (err) => {
      if (err) { console.log(chalk.red(err)); }
    });
  }

  module.exports = deleteAircraft; 
