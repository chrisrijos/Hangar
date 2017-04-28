  'use strict';

   const router = require('express').Router();
   const controller = require('./aircraft.controller/index');

  //router.get('/', controller.getAircraft);
  router.post('/', controller.createAircraft);

  router.route('/:aircraftId')
    .get(controller.getAircraft)
    .put(controller.updateAircraft)
    .delete(controller.deleteAircraft)

   module.exports = router;
