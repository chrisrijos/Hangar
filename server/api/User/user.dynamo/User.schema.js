  'use strict';

  var AWS = require('aws-sdk');
  var dynamoose = require('dynamoose');
  var chalk = require('chalk');
  
  var UserSchema = dynamoose.Schema({
    userID: {
      type: Number,
      hashKey: true
    },
    name: {
      type: String,
      rangeKey: true,
      index: true,
      required: true
    },
    email: {
      type: String,
      rangeKey: true,
      index: true,
      required: true
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
    }
    ,
    created: {
      type: Date
    },
    throughput: {
      read: 10,
      write: 10,
      timestamps: true
    }
  });
 
  module.export = UserSchema;
