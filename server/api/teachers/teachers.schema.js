(function () {
  'use strict';

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

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
            students: [
              {id: String}
            ],
            time: String,
            payments: [
              {
                debt: 2,
                period: 1
              }
            ]
          }
        ]
      }
    ],
    createDate: String,
    facebook: String
  });

  module.exports = mongoose.model('Teacher', TeacherSchema);

})();