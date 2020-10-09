/**
 * ConnecterController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    
    connecter: function(req, res){
        var nom = req.param("nom");
        var prenom = req.param("prenom");
        var categorie = req.param("categorie");
        var password = req.param("password");
        //res.view('pages/home', {nom: nom, prenom: prenom, categorie: categorie, password: password});
        Connecter.create(req.allParams(), function connecterCreated(err, connecter){
            if(err){
                console.log("Erreur:" + err);
            }
            else{
                console.log("Ok");
                res.view('pages/home', { nom: nom, prenom: prenom, categorie: categorie, password: password});
            };
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


 