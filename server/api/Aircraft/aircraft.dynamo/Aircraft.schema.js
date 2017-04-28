  'use strict';

  var AWS = require('aws-sdk');
  var dynamoose = require('dynamoose');
  var chalk = require('chalk');
  
  var AircraftSchema = dynamoose.Schema({
    aircraftId: {
      type: Number,
      hashKey: true
    },
    model: {
      type: String,
      rangeKey: true,
      index: true
      //required: true
    },
    /* ownerId: {
      type: String,
      rangeKey: true,
      index: true,
      //required: true
    },
    year: {
      type: String  
    },
    price: {
      type: Number,
      //required: true
    },
    images: {
      type: [String] 
    },
    engine: {
      type: String
    },
    type: {
      type: String,
      //required: true
    },
    address: {
      type: Object,  
      address_line: {
        type: String
      },
      state: {
        type: String
      },
      zip_code: {
        type: Number
      }
    },*/
    created: {
      type: Date
    },
    throughput: {
      read: 10,
      write: 10,
      timestamps: true
    }
  });
 
  module.exports = AircraftSchema;
