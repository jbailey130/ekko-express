/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

var express = require('express');
var config = require('./config/environment');
var ExpressStormpath = require('express-stormpath');
var path = require('path');
// Setup server
var app = express();
var massive = require("massive");
var connectionString = "postgres://ekkoadmin:S34hawks!@ekkoinstance.coomxgvuuyys.us-west-2.rds.amazonaws.com/ekkosports";

// connect to Massive and get the db instance. You can safely use the
// convenience sync method here because its on app load
// you can also use loadSync - it's an alias
var massiveInstance = massive.connectSync({ connectionString: connectionString });
// Set a reference to the massive instance on Express' app:
app.set('db', massiveInstance);

var server = require('http').createServer(app);

/*
  The config/express file is setting up the static file server which serves your
  angular application assets.  We don't need to authenticate those requests, so
  we do this before calling Stormpath.
 */
require('./config/express')(app);

console.log('Initializing Stormpath');

/*
  Now we initialize Stormpath, any middleware that is registered after this
  point will be protected by Stormpath.
  The spaRoot setting tells the Stormpath library where your Angular app is,
  as it will need to serve it for the default routes like /login and
  /register.  The appPath property is provided by the configuration parser
  in the Yeoman boilerplate.
 */
app.use(ExpressStormpath.init(app, {
    website: true,
    expand: {
        customData: true
    },
    web: {
        spaRoot: app.get('appPath')
    },
    postRegistrationHandler: function (account, req, res, next) {
        console.log('User:', account.email, 'just registered!');
        
        //  ADD CUSTOM DATA
        var db = app.get('db');
        db.getaccountid([req.user.email, req.user.username], function(err, result) {
            req.user.customData.AccountProfileId = result[0].getaccountid;
            req.user.customData.Avatar = "";
            req.user.customData.Bio = "";
            req.user.customData.HeaderAvatar = "";
            req.user.customData.Location = "";
            req.user.customData.Teams = [];
            
            req.user.customData.save();
        });

        next();
    },
    postLoginHandler: function (account, req, res, next) {
        console.log('User:', account.email, 'just logged in!');

        next();
    }
}));

require('./routes')(app);

app.on('stormpath.ready', function () {
    
    console.log('Stormpath Ready');
    
    // Start server
    server.listen(1337, '127.0.0.1', function () {
        console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
    });
});

// Expose app
exports = module.exports = app;