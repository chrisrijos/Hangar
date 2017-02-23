  'use strict';

  module.exports = function(app) {
    app.use('./server/api', require('./server/api'));

    app.route('/*').all( (req, res) => {
      res.sendStatus(404);
    });
  }
