'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Medium = new Schema({
  url: String,
  title: String,
  directory: String,
  updatedAt: Date
});

module.exports = mongoose.model('Medium', Medium );
