/**
 * InscrireControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    inscrire: function(req, res){
        res.view('pages/inscrire');
    }
};

