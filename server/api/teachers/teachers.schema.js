(function () {
  'use strict';

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;
  var crypto = require('crypto');
  var authTypes = ['github', 'twitter', 'facebook', 'google'];


  var TeacherSchema = new Schema({
    name: String,
    phone: String,
    mail: String,
    activities: [
      {
        _id: Number,
        ref: "Activities"
      }
    ],
    schedule: [
      {
        day: String,
        since: String,
        until: String,
        turns: [
          {
            activity: {id: String},
            students: [{id: String}],
            time: String
          }
        ]
      }
    ],
    createDate: date,
    facebook: String
  });

  module.exports = mongoose.model('Masters', TeacherSchema);


})();