  'use strict';

   const router = require('express').Router();
   const controller = require('./Aircraft/aircraft.controller/index');

   /*router.get('/', controller.getAircraft);
   router.post('/', controller.createAircraft);

   router.route('/:aircraftId')
     .get(controller.getAircraftById)
     .put(controller.updateUser)
     .delete(controller.deleteUser);*/
 
   module.exports = router;
