/**
 * ConnecterController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var bcrypt = require('bcrypt');

module.exports = {

    connecter: function(req, res){
        var nom = req.param("nom");
        var prenom = req.param("prenom");
        var categorie = req.param("categorie");
        var password = req.param("password");
        //res.view('pages/home', {nom: nom, prenom: prenom, categorie: categorie, password: password});
        Connecter.create(req.allParams(), function connecterCreated(err, user){
            if(err){
                console.log("Erreur:" + err);
            }
            else{
              Connecter.findOne({
                  nom: nom,
                  prenom: prenom
                }).exec(function (err, user) {
                  req.session.authenticated = true;
                  req.session.User = user;

                  // Redirect to protected area
                  return res.redirect('/dashboard');
                });
            };
        });
    },

    login: function(req, res) {
      var nom = req.param('nom');
      var prenom = req.param('prenom');
      var password = req.param('password');

      // Lookup the user in the database
      Connecter.findOne({
          nom: nom,
          prenom: prenom
      }).exec(function (err, user) {

          // Account not found
          if (err || !user) {
              return res.send('Vérifier votre nom ou prénom ou mot de passe', 500);
          }

          // Compare the passwords
          bcrypt.compare(password, user.password, function(err, valid) {
              if(err || !valid)
                  return res.send('Mot de passe incorrecte', 500)

              // The user has authenticated successfully, set their session
              req.session.authenticated = true;
              req.session.User = user;

              // Redirect to protected area
              return res.redirect('/dashboard');
          });
      });
    },

    logout: function(req, res) {
      req.session.destroy(function(err) {
        if(err){
          return res.send('Erreur déconnexion', 500);
        }
        else{
          return res.redirect('/inscrire');
        }

      });
    },

    show: function(req, res){
        Connecter.find(function foundConnecter(err, users){
            if(err){
                console.log("Erreur:" + err);
            }
            else{
                console.log("Ok Show");
                res.view('pages/show', { users: users });
            };
        });
    },

    show_user: function(req, res){
        Connecter.findOne(req.param('id'), function foundoneConnecter(err, user){
            if(err){
                console.log("Erreur:" + err);
            }
            else{
                console.log("Ok Show_user");
                res.view('pages/show_user', { user: user });
            };
        });
    },

    edit_user: function(req, res){
        Connecter.update(req.param('id'), req.allParams(), function updateConnecter(err){
            if(err){
                console.log("Erreur:" + err);
            }
            else{
                console.log("Ok Edit_user");
                res.redirect('/show');
            };
        });
    },

    supprimer_user: function(req, res){
        Connecter.destroy(req.param('id'), function destroyConnecter(err){
            if(err){
                console.log("Erreur:" + err);
            }
            else{
                console.log("Ok destroy_user");
                res.redirect('/show');
            };
        });
    }



};


