/**
 * Main application routes
 */

'use strict';

var ExpressStormpath = require('express-stormpath');

module.exports = function (app) {
    // Insert routes below
    var db = app.get('db');
       
    //  API/NFL/TEAMS
    app.route("/api/fbs/conferences").get(function (req, res) {
        var options = {
            order: "conferencename",
            columns: [
                "collegesubdivisionid", 
                "collegesubdivisionname", 
                "conferenceid", 
                "conferencename", 
                "conferenceabbreviation"
            ],
            distinct: true
        };
        db.stats.cfb_teams.find({}, options, function (err, conferences) {
            var uniqueConf = [];
            conferences.forEach(function (element, index, array) {

                uniqueConf.forEach(function(e, i, a) {
                    if (element.conferenceid !== e.conferenceid || uniqueConf.length === 0) {
                        uniqueConf.push(e);
                    }
                });
            });
            var a = uniqueConf;
            res.send(a);
        });
    });
};