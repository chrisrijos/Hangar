  'use strict';
  
  const methodOverride = require('method-override');
  const compression = require('compression');
  const bodyParser = require('body-parser');
  const path = require('path');
  const morgan = require('morgan');

  const config = require('./environment/index');

  module.exports = function (app) {
    app.disable('x-powered-by');

    app.use(compression());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(methodOverride());

    const env = app.get('env');

    if (env !== 'test') {
      app.use(morgan('dev'));
    }

  };
