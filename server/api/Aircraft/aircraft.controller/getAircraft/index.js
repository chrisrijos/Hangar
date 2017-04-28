  'use strict';

  var Aircraft = require('../../aircraft.dynamo/index.js');

  function getAircraft(req, res, next) {
    Aircraft.get(req.params.aircraftId, (aircraft) => {
      return res.status(200).json(aircraft);
    });
  }

  module.exports = getAircraft;
  
