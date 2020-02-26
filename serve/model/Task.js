'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for User
let Task = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  privated: {
  	type: Boolean
  },
  seller: {
        type: Schema.Types.ObjectId,
        ref: 'user'
  }
},{
    collection: 'task'
});

module.exports = mongoose.model('Task', Task);
