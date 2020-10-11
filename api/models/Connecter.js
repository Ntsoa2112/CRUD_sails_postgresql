/**
 * Connecter.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
    nom: { type: 'string', required: true },
    prenom: { type: 'string', required: true },
    categorie: { type: 'string', required: true },
    password: { type: 'string', required: true },

  },


  beforeCreate: function(connecter, cb) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(connecter.password, salt, function(err, hash) {
            if (err) {
                console.log(err);
                cb(err);
            } else {
                connecter.password = hash;
                cb();
            }
        });
    });
  },


  datastore : 'default'

};

