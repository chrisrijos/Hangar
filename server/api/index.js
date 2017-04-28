  'use strict';

  const router = require('express').Router();

  //API Endpoints
  router.use('/aircraft', require('./Aircraft/'));

  module.exports = router;
