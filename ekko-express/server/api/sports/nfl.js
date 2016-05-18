/**
 * Main application routes
 */

'use strict';

var ExpressStormpath = require('express-stormpath');

module.exports = function (app) {
    // Insert routes below
    var db = app.get('db');
    
    //  API/NFL/:teamid
    app.route("/api/nfl/team/:teamid?").get(function(req, res) {
        db.stats.nfl_teams.findOne({ teamid: req.params.teamid }, function(err, team) {
            team.teamimage = "https://s3-us-west-2.amazonaws.com/ekkosports/logos/nfl/" + team.teamnickname.toLowerCase() + "-logo.png";

            res.send(team);
        });
    });

    //  API/NFL/SCHEDULE/WEEK/:teamid?
    app.route("/api/nfl/schedule/week/:teamid?").get(function (req, res) {

        if (req.params.teamid) {
            db.stats.nfl_getschedulesforteam([req.params.teamid], { order: 'startdatefull' }, function (err, schedule) {
                schedule.forEach(function (element, index, array) {
                    element.awayteamimage = "https://s3-us-west-2.amazonaws.com/ekkosports/logos/nfl/" + element.awayteamnickname + "-logo.png";
                    element.hometeamimage = "https://s3-us-west-2.amazonaws.com/ekkosports/logos/nfl/" + element.hometeamnickname + "-logo.png";
                });
                res.send(schedule);
            });
        } else {
            db.stats.nfl_getschedules([new Date(), 0, 0], { order: 'startdatefull' }, function (err, schedule) {
                schedule.forEach(function (element, index, array) {
                    element.awayteamimage = "https://s3-us-west-2.amazonaws.com/ekkosports/logos/nfl/" + element.awayteamnickname + "-logo.png";
                    element.hometeamimage = "https://s3-us-west-2.amazonaws.com/ekkosports/logos/nfl/" + element.hometeamnickname + "-logo.png";
                });
                res.send(schedule);
            });
        }

    });
    
    //  API/NFL/TEAMS
    app.route("/api/nfl/teams").get(function (req, res) {
        db.stats.nfl_teams.find({}, function (err, teams) {
            teams.forEach(function (element, index, array) {
                element.leagueabbreviation = element.leagueabbreviation === "CFB" ? "FBS" : element.leagueabbreviation === "CBK" ? "NCAAM" : element.leagueabbreviation;
                element.teamimage = (element.leagueid === 16 || element.leagueid === 2) ? "https://s3-us-west-2.amazonaws.com/ekkosports/logos/college/" + element.teamlocation + "-logo.png" : "https://s3-us-west-2.amazonaws.com/ekkosports/logos/" + element.leagueabbreviation + "/" + element.teamnickname + "-logo.png";
            });
            res.send(teams);
        });
    });

};