(function () {
  'use strict';

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var ActivitySchema = new Schema({
    name: String,
    price: String
  });

  module.exports = mongoose.model('Activity', ActivitySchema);

})();