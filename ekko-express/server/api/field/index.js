/**
 * Main application routes
 */

'use strict';

var ExpressStormpath = require('express-stormpath');

module.exports = function (app) {
    // Insert routes below
    var db = app.get('db');

    // API/FIELD
    app.route("/api/field").get(ExpressStormpath.loginRequired , function (req, res) {
        //req.user.customData.AccountProfileId
        db.getpostsforuserwall([27, 'Friend', 'Active', 100, 0], function (err, field) {
            res.send(field);
        });
    });

    //  API/FIELD/REPLIES/:POSTID
    app.route("/api/field/replies/:postId").get(ExpressStormpath.loginRequired, function (req, res) {
        //req.user.customData.AccountProfileId
        db.getpostreplies([27, 'Friend', 'Active', 100, 0, req.params.postId], function (err, replies) {
            res.send(replies);
        });
    });
};