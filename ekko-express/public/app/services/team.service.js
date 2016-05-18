'use strict';

angular.module('ekkoApp').factory('Team', [
    '$http', function ($http) {
        var teamFactory = [];
        
        var _getSportScheduleForCurrentWeek = function (sport) {
            switch(sport) {
                case "nfl":
                    return $http.get('/api/nfl/schedule/week').then(function (response) {
                        return response;
                    });
            }
        };

        var _getSportScheduleForCurrentWeekForTeam = function(sport, teamId) {
            switch (sport) {
                case "nfl":
                    return $http.get('/api/nfl/schedule/week/' + teamId).then(function (response) {
                        return response;
                    });
            }
        };

        var _getTeamsBySport = function (sport) {
            
            switch (sport) {
                case 'nfl':
                    return $http.get('/api/nfl/teams').then(function (response) {
                        return response;
                    });
            }
        };
        
        var _getConferencesBySport = function(sport) {
            switch (sport) {
                case 'fbs':
                    return $http.get('/api/fbs/conferences').then(function (response) {
                        return response;
                    });
            }           
        }

        var _getTeam = function(teamid) {
            return $http.get('/api/nfl/team/' + teamid).then(function(response) {
                return response;
            });
        }

        teamFactory.getSportScheduleForCurrentWeek  = _getSportScheduleForCurrentWeek ;
        teamFactory.getTeamsBySport = _getTeamsBySport;
        teamFactory.getSportScheduleForCurrentWeekForTeam = _getSportScheduleForCurrentWeekForTeam;
        teamFactory.getTeam = _getTeam;
        teamFactory.getConferencesBySport = _getConferencesBySport;

        return teamFactory;
    }
]);