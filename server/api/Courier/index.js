  'use strict';

  const router = require('express').Router();
  const controller = require('./charge.controller');

  router.post('/', controller.charge);

  module.exports = router;
