'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for User
let User = new Schema({
  name: {
    type: String
  },
  lastname: {
    type: String
  },
  username: {
    type: String
  },
  email: {
  	type: String,
    required: true, 
    unique: true
  },
  password:{
  	type: String
  },
  tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'task'
    }],
},{
    collection: 'user'
});

module.exports = mongoose.model('User', User);
