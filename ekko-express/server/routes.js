/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var ExpressStormpath = require('express-stormpath');

module.exports = function (app) {
    // Insert routes below
    require('./api/field')(app);
    require('./api/sports/fbs')(app);
    require('./api/sports/mlb')(app);
    require('./api/sports/nba')(app);
    require('./api/sports/ncaam')(app);
    require('./api/sports/nfl')(app);
    require('./api/sports/nhl')(app);
    
    // All undefined asset or api routes should return a 404
    app.route('/:url(api|auth|components|app|bower_components|assets)/*').get(errors[404]);
    
    // All other routes should redirect to the index.html
    app.route('/*')
    .get(function (req, res) {
        res.sendFile(app.get('appPath'));
    });
};