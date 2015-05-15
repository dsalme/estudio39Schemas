(function () {
  'use strict';

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var StudentSchema = new Schema({
    name: String,
    telefono: String,
    direccion: String,
    mail: String,
    fechaAlta: String,
    facebook: String,
    /**
     * si el alumno esta inscripto en alguna actividad
     * podemos deducir de que el alumno esta activo
     * en caso de que el alumno se dé de baja de esa actividad
     * se deduce de que esta inactivo
     */
    activities: [
      {
        active: 1,
        activity: {id: 1},
        teacher: {id: 1},
        payments: [
          {
            period: 3,
            amount: 4,
            cost: 1,
            debt: 1000
          }
        ]
      }
    ]
  });
  /**
   * idea de asistencias
   * proceso diario que arme los horarios en una vista aparte con todas las actividades
   * del dia, y que se generen los registros de asistencia en falso de cada uno de los
   * alumnos que tengan que asistir ese dia
   * cada actividad va a estar separada por tabs
   */

  module.exports = mongoose.model('Student', StudentSchema);

})();