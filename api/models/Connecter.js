/**
 * Connecter.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nom: { type: 'string', required: true },
    prenom: { type: 'string', required: true },
    categorie: { type: 'string', required: true },
    password: { type: 'string', required: true },

  },

  datastore : 'default'

};

