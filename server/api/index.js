  'use strict';

   const router = require('express').Router();
   const controller = require('./User/user.controller/index');

   //router.get('/', controller.getUser);
   router.post('/', controller.createUser);
   /*router.route('/:userID')
     .get(controller.getUser)
     .put(controller.updateUser)
     .delete(controller.deleteUser);*/
 
   module.exports = router;
