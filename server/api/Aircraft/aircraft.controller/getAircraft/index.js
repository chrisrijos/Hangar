  'use strict';

  var Aircraft = require('../../aircraft.dynamo/Aircraft.schema');

  function getAircraft(req, res, next) {
    Aircraft.get(req.params.aircraftId, (aircraft) => {
      return res.status(200).json(aircraft);
    });
  }

  module.exports = getAircraft;
  
