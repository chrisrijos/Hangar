  'use strict';

  const Aircraft = require('../../aircraft.dynamo/Aircraft.schema');

  function createAircraft(req, res, next) {
    Aircraft.create(req.body, (aircraft) => {
      return res.status(201).json(aircraft);
    });
  }

  module.exports = createAircraft;
