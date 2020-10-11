/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  '/inscrire' : 'inscrireController.inscrire',

  '/home' : { view: 'pages/home' },

  '/exemple': 'exempleController.test',

  '/creer_compte' : { view: 'pages/creer_compte'},

  'post /creer_compte' : 'connecterController.connecter',

  '/show' : 'connecterController.show',

  'get /edit/:id' : 'connecterController.show_user',

  'post /edit/:id' : 'connecterController.edit_user',

  '/supprimer/:id' : 'connecterController.supprimer_user',

  '/login' : { view: 'pages/login'},

  'post /login' : 'connecterController.login',

  '/dashboard' : { view: 'pages/dashboard' },

  '/logout' : 'connecterController.logout',




  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
