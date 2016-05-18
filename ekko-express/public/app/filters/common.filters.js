'use strict';

angular.module('ekkoFilters', [])
    .filter('dateDiff', function() {
        //   * 60 * 24
        return function(toDate, fromDate) {
            if (toDate && fromDate) {
                var magicNumber = (1000 * 60);

                fromDate = new Date(fromDate);
                toDate = new Date(toDate);
                toDate.setMinutes(toDate.getMinutes() + fromDate.getTimezoneOffset());

                var timePeriod = " minutes ago";

                var dayDiff = Math.abs(Math.floor((toDate - fromDate) / magicNumber));
                if (dayDiff > 60) {
                    magicNumber = (1000 * 60 * 60);
                    dayDiff = Math.abs(Math.floor((toDate - fromDate) / magicNumber));

                    if (dayDiff > 12) {
                        magicNumber = (1000 * 60 * 60 * 24);
                        dayDiff = Math.abs(Math.floor((toDate - fromDate) / magicNumber));
                        timePeriod = " days ago.";
                    } else {
                        timePeriod = " hours ago";
                    }
                }
                return dayDiff + timePeriod;
            }
        };
    })
    .filter('militaryTime', function() {

        return function(gameStartDate) {

            if (!gameStartDate.hour) {
                return "TBA";
            }

            var hour = gameStartDate.hour;
            var minutes = gameStartDate.minute === 0 ? "00" : gameStartDate.minute < 10 ? "0" + gameStartDate.minute : gameStartDate.minute;
            var returnTime = "";

            if (hour > 12) {
                returnTime = (hour - 12) + ':' + minutes + ' pm';
            } else if (hour === 0) {
                returnTime = 12 + ':' + minutes + ' am';
            } else if (hour === 12) {
                returnTime = hour + ':' + minutes + ' pm';
            } else {
                returnTime += ' am';
            }

            return returnTime;
        }
    })
    .filter('scoreType', function() {
        return function(scoreType) {
            var returnValue = "";

            switch (scoreType) {
            case "Rushing TD":
                returnValue = "TD";
                break;
            case "Passing TD":
                returnValue = "TD";
                break;
            case "Field Goal Attempt":
                returnValue = "FG";
                break;
            }

            return returnValue;
        };
    })
    .filter('unique', function() {
        return function(collection, keyname) {
            var output = [],
                keys = [];

            angular.forEach(collection, function(item) {
                var key = item[keyname];
                if (keys.indexOf(key) === -1) {
                    keys.push(key);
                    output.push(item);
                }
            });

            return output;
        };
    })
    .filter('byConference', function() {
        return function(collection, conferenceId) {
            var output = [];
            angular.forEach(collection, function(item) {
                if (item.ConferenceId === conferenceId) {
                    output.push(item);
                }
            });

            return output;
        }
    })
    .filter('byDivision', function() {
        return function(collection, params) {
            var conferenceId = params.conferenceId;
            var divisionId = params.divisionId;
            var output = [];
            angular.forEach(collection, function(item) {
                if (divisionId !== 0) {
                    if (item.ConferenceId === conferenceId && item.DivisionId === divisionId) {
                        output.push(item);
                    }
                } else {
                    if (item.ConferenceId === conferenceId) {
                        output.push(item);
                    }
                }
            });

            return output;
        }
    })
    .filter('todaysDate', function() {
        return function(collection) {

            var output = [];

            var now = new Date().toDateString();

            angular.forEach(collection, function(item) {
                var startDate = new Date(item["StartDateFull"]).toDateString();
                if (startDate === now) {
                    output.push(item);
                }
            });

            return output;
        }
    })
    .filter('hasImages', function() {
        return function(collection) {
            var output = [];

            angular.forEach(collection, function(item) {
                if (item["images"]) {
                    output.push(item);
                }
            });

            return output;
        }
    })
    .filter('pbpByDrive', function() {
        return function(collection, driveId) {
            var output = [];

            angular.forEach(collection, function(item) {
                if (item["driveId"] === driveId) {
                    output.push(item);
                }
            });

            return output;
        }
    });