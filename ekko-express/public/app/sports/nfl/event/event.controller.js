'use strict';

angular.module('ekkoApp')
    .controller('NflEventCtrl', [
    '$scope', function ($scope) {

        $scope.recap = {
            "status": "OK",
            "recordCount": 1,
            "startTimestamp": "2016-01-04T15:14:44.5653637Z",
            "endTimestamp": "2016-01-04T15:14:44.7216147Z",
            "timeTaken": 0.156251,
            "apiResults": [
                {
                    "sportId": 4,
                    "name": "Football",
                    "league": {
                        "leagueId": 8,
                        "name": "National Football League",
                        "abbreviation": "NFL",
                        "displayName": "NFL",
                        "story": {
                            "storyId": "20140921182240685782708",
                            "originalStoryId": "20140921161108607689108",
                            "publishDate": {
                                "year": 2014,
                                "month": 9,
                                "date": 21,
                                "hour": 18,
                                "minute": 23,
                                "second": 22,
                                "full": "2014-09-21T18:23:22",
                                "dateType": "Eastern"
                            },
                            "version": 2,
                            "storyType": {
                                "storyTypeId": 127,
                                "name": "recap"
                            },
                            "code": "NFL",
                            "slug": "AP-FBN--Vikings-Saints, 2nd Ld-Writethru",
                            "languageType": {
                                "id": 1,
                                "name": "EN"
                            },
                            "eventId": 1421674,
                            "teams": [
                                {
                                    "teamId": 350,
                                    "location": "New Orleans",
                                    "nickname": "Saints",
                                    "abbreviation": "NO",
                                    "teamLocationType": {
                                        "teamLocationTypeId": 1,
                                        "name": "home"
                                    }
                                }, {
                                    "teamId": 347,
                                    "location": "Minnesota",
                                    "nickname": "Vikings",
                                    "abbreviation": "Min",
                                    "teamLocationType": {
                                        "teamLocationTypeId": 2,
                                        "name": "away"
                                    }
                                }
                            ],
                            "players": [
                                {
                                    "playerId": 25598,
                                    "firstName": "Drew",
                                    "lastName": "Brees"
                                }, {
                                    "playerId": 30727,
                                    "firstName": "Sean",
                                    "lastName": "Payton"
                                }, {
                                    "playerId": 75699,
                                    "firstName": "Shayne",
                                    "lastName": "Graham"
                                }, {
                                    "playerId": 81133,
                                    "firstName": "Jonathan",
                                    "lastName": "Goodwin"
                                }, {
                                    "playerId": 145407,
                                    "firstName": "Matt",
                                    "lastName": "Cassel"
                                }, {
                                    "playerId": 156869,
                                    "firstName": "Greg",
                                    "lastName": "Jennings"
                                }, {
                                    "playerId": 162990,
                                    "firstName": "Marques",
                                    "lastName": "Colston"
                                }, {
                                    "playerId": 215734,
                                    "firstName": "Pierre",
                                    "lastName": "Thomas"
                                }, {
                                    "playerId": 267443,
                                    "firstName": "Adrian",
                                    "lastName": "Peterson"
                                }, {
                                    "playerId": 295918,
                                    "firstName": "Jimmy",
                                    "lastName": "Graham"
                                }, {
                                    "playerId": 332869,
                                    "firstName": "Captain",
                                    "lastName": "Munnerlyn"
                                }, {
                                    "playerId": 458095,
                                    "firstName": "Blair",
                                    "lastName": "Walsh"
                                }, {
                                    "playerId": 469187,
                                    "firstName": "Robert",
                                    "lastName": "Blanton"
                                }, {
                                    "playerId": 690153,
                                    "firstName": "Cordarrelle",
                                    "lastName": "Patterson"
                                }, {
                                    "playerId": 694791,
                                    "firstName": "Tim",
                                    "lastName": "Lelito"
                                }
                            ],
                            "images": [
                                {
                                    "imageId": "201409211431523010290",
                                    "source": "APWF",
                                    "caption": "New Orleans Saints quarterback Drew Brees (9) and wide receiver Kenny Stills (84) celebrate with Marques Colston, center, on Colston's touchdown reception in the second half of an NFL football game in New Orleans, Sunday, Sept. 21, 2014. (AP Photo/Bill Haber)"
                                }, {
                                    "imageId": "201409211434524490301",
                                    "source": "APWF",
                                    "caption": "New Orleans Saints wide receiver Marques Colston (12) scores on a touchdown reception over Minnesota Vikings strong safety Robert Blanton (36) in the second half of an NFL football game in New Orleans, Sunday, Sept. 21, 2014. (AP Photo/Rogelio Solis)"
                                }, {
                                    "imageId": "201409211422517440219",
                                    "source": "APWF",
                                    "caption": "Minnesota Vikings quarterback Teddy Bridgewater (5) scrambles under pressure from New Orleans Saints defensive end Glenn Foster (97) in the second half of an NFL football game in New Orleans, Sunday, Sept. 21, 2014. (AP Photo/Bill Haber)"
                                }, {
                                    "imageId": "201409211423517980228",
                                    "source": "APWF",
                                    "caption": "New Orleans Saints quarterback Drew Brees goes after Minnesota Vikings strong safety Robert Blanton (36) after a flag was thrown for a personal foul on a sack in the second half of an NFL football game in New Orleans, Sunday, Sept. 21, 2014. (AP Photo/Rogelio Solis)"
                                }
                            ],
                            "header": {
                                "headline": "Saints get first win of season, 20-9 over Vikings",
                                "byline": "By BRETT MARTEL",
                                "bytitle": "AP Sports Writer"
                            },
                            "content": {
                                "paragraphs": ["NEW ORLEANS (AP)  Drew Brees pushed himself up vigorously after being slammed to the Superdome turf, angrily shoving the first player he saw in a purple jersey.", "Brees soon realized he'd shoved the wrong guy, but still thought his intensity sent the right message.", "''You need to create some fire. You need to create momentum, stuff that guys can feed off of,'' Brees said. ''Obviously I wasn't too happy about getting suplexed, so I showed a little emotion.", "''After that, it was: `All right fellas, we've got to stick it to `em.'''", "The Saints capitalized on Captian Munnerlyn's personal foul for the overzealous sack, driving for a touchdown that gave New Orleans breathing room en route to a 20-9 victory over the seemingly star-crossed Minnesota Vikings on Sunday.", "Brees passed for 293 yards and two touchdowns to help New Orleans (1-2) celebrate its home opener with its first victory this season. The Vikings (1-2), meanwhile, were left still searching for a running game in the absence of Adrian Peterson - and with a rookie at quarterback for the foreseeable future.", "Minnesota's loss capped a week of distractions as the club first announced that Peterson would play, then later changed course and said the star running back would leave the team indefinitely to deal with child abuse allegations.", "The Vikings then lost starting quarterback Matt Cassel with a broken foot early in the second quarter. He was replaced by rookie Teddy Bridgewater, who completed 12 of 20 for 150 yards while leading two scoring drives that both ended with field goals.", "Brees' scoring passes went for 34 yards to tight end Josh Hill and 18 yards to receiver Marques Colston.", "The Vikings were as close as 13-9 on Blair Walsh's 40-yard field goal early in the second half, but Munnerlyn's penalty squandered what would have been a drive-stalling, third-down sack late in the third quarter.", "''I pride myself on not making crazy plays, and I felt like that cost us the game,'' Munnerlyn said. ''I wasn't thinking about a flag at all. I never heard a whistle, so I was just finishing the play.''", "Safety Robert Blanton piled on at the end of the sack, then was slow getting off Brees, inducing the shove. But no flag was thrown on Brees, and the Saints wound up with a first down at their 47.", "Brees thought Munnerlyn committed an obvious penalty with a move reminiscent of professional wrestling.", "''That was straight Hulk Hogan, 1985, WrestleMania suplex,'' Brees said. ''Hey, it got us 15 yards, got us another set of downs and obviously ended up helping us go on a 90-yard drive to make it a two-possession game and chew up a lot of clock and got the momentum swinging back in our favor.''", "Soon after, Brees found rookie Brandin Cooks on a screen for a 19-yard gain to the Minnesota 18, then hit Colston, who surged through Blanton's tackle attempt and stretch across the goal line.", "Colston had two catches for 25 yards, one week after he was held without a catch for the first time in 87 games.", "Cooks had eight catches for 74 yards while tight end Jimmy Graham added five catches for 54 yards.", "Greg Jennings led Vikings receivers with five catches for 70 yards, while Cordarrelle Patterson added four catches for 61 yards.", "But without Peterson, Minnesota finished with 59 yards rushing as a team and was outgained by New Orleans in total yards, 396-247.", "Still, Minnesota coach Mike Zimmer focused on the improvement he saw in his team's effort and perseverance since a 30-7 loss to New England a week earlier.", "''The guys hung in there,'' Zimmer said. ''Our whole thing was that if we get punched, we will punch back. I think we did that.''", "The Saints entered the game looking as competitive as a winless team could be, having held leads in the final 10 seconds of regulation in each of their first two games - on the road - before losing by a field goal or less.", "The Saints have won their past 18 home games in which coach Sean Payton was on the sideline. They were 9-0 in 2011, including a playoff win, before Payton was suspended in 2012 in connection with the NFL's bounty probe, then went 8-0 in 2013.", "Brees looked comfortable early, completing his first nine passes for 108 yards while engineering touchdown drives on the Saints first two possessions, and New Orleans never lost the lead.", "Notes: Colston's touchdown marked the 64th time he and Brees connected for a score. Only six other quarterback-receiver tandems have combined for more in NFL history. The score moved Brees and Colston ahead of the Hall of Fame pair of quarterback Johnny Unitas and receiver Raymond Berry. ... Saints veteran C Jonathan Goodwin left the game in the third quarter with a left leg injury. He was replaced by second-year pro Tim Lelito.", "---", "AP NFL website: www.pro32.ap.org and http://twitter.com/AP-NFL"]
                            }
                        }
                    }
                }
            ]
        };

        $scope.viewHeadline = true;
        $scope.viewStory = false;
        $scope.closeHeadline = function () {
            $scope.viewStory = false;
            $scope.viewHeadline = true;
        };
        $scope.showArticle = function (articleId) {
            $scope.viewHeadline = false;
            $scope.viewStory = true;
        }

        $scope.game = {
            "status": "OK",
            "recordCount": 1,
            "startTimestamp": "2015-08-01T23:12:40.5152256Z",
            "endTimestamp": "2015-08-01T23:12:41.6714534Z",
            "timeTaken": 1.1562278,
            "apiResults": [
                {
                    "sportId": 4,
                    "name": "Football",
                    "league": {
                        "leagueId": 8,
                        "name": "National Football League",
                        "abbreviation": "NFL",
                        "displayName": "National Football League",
                        "season": {
                            "season": 2014,
                            "name": "2014-2015 NFL Season",
                            "isActive": false,
                            "eventType": [
                                {
                                    "eventTypeId": 1,
                                    "name": "Regular Season",
                                    "events": [
                                        {
                                            "eventId": 1421674,
                                            "startDate": [
                                                {
                                                    "year": 2014,
                                                    "month": 9,
                                                    "date": 21,
                                                    "hour": 12,
                                                    "minute": 0,
                                                    "full": "2014-09-21T12:00:00",
                                                    "dateType": "Local"
                                                }, {
                                                    "year": 2014,
                                                    "month": 9,
                                                    "date": 21,
                                                    "hour": 17,
                                                    "minute": 0,
                                                    "full": "2014-09-21T17:00:00",
                                                    "dateType": "UTC"
                                                }
                                            ],
                                            "isTba": false,
                                            "isDataConfirmed": {
                                                "box": true,
                                                "pbp": true,
                                                "driveChart": true,
                                                "score": true
                                            },
                                            "eventStatus": {
                                                "eventStatusId": 4,
                                                "period": 4,
                                                "isActive": false,
                                                "name": "Final"
                                            },
                                            "lastPlay": {},
                                            "venue": {
                                                "venueId": 522,
                                                "name": "Mercedes-Benz Superdome",
                                                "city": "New Orleans",
                                                "state": {
                                                    "stateId": 18,
                                                    "name": "Louisiana",
                                                    "abbreviation": "LA"
                                                },
                                                "country": {
                                                    "countryId": 1,
                                                    "name": "United States",
                                                    "abbreviation": "USA"
                                                }
                                            },
                                            "tvStations": [
                                                {
                                                    "tvStationId": 278,
                                                    "name": "FOX",
                                                    "callLetters": "FOX",
                                                    "networkType": {
                                                        "networkTypeId": 1,
                                                        "name": "National"
                                                    },
                                                    "country": {
                                                        "countryId": 1,
                                                        "name": "United States",
                                                        "abbreviation": "USA"
                                                    }
                                                }
                                            ],
                                            "teams": [
                                                {
                                                    "teamId": 350,
                                                    "location": "New Orleans",
                                                    "nickname": "Saints",
                                                    "abbreviation": "NO",
                                                    "teamLocationType": {
                                                        "teamLocationTypeId": 1,
                                                        "name": "home"
                                                    },
                                                    "record": {
                                                        "wins": 1,
                                                        "losses": 2,
                                                        "ties": 0,
                                                        "percentage": ".333"
                                                    },
                                                    "score": 20,
                                                    "linescores": [
                                                        {
                                                            "period": 1,
                                                            "score": 13
                                                        }, {
                                                            "period": 2,
                                                            "score": 0
                                                        }, {
                                                            "period": 3,
                                                            "score": 0
                                                        }, {
                                                            "period": 4,
                                                            "score": 7
                                                        }
                                                    ],
                                                    "isWinner": true
                                                }, {
                                                    "teamId": 347,
                                                    "location": "Minnesota",
                                                    "nickname": "Vikings",
                                                    "abbreviation": "Min",
                                                    "teamLocationType": {
                                                        "teamLocationTypeId": 2,
                                                        "name": "away"
                                                    },
                                                    "record": {
                                                        "wins": 1,
                                                        "losses": 2,
                                                        "ties": 0,
                                                        "percentage": ".333"
                                                    },
                                                    "score": 9,
                                                    "linescores": [
                                                        {
                                                            "period": 1,
                                                            "score": 0
                                                        }, {
                                                            "period": 2,
                                                            "score": 6
                                                        }, {
                                                            "period": 3,
                                                            "score": 3
                                                        }, {
                                                            "period": 4,
                                                            "score": 0
                                                        }
                                                    ],
                                                    "isWinner": false
                                                }
                                            ],
                                            "week": 3,
                                            "coverageLevel": {
                                                "coverageLevelId": 8,
                                                "details": "STATS Primary Feed",
                                                "name": "Level 1"
                                            },
                                            "boxscores": [
                                                {
                                                    "teamId": 350,
                                                    "teamStats": {
                                                        "firstDowns": {
                                                            "total": 27,
                                                            "rushing": 8,
                                                            "passing": 17,
                                                            "penalty": 2
                                                        },
                                                        "thirdDownEfficiency": {
                                                            "made": 9,
                                                            "attempts": 13,
                                                            "percentage": "69.2"
                                                        },
                                                        "redZoneEfficiency": {
                                                            "made": 2,
                                                            "attempts": 3,
                                                            "percentage": "66.7"
                                                        },
                                                        "goalToGoEfficiency": {
                                                            "made": 1,
                                                            "attempts": 1,
                                                            "percentage": "100"
                                                        },
                                                        "gameTotals": {
                                                            "plays": 68,
                                                            "netYards": 396,
                                                            "average": "5.8",
                                                            "touchdowns": 3
                                                        },
                                                        "rushing": {
                                                            "attempts": 32,
                                                            "yards": 108,
                                                            "average": "3.4",
                                                            "touchdowns": 1
                                                        },
                                                        "passing": {
                                                            "completions": 27,
                                                            "attempts": 35,
                                                            "interceptions": 0,
                                                            "netYards": 288,
                                                            "netYardsPerAttempt": "8.00",
                                                            "yards": 293,
                                                            "yardsPerAttempt": "8.37",
                                                            "sacked": 1,
                                                            "sackedYardsLost": 5,
                                                            "touchdowns": 2
                                                        },
                                                        "punting": {
                                                            "punts": 4,
                                                            "yards": 187,
                                                            "average": "46.8"
                                                        },
                                                        "returnTotals": {
                                                            "yards": -3,
                                                            "touchdowns": 0
                                                        },
                                                        "puntReturning": {
                                                            "returns": 1,
                                                            "yards": -3,
                                                            "touchdowns": 0,
                                                            "long": 0,
                                                            "isLongTouchdown": false
                                                        },
                                                        "kickReturning": {
                                                            "returns": 0,
                                                            "yards": 0,
                                                            "touchdowns": 0,
                                                            "long": 0,
                                                            "isLongTouchdown": false
                                                        },
                                                        "interceptions": {
                                                            "number": 0,
                                                            "yards": 0,
                                                            "touchdowns": 0,
                                                            "long": 0,
                                                            "isLongTouchdown": false
                                                        },
                                                        "defense": {
                                                            "tackles": 34,
                                                            "assists": 10,
                                                            "passesDefensed": 3,
                                                            "forcedFumbles": 0,
                                                            "stuffs": 3.0,
                                                            "stuffYards": 10.0,
                                                            "specialTeamsTackles": 8,
                                                            "sacks": 2.0,
                                                            "sackYards": 15.0
                                                        },
                                                        "penalties": {
                                                            "number": 4,
                                                            "yards": 30
                                                        },
                                                        "ownFumbles": {
                                                            "number": 1,
                                                            "lost": 0,
                                                            "recovered": 1,
                                                            "yards": -18,
                                                            "touchdowns": 0
                                                        },
                                                        "opponentFumbles": {
                                                            "recovered": 0,
                                                            "yards": 0,
                                                            "touchdowns": 0
                                                        },
                                                        "timeOfPossession": {
                                                            "minutes": 33,
                                                            "seconds": 33
                                                        },
                                                        "extraPoints": {
                                                            "made": 2,
                                                            "attempts": 3,
                                                            "blocked": 1,
                                                            "percentage": "66.7"
                                                        },
                                                        "fieldGoals": {
                                                            "made": 0,
                                                            "attempts": 0,
                                                            "blocked": 0,
                                                            "percentage": null
                                                        },
                                                        "kickoffs": {
                                                            "number": 4,
                                                            "endZone": 4,
                                                            "touchbacks": 0
                                                        },
                                                        "safeties": 0,
                                                        "twoPointConversions": {
                                                            "made": 0,
                                                            "attempts": 0
                                                        }
                                                    },
                                                    "playerStats": {
                                                        "rushingStats": [
                                                            {
                                                                "player": {
                                                                    "playerId": 734347,
                                                                    "firstName": "Khiry",
                                                                    "lastName": "Robinson",
                                                                    "uniform": "29"
                                                                },
                                                                "attempts": 18,
                                                                "yards": 69,
                                                                "yardsPerAttempt": "3.8",
                                                                "long": 13,
                                                                "isLongTouchdown": false,
                                                                "touchdowns": 0,
                                                                "firstDowns": 4,
                                                                "fumbles": 0,
                                                                "fumblesLost": 0,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 20,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 40,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }, {
                                                                "player": {
                                                                    "playerId": 215734,
                                                                    "firstName": "Pierre",
                                                                    "lastName": "Thomas",
                                                                    "uniform": "23"
                                                                },
                                                                "attempts": 8,
                                                                "yards": 30,
                                                                "yardsPerAttempt": "3.8",
                                                                "long": 11,
                                                                "isLongTouchdown": false,
                                                                "touchdowns": 1,
                                                                "firstDowns": 3,
                                                                "fumbles": 0,
                                                                "fumblesLost": 0,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 20,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 40,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }, {
                                                                "player": {
                                                                    "playerId": 400644,
                                                                    "firstName": "Travaris",
                                                                    "lastName": "Cadet",
                                                                    "uniform": "39"
                                                                },
                                                                "attempts": 2,
                                                                "yards": 9,
                                                                "yardsPerAttempt": "4.5",
                                                                "long": 6,
                                                                "isLongTouchdown": false,
                                                                "touchdowns": 0,
                                                                "firstDowns": 0,
                                                                "fumbles": 0,
                                                                "fumblesLost": 0,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 20,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 40,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }, {
                                                                "player": {
                                                                    "playerId": 449465,
                                                                    "firstName": "Austin",
                                                                    "lastName": "Johnson",
                                                                    "uniform": "35"
                                                                },
                                                                "attempts": 1,
                                                                "yards": 2,
                                                                "yardsPerAttempt": "2.0",
                                                                "long": 2,
                                                                "isLongTouchdown": false,
                                                                "touchdowns": 0,
                                                                "firstDowns": 1,
                                                                "fumbles": 0,
                                                                "fumblesLost": 0,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 20,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 40,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }, {
                                                                "player": {
                                                                    "playerId": 25598,
                                                                    "firstName": "Drew",
                                                                    "lastName": "Brees",
                                                                    "uniform": "9"
                                                                },
                                                                "attempts": 3,
                                                                "yards": -2,
                                                                "yardsPerAttempt": "-0.7",
                                                                "long": 0,
                                                                "isLongTouchdown": false,
                                                                "touchdowns": 0,
                                                                "firstDowns": 0,
                                                                "fumbles": 1,
                                                                "fumblesLost": 0,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 20,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 40,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }
                                                        ],
                                                        "passingStats": [
                                                            {
                                                                "player": {
                                                                    "playerId": 25598,
                                                                    "firstName": "Drew",
                                                                    "lastName": "Brees",
                                                                    "uniform": "9"
                                                                },
                                                                "completions": 27,
                                                                "attempts": 35,
                                                                "interceptions": 0,
                                                                "yards": 293,
                                                                "yardsPerAttempt": "8.23",
                                                                "sacked": 1,
                                                                "sackedYardsLost": 5,
                                                                "long": 34,
                                                                "isLongTouchdown": true,
                                                                "touchdowns": 2,
                                                                "rating": 120.3,
                                                                "firstDowns": 17,
                                                                "fumbles": 0,
                                                                "fumblesLost": 0,
                                                                "targets": 35,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 20,
                                                                        "number": 2,
                                                                        "touchdowns": 1
                                                                    }, {
                                                                        "value": 30,
                                                                        "number": 1,
                                                                        "touchdowns": 1
                                                                    }, {
                                                                        "value": 40,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 50,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }
                                                        ],
                                                        "receivingStats": [
                                                            {
                                                                "player": {
                                                                    "playerId": 607864,
                                                                    "firstName": "Brandin",
                                                                    "lastName": "Cooks",
                                                                    "uniform": "10"
                                                                },
                                                                "receptions": 8,
                                                                "yards": 74,
                                                                "long": 19,
                                                                "isLongTouchdown": false,
                                                                "touchdowns": 0,
                                                                "targets": 10,
                                                                "firstDowns": 4,
                                                                "fumbles": 0,
                                                                "fumblesLost": 0,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 20,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 40,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }, {
                                                                "player": {
                                                                    "playerId": 295918,
                                                                    "firstName": "Jimmy",
                                                                    "lastName": "Graham",
                                                                    "uniform": "80"
                                                                },
                                                                "receptions": 6,
                                                                "yards": 54,
                                                                "long": 15,
                                                                "isLongTouchdown": false,
                                                                "touchdowns": 0,
                                                                "targets": 8,
                                                                "firstDowns": 3,
                                                                "fumbles": 0,
                                                                "fumblesLost": 0,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 20,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 40,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }, {
                                                                "player": {
                                                                    "playerId": 542896,
                                                                    "firstName": "Kenny",
                                                                    "lastName": "Stills",
                                                                    "uniform": "84"
                                                                },
                                                                "receptions": 4,
                                                                "yards": 38,
                                                                "long": 15,
                                                                "isLongTouchdown": false,
                                                                "touchdowns": 0,
                                                                "targets": 5,
                                                                "firstDowns": 3,
                                                                "fumbles": 0,
                                                                "fumblesLost": 0,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 20,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 40,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }, {
                                                                "player": {
                                                                    "playerId": 215734,
                                                                    "firstName": "Pierre",
                                                                    "lastName": "Thomas",
                                                                    "uniform": "23"
                                                                },
                                                                "receptions": 3,
                                                                "yards": 21,
                                                                "long": 13,
                                                                "isLongTouchdown": false,
                                                                "touchdowns": 0,
                                                                "targets": 3,
                                                                "firstDowns": 1,
                                                                "fumbles": 0,
                                                                "fumblesLost": 0,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 20,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 40,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }, {
                                                                "player": {
                                                                    "playerId": 469509,
                                                                    "firstName": "Josh",
                                                                    "lastName": "Hill",
                                                                    "uniform": "89"
                                                                },
                                                                "receptions": 2,
                                                                "yards": 48,
                                                                "long": 34,
                                                                "isLongTouchdown": true,
                                                                "touchdowns": 1,
                                                                "targets": 2,
                                                                "firstDowns": 2,
                                                                "fumbles": 0,
                                                                "fumblesLost": 0,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 20,
                                                                        "number": 1,
                                                                        "touchdowns": 1
                                                                    }, {
                                                                        "value": 40,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }, {
                                                                "player": {
                                                                    "playerId": 162990,
                                                                    "firstName": "Marques",
                                                                    "lastName": "Colston",
                                                                    "uniform": "12"
                                                                },
                                                                "receptions": 2,
                                                                "yards": 25,
                                                                "long": 18,
                                                                "isLongTouchdown": true,
                                                                "touchdowns": 1,
                                                                "targets": 5,
                                                                "firstDowns": 2,
                                                                "fumbles": 0,
                                                                "fumblesLost": 0,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 20,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 40,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }, {
                                                                "player": {
                                                                    "playerId": 225376,
                                                                    "firstName": "Robert",
                                                                    "lastName": "Meachem",
                                                                    "uniform": "17"
                                                                },
                                                                "receptions": 1,
                                                                "yards": 23,
                                                                "long": 23,
                                                                "isLongTouchdown": false,
                                                                "touchdowns": 0,
                                                                "targets": 1,
                                                                "firstDowns": 1,
                                                                "fumbles": 0,
                                                                "fumblesLost": 0,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 20,
                                                                        "number": 1,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 40,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }, {
                                                                "player": {
                                                                    "playerId": 246082,
                                                                    "firstName": "Benjamin",
                                                                    "lastName": "Watson",
                                                                    "uniform": "82"
                                                                },
                                                                "receptions": 1,
                                                                "yards": 10,
                                                                "long": 10,
                                                                "isLongTouchdown": false,
                                                                "touchdowns": 0,
                                                                "targets": 1,
                                                                "firstDowns": 1,
                                                                "fumbles": 0,
                                                                "fumblesLost": 0,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 20,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 40,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }
                                                        ],
                                                        "puntingStats": [
                                                            {
                                                                "player": {
                                                                    "playerId": 286840,
                                                                    "firstName": "Thomas",
                                                                    "lastName": "Morstead",
                                                                    "uniform": "6"
                                                                },
                                                                "punts": 4,
                                                                "yards": 187,
                                                                "blocked": 0,
                                                                "in20": 1,
                                                                "long": 54,
                                                                "touchbacks": 0,
                                                                "returns": 4,
                                                                "returnYards": 11,
                                                                "average": "46.8",
                                                                "netAverage": "44"
                                                            }
                                                        ],
                                                        "kickReturnStats": [],
                                                        "puntReturnStats": [
                                                            {
                                                                "player": {
                                                                    "playerId": 607864,
                                                                    "firstName": "Brandin",
                                                                    "lastName": "Cooks",
                                                                    "uniform": "10"
                                                                },
                                                                "returns": 1,
                                                                "yards": -3,
                                                                "fairCatches": 1,
                                                                "long": -3,
                                                                "isLongTouchdown": false,
                                                                "touchdowns": 0,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 40,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }
                                                        ],
                                                        "defenseStats": [
                                                            {
                                                                "player": {
                                                                    "playerId": 300754,
                                                                    "firstName": "Curtis",
                                                                    "lastName": "Lofton",
                                                                    "uniform": "50"
                                                                },
                                                                "tackles": 7,
                                                                "assists": 1,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 2.0,
                                                                "stuffYards": 8.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 0,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 334303,
                                                                    "firstName": "Junior",
                                                                    "lastName": "Galette",
                                                                    "uniform": "93"
                                                                },
                                                                "tackles": 4,
                                                                "assists": 3,
                                                                "sacks": 1.0,
                                                                "sackYards": 8.0,
                                                                "stuffs": 1.0,
                                                                "stuffYards": 2.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 0,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 296058,
                                                                    "firstName": "Jairus",
                                                                    "lastName": "Byrd",
                                                                    "uniform": "31"
                                                                },
                                                                "tackles": 5,
                                                                "assists": 1,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 0,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 492781,
                                                                    "firstName": "Kenny",
                                                                    "lastName": "Vaccaro",
                                                                    "uniform": "32"
                                                                },
                                                                "tackles": 2,
                                                                "assists": 2,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 1,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 0,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 303006,
                                                                    "firstName": "Rafael",
                                                                    "lastName": "Bush",
                                                                    "uniform": "25"
                                                                },
                                                                "tackles": 3,
                                                                "assists": 1,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 0,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 316286,
                                                                    "firstName": "Ramon",
                                                                    "lastName": "Humber",
                                                                    "uniform": "53"
                                                                },
                                                                "tackles": 3,
                                                                "assists": 0,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 1,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 0,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 459492,
                                                                    "firstName": "Corey",
                                                                    "lastName": "White",
                                                                    "uniform": "24"
                                                                },
                                                                "tackles": 2,
                                                                "assists": 0,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 1,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 401762,
                                                                    "firstName": "Cameron",
                                                                    "lastName": "Jordan",
                                                                    "uniform": "94"
                                                                },
                                                                "tackles": 2,
                                                                "assists": 0,
                                                                "sacks": 1.0,
                                                                "sackYards": 7.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 0,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 245752,
                                                                    "firstName": "Keenan",
                                                                    "lastName": "Lewis",
                                                                    "uniform": "28"
                                                                },
                                                                "tackles": 2,
                                                                "assists": 0,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 1,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 0,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 217301,
                                                                    "firstName": "Parys",
                                                                    "lastName": "Haralson",
                                                                    "uniform": "98"
                                                                },
                                                                "tackles": 2,
                                                                "assists": 0,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 0,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 469509,
                                                                    "firstName": "Josh",
                                                                    "lastName": "Hill",
                                                                    "uniform": "89"
                                                                },
                                                                "tackles": 0,
                                                                "assists": 0,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 2,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 323505,
                                                                    "firstName": "Patrick",
                                                                    "lastName": "Robinson",
                                                                    "uniform": "21"
                                                                },
                                                                "tackles": 0,
                                                                "assists": 0,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 2,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 794242,
                                                                    "firstName": "Brian",
                                                                    "lastName": "Dixon",
                                                                    "uniform": "20"
                                                                },
                                                                "tackles": 0,
                                                                "assists": 0,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 1,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 498969,
                                                                    "firstName": "Akiem",
                                                                    "lastName": "Hicks",
                                                                    "uniform": "76"
                                                                },
                                                                "tackles": 1,
                                                                "assists": 0,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 0,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 449465,
                                                                    "firstName": "Austin",
                                                                    "lastName": "Johnson",
                                                                    "uniform": "35"
                                                                },
                                                                "tackles": 0,
                                                                "assists": 0,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 1,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 286840,
                                                                    "firstName": "Thomas",
                                                                    "lastName": "Morstead",
                                                                    "uniform": "6"
                                                                },
                                                                "tackles": 0,
                                                                "assists": 0,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 1,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 554384,
                                                                    "firstName": "Tyrunn",
                                                                    "lastName": "Walker",
                                                                    "uniform": "75"
                                                                },
                                                                "tackles": 1,
                                                                "assists": 0,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 0,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 215181,
                                                                    "firstName": "Brodrick",
                                                                    "lastName": "Bunkley",
                                                                    "uniform": "77"
                                                                },
                                                                "tackles": 0,
                                                                "assists": 1,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 0,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 449679,
                                                                    "firstName": "Kyle",
                                                                    "lastName": "Knox",
                                                                    "uniform": "58"
                                                                },
                                                                "tackles": 0,
                                                                "assists": 1,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 0,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }
                                                        ],
                                                        "interceptionStats": [],
                                                        "ownFumbleStats": [
                                                            {
                                                                "player": {
                                                                    "playerId": 25598,
                                                                    "firstName": "Drew",
                                                                    "lastName": "Brees",
                                                                    "uniform": "9"
                                                                },
                                                                "units": [
                                                                    {
                                                                        "unitId": 1,
                                                                        "name": "defense",
                                                                        "number": 0,
                                                                        "numberLost": 0
                                                                    }, {
                                                                        "unitId": 2,
                                                                        "name": "offense",
                                                                        "number": 1,
                                                                        "numberLost": 0
                                                                    }, {
                                                                        "unitId": 3,
                                                                        "name": "special teams",
                                                                        "number": 0,
                                                                        "numberLost": 0
                                                                    }
                                                                ],
                                                                "total": 1,
                                                                "totalLost": 0
                                                            }
                                                        ],
                                                        "ownFumbleRecoveredStats": [
                                                            {
                                                                "player": {
                                                                    "playerId": 25598,
                                                                    "firstName": "Drew",
                                                                    "lastName": "Brees",
                                                                    "uniform": "9"
                                                                },
                                                                "total": 1,
                                                                "yards": -18,
                                                                "touchdowns": 0
                                                            }
                                                        ],
                                                        "opponentFumbleRecoveredStats": [],
                                                        "forcedFumbleStats": [],
                                                        "penaltyStats": [
                                                            {
                                                                "player": {
                                                                    "playerId": 492781,
                                                                    "firstName": "Kenny",
                                                                    "lastName": "Vaccaro",
                                                                    "uniform": "32"
                                                                },
                                                                "accepted": 1,
                                                                "yards": 5
                                                            }, {
                                                                "player": {
                                                                    "playerId": 217576,
                                                                    "firstName": "Ben",
                                                                    "lastName": "Grubbs",
                                                                    "uniform": "66"
                                                                },
                                                                "accepted": 1,
                                                                "yards": 10
                                                            }, {
                                                                "player": {
                                                                    "playerId": 561826,
                                                                    "firstName": "Terron",
                                                                    "lastName": "Armstead",
                                                                    "uniform": "72"
                                                                },
                                                                "accepted": 1,
                                                                "yards": 10
                                                            }, {
                                                                "player": {
                                                                    "playerId": 245752,
                                                                    "firstName": "Keenan",
                                                                    "lastName": "Lewis",
                                                                    "uniform": "28"
                                                                },
                                                                "accepted": 1,
                                                                "yards": 5
                                                            }
                                                        ],
                                                        "blockedKickStats": [],
                                                        "fieldGoalStats": [],
                                                        "patStats": [
                                                            {
                                                                "player": {
                                                                    "playerId": 75699,
                                                                    "firstName": "Shayne",
                                                                    "lastName": "Graham",
                                                                    "uniform": "3"
                                                                },
                                                                "made": 2,
                                                                "attempts": 3,
                                                                "blocked": 1
                                                            }
                                                        ],
                                                        "twoPointConversionStats": [],
                                                        "participationStats": [
                                                            {
                                                                "player": {
                                                                    "playerId": 561826,
                                                                    "firstName": "Terron",
                                                                    "lastName": "Armstead",
                                                                    "uniform": "72"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 25598,
                                                                    "firstName": "Drew",
                                                                    "lastName": "Brees",
                                                                    "uniform": "9"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 215181,
                                                                    "firstName": "Brodrick",
                                                                    "lastName": "Bunkley",
                                                                    "uniform": "77"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 303006,
                                                                    "firstName": "Rafael",
                                                                    "lastName": "Bush",
                                                                    "uniform": "25"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 296058,
                                                                    "firstName": "Jairus",
                                                                    "lastName": "Byrd",
                                                                    "uniform": "31"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 400644,
                                                                    "firstName": "Travaris",
                                                                    "lastName": "Cadet",
                                                                    "uniform": "39"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 162990,
                                                                    "firstName": "Marques",
                                                                    "lastName": "Colston",
                                                                    "uniform": "12"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 607864,
                                                                    "firstName": "Brandin",
                                                                    "lastName": "Cooks",
                                                                    "uniform": "10"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 301581,
                                                                    "firstName": "Brandon",
                                                                    "lastName": "Deaderick",
                                                                    "uniform": "95"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 794242,
                                                                    "firstName": "Brian",
                                                                    "lastName": "Dixon",
                                                                    "uniform": "20"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 332584,
                                                                    "firstName": "Justin",
                                                                    "lastName": "Drescher",
                                                                    "uniform": "47"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 498200,
                                                                    "firstName": "Kasim",
                                                                    "lastName": "Edebali",
                                                                    "uniform": "91"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 320286,
                                                                    "firstName": "Jahri",
                                                                    "lastName": "Evans",
                                                                    "uniform": "73"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 464023,
                                                                    "firstName": "Glenn",
                                                                    "lastName": "Foster",
                                                                    "uniform": "97"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 334303,
                                                                    "firstName": "Junior",
                                                                    "lastName": "Galette",
                                                                    "uniform": "93"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 81133,
                                                                    "firstName": "Jonathan",
                                                                    "lastName": "Goodwin",
                                                                    "uniform": "55"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 295918,
                                                                    "firstName": "Jimmy",
                                                                    "lastName": "Graham",
                                                                    "uniform": "80"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 75699,
                                                                    "firstName": "Shayne",
                                                                    "lastName": "Graham",
                                                                    "uniform": "3"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 217576,
                                                                    "firstName": "Ben",
                                                                    "lastName": "Grubbs",
                                                                    "uniform": "66"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 217301,
                                                                    "firstName": "Parys",
                                                                    "lastName": "Haralson",
                                                                    "uniform": "98"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 449682,
                                                                    "firstName": "Bryce",
                                                                    "lastName": "Harris",
                                                                    "uniform": "79"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 498969,
                                                                    "firstName": "Akiem",
                                                                    "lastName": "Hicks",
                                                                    "uniform": "76"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 469509,
                                                                    "firstName": "Josh",
                                                                    "lastName": "Hill",
                                                                    "uniform": "89"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 316286,
                                                                    "firstName": "Ramon",
                                                                    "lastName": "Humber",
                                                                    "uniform": "53"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 449465,
                                                                    "firstName": "Austin",
                                                                    "lastName": "Johnson",
                                                                    "uniform": "35"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 401762,
                                                                    "firstName": "Cameron",
                                                                    "lastName": "Jordan",
                                                                    "uniform": "94"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 449679,
                                                                    "firstName": "Kyle",
                                                                    "lastName": "Knox",
                                                                    "uniform": "58"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 694791,
                                                                    "firstName": "Tim",
                                                                    "lastName": "Lelito",
                                                                    "uniform": "68"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 245752,
                                                                    "firstName": "Keenan",
                                                                    "lastName": "Lewis",
                                                                    "uniform": "28"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 300754,
                                                                    "firstName": "Curtis",
                                                                    "lastName": "Lofton",
                                                                    "uniform": "50"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 246313,
                                                                    "firstName": "Luke",
                                                                    "lastName": "McCown",
                                                                    "uniform": "7"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 225376,
                                                                    "firstName": "Robert",
                                                                    "lastName": "Meachem",
                                                                    "uniform": "17"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 286840,
                                                                    "firstName": "Thomas",
                                                                    "lastName": "Morstead",
                                                                    "uniform": "6"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 557191,
                                                                    "firstName": "Ronald",
                                                                    "lastName": "Powell",
                                                                    "uniform": "56"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 734347,
                                                                    "firstName": "Khiry",
                                                                    "lastName": "Robinson",
                                                                    "uniform": "29"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 323505,
                                                                    "firstName": "Patrick",
                                                                    "lastName": "Robinson",
                                                                    "uniform": "21"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 542896,
                                                                    "firstName": "Kenny",
                                                                    "lastName": "Stills",
                                                                    "uniform": "84"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 160037,
                                                                    "firstName": "Zach",
                                                                    "lastName": "Strief",
                                                                    "uniform": "64"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 593215,
                                                                    "firstName": "Vinnie",
                                                                    "lastName": "Sunseri",
                                                                    "uniform": "43"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 215734,
                                                                    "firstName": "Pierre",
                                                                    "lastName": "Thomas",
                                                                    "uniform": "23"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 492781,
                                                                    "firstName": "Kenny",
                                                                    "lastName": "Vaccaro",
                                                                    "uniform": "32"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 554384,
                                                                    "firstName": "Tyrunn",
                                                                    "lastName": "Walker",
                                                                    "uniform": "75"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 246082,
                                                                    "firstName": "Benjamin",
                                                                    "lastName": "Watson",
                                                                    "uniform": "82"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 459492,
                                                                    "firstName": "Corey",
                                                                    "lastName": "White",
                                                                    "uniform": "24"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }
                                                        ],
                                                        "inactives": [
                                                            {
                                                                "player": {
                                                                    "playerId": 323487,
                                                                    "firstName": "Marcus",
                                                                    "lastName": "Ball",
                                                                    "uniform": "36"
                                                                }
                                                            }, {
                                                                "player": {
                                                                    "playerId": 230703,
                                                                    "firstName": "David",
                                                                    "lastName": "Hawthorne",
                                                                    "uniform": "57"
                                                                }
                                                            }, {
                                                                "player": {
                                                                    "playerId": 456613,
                                                                    "firstName": "Mark",
                                                                    "lastName": "Ingram",
                                                                    "uniform": "22"
                                                                }
                                                            }, {
                                                                "player": {
                                                                    "playerId": 553248,
                                                                    "firstName": "Stanley",
                                                                    "lastName": "Jean-Baptiste",
                                                                    "uniform": "33"
                                                                }
                                                            }, {
                                                                "player": {
                                                                    "playerId": 607087,
                                                                    "firstName": "John",
                                                                    "lastName": "Jenkins",
                                                                    "uniform": "92"
                                                                }
                                                            }, {
                                                                "player": {
                                                                    "playerId": 323000,
                                                                    "firstName": "Erik",
                                                                    "lastName": "Lorig",
                                                                    "uniform": "41"
                                                                }
                                                            }, {
                                                                "player": {
                                                                    "playerId": 399420,
                                                                    "firstName": "Nick",
                                                                    "lastName": "Toon",
                                                                    "uniform": "88"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }, {
                                                    "teamId": 347,
                                                    "teamStats": {
                                                        "firstDowns": {
                                                            "total": 13,
                                                            "rushing": 3,
                                                            "passing": 8,
                                                            "penalty": 2
                                                        },
                                                        "thirdDownEfficiency": {
                                                            "made": 6,
                                                            "attempts": 15,
                                                            "percentage": "40.0"
                                                        },
                                                        "redZoneEfficiency": {
                                                            "made": 0,
                                                            "attempts": 2,
                                                            "percentage": "0"
                                                        },
                                                        "goalToGoEfficiency": {
                                                            "made": 0,
                                                            "attempts": 1,
                                                            "percentage": "0"
                                                        },
                                                        "gameTotals": {
                                                            "plays": 54,
                                                            "netYards": 247,
                                                            "average": "4.6",
                                                            "touchdowns": 0
                                                        },
                                                        "rushing": {
                                                            "attempts": 22,
                                                            "yards": 59,
                                                            "average": "2.7",
                                                            "touchdowns": 0
                                                        },
                                                        "passing": {
                                                            "completions": 17,
                                                            "attempts": 30,
                                                            "interceptions": 0,
                                                            "netYards": 188,
                                                            "netYardsPerAttempt": "5.88",
                                                            "yards": 203,
                                                            "yardsPerAttempt": "6.77",
                                                            "sacked": 2,
                                                            "sackedYardsLost": 15,
                                                            "touchdowns": 0
                                                        },
                                                        "punting": {
                                                            "punts": 4,
                                                            "yards": 181,
                                                            "average": "45.3"
                                                        },
                                                        "returnTotals": {
                                                            "yards": 131,
                                                            "touchdowns": 0
                                                        },
                                                        "puntReturning": {
                                                            "returns": 4,
                                                            "yards": 11,
                                                            "touchdowns": 0,
                                                            "long": 13,
                                                            "isLongTouchdown": false
                                                        },
                                                        "kickReturning": {
                                                            "returns": 4,
                                                            "yards": 120,
                                                            "touchdowns": 0,
                                                            "long": 43,
                                                            "isLongTouchdown": false
                                                        },
                                                        "interceptions": {
                                                            "number": 0,
                                                            "yards": 0,
                                                            "touchdowns": 0,
                                                            "long": 0,
                                                            "isLongTouchdown": false
                                                        },
                                                        "defense": {
                                                            "tackles": 44,
                                                            "assists": 20,
                                                            "passesDefensed": 4,
                                                            "forcedFumbles": 0,
                                                            "stuffs": 3.0,
                                                            "stuffYards": 10.0,
                                                            "specialTeamsTackles": 1,
                                                            "sacks": 1.0,
                                                            "sackYards": 5.0
                                                        },
                                                        "penalties": {
                                                            "number": 5,
                                                            "yards": 44
                                                        },
                                                        "ownFumbles": {
                                                            "number": 0,
                                                            "lost": 0,
                                                            "recovered": 0,
                                                            "yards": 0,
                                                            "touchdowns": 0
                                                        },
                                                        "opponentFumbles": {
                                                            "recovered": 0,
                                                            "yards": 0,
                                                            "touchdowns": 0
                                                        },
                                                        "timeOfPossession": {
                                                            "minutes": 26,
                                                            "seconds": 27
                                                        },
                                                        "extraPoints": {
                                                            "made": 0,
                                                            "attempts": 0,
                                                            "blocked": 0,
                                                            "percentage": null
                                                        },
                                                        "fieldGoals": {
                                                            "made": 3,
                                                            "attempts": 3,
                                                            "blocked": 0,
                                                            "percentage": "100"
                                                        },
                                                        "kickoffs": {
                                                            "number": 4,
                                                            "endZone": 4,
                                                            "touchbacks": 4
                                                        },
                                                        "safeties": 0,
                                                        "twoPointConversions": {
                                                            "made": 0,
                                                            "attempts": 0
                                                        }
                                                    },
                                                    "playerStats": {
                                                        "rushingStats": [
                                                            {
                                                                "player": {
                                                                    "playerId": 383504,
                                                                    "firstName": "Matt",
                                                                    "lastName": "Asiata",
                                                                    "uniform": "44"
                                                                },
                                                                "attempts": 12,
                                                                "yards": 35,
                                                                "yardsPerAttempt": "2.9",
                                                                "long": 8,
                                                                "isLongTouchdown": false,
                                                                "touchdowns": 0,
                                                                "firstDowns": 1,
                                                                "fumbles": 0,
                                                                "fumblesLost": 0,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 20,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 40,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }, {
                                                                "player": {
                                                                    "playerId": 592195,
                                                                    "firstName": "Teddy",
                                                                    "lastName": "Bridgewater",
                                                                    "uniform": "5"
                                                                },
                                                                "attempts": 6,
                                                                "yards": 27,
                                                                "yardsPerAttempt": "4.5",
                                                                "long": 15,
                                                                "isLongTouchdown": false,
                                                                "touchdowns": 0,
                                                                "firstDowns": 2,
                                                                "fumbles": 0,
                                                                "fumblesLost": 0,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 20,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 40,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }, {
                                                                "player": {
                                                                    "playerId": 145407,
                                                                    "firstName": "Matt",
                                                                    "lastName": "Cassel",
                                                                    "uniform": "16"
                                                                },
                                                                "attempts": 1,
                                                                "yards": 5,
                                                                "yardsPerAttempt": "5.0",
                                                                "long": 5,
                                                                "isLongTouchdown": false,
                                                                "touchdowns": 0,
                                                                "firstDowns": 0,
                                                                "fumbles": 0,
                                                                "fumblesLost": 0,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 20,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 40,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }, {
                                                                "player": {
                                                                    "playerId": 563824,
                                                                    "firstName": "Jerick",
                                                                    "lastName": "McKinnon",
                                                                    "uniform": "31"
                                                                },
                                                                "attempts": 2,
                                                                "yards": -1,
                                                                "yardsPerAttempt": "-0.5",
                                                                "long": 1,
                                                                "isLongTouchdown": false,
                                                                "touchdowns": 0,
                                                                "firstDowns": 0,
                                                                "fumbles": 0,
                                                                "fumblesLost": 0,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 20,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 40,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }, {
                                                                "player": {
                                                                    "playerId": 690153,
                                                                    "firstName": "Cordarrelle",
                                                                    "lastName": "Patterson",
                                                                    "uniform": "84"
                                                                },
                                                                "attempts": 1,
                                                                "yards": -7,
                                                                "yardsPerAttempt": "-7.0",
                                                                "long": -7,
                                                                "isLongTouchdown": false,
                                                                "touchdowns": 0,
                                                                "firstDowns": 0,
                                                                "fumbles": 0,
                                                                "fumblesLost": 0,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 20,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 40,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }
                                                        ],
                                                        "passingStats": [
                                                            {
                                                                "player": {
                                                                    "playerId": 592195,
                                                                    "firstName": "Teddy",
                                                                    "lastName": "Bridgewater",
                                                                    "uniform": "5"
                                                                },
                                                                "completions": 12,
                                                                "attempts": 20,
                                                                "interceptions": 0,
                                                                "yards": 150,
                                                                "yardsPerAttempt": "6.75",
                                                                "sacked": 2,
                                                                "sackedYardsLost": 15,
                                                                "long": 41,
                                                                "isLongTouchdown": false,
                                                                "touchdowns": 0,
                                                                "rating": 83.3,
                                                                "firstDowns": 6,
                                                                "fumbles": 0,
                                                                "fumblesLost": 0,
                                                                "targets": 20,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 20,
                                                                        "number": 2,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 30,
                                                                        "number": 2,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 40,
                                                                        "number": 1,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 50,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }, {
                                                                "player": {
                                                                    "playerId": 145407,
                                                                    "firstName": "Matt",
                                                                    "lastName": "Cassel",
                                                                    "uniform": "16"
                                                                },
                                                                "completions": 5,
                                                                "attempts": 10,
                                                                "interceptions": 0,
                                                                "yards": 53,
                                                                "yardsPerAttempt": "5.30",
                                                                "sacked": 0,
                                                                "sackedYardsLost": 0,
                                                                "long": 28,
                                                                "isLongTouchdown": false,
                                                                "touchdowns": 0,
                                                                "rating": 65.8,
                                                                "firstDowns": 2,
                                                                "fumbles": 0,
                                                                "fumblesLost": 0,
                                                                "targets": 10,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 20,
                                                                        "number": 1,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 30,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 40,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 50,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }
                                                        ],
                                                        "receivingStats": [
                                                            {
                                                                "player": {
                                                                    "playerId": 156869,
                                                                    "firstName": "Greg",
                                                                    "lastName": "Jennings",
                                                                    "uniform": "15"
                                                                },
                                                                "receptions": 5,
                                                                "yards": 70,
                                                                "long": 30,
                                                                "isLongTouchdown": false,
                                                                "touchdowns": 0,
                                                                "targets": 7,
                                                                "firstDowns": 2,
                                                                "fumbles": 0,
                                                                "fumblesLost": 0,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 20,
                                                                        "number": 1,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 40,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }, {
                                                                "player": {
                                                                    "playerId": 690153,
                                                                    "firstName": "Cordarrelle",
                                                                    "lastName": "Patterson",
                                                                    "uniform": "84"
                                                                },
                                                                "receptions": 4,
                                                                "yards": 61,
                                                                "long": 28,
                                                                "isLongTouchdown": false,
                                                                "touchdowns": 0,
                                                                "targets": 5,
                                                                "firstDowns": 3,
                                                                "fumbles": 0,
                                                                "fumblesLost": 0,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 20,
                                                                        "number": 1,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 40,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }, {
                                                                "player": {
                                                                    "playerId": 383504,
                                                                    "firstName": "Matt",
                                                                    "lastName": "Asiata",
                                                                    "uniform": "44"
                                                                },
                                                                "receptions": 3,
                                                                "yards": 36,
                                                                "long": 41,
                                                                "isLongTouchdown": false,
                                                                "touchdowns": 0,
                                                                "targets": 6,
                                                                "firstDowns": 1,
                                                                "fumbles": 0,
                                                                "fumblesLost": 0,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 20,
                                                                        "number": 1,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 40,
                                                                        "number": 1,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }, {
                                                                "player": {
                                                                    "playerId": 469472,
                                                                    "firstName": "Kyle",
                                                                    "lastName": "Rudolph",
                                                                    "uniform": "82"
                                                                },
                                                                "receptions": 3,
                                                                "yards": 27,
                                                                "long": 10,
                                                                "isLongTouchdown": false,
                                                                "touchdowns": 0,
                                                                "targets": 5,
                                                                "firstDowns": 1,
                                                                "fumbles": 0,
                                                                "fumblesLost": 0,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 20,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 40,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }, {
                                                                "player": {
                                                                    "playerId": 563824,
                                                                    "firstName": "Jerick",
                                                                    "lastName": "McKinnon",
                                                                    "uniform": "31"
                                                                },
                                                                "receptions": 2,
                                                                "yards": 9,
                                                                "long": 7,
                                                                "isLongTouchdown": false,
                                                                "touchdowns": 0,
                                                                "targets": 5,
                                                                "firstDowns": 1,
                                                                "fumbles": 0,
                                                                "fumblesLost": 0,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 20,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 40,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }, {
                                                                "player": {
                                                                    "playerId": 399295,
                                                                    "firstName": "Rhett",
                                                                    "lastName": "Ellison",
                                                                    "uniform": "85"
                                                                },
                                                                "receptions": 0,
                                                                "yards": 0,
                                                                "long": 0,
                                                                "isLongTouchdown": false,
                                                                "touchdowns": 0,
                                                                "targets": 2,
                                                                "firstDowns": 0,
                                                                "fumbles": 0,
                                                                "fumblesLost": 0,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 20,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }, {
                                                                        "value": 40,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }
                                                        ],
                                                        "puntingStats": [
                                                            {
                                                                "player": {
                                                                    "playerId": 461708,
                                                                    "firstName": "Jeff",
                                                                    "lastName": "Locke",
                                                                    "uniform": "18"
                                                                },
                                                                "punts": 4,
                                                                "yards": 181,
                                                                "blocked": 0,
                                                                "in20": 3,
                                                                "long": 57,
                                                                "touchbacks": 0,
                                                                "returns": 1,
                                                                "returnYards": -3,
                                                                "average": "45.3",
                                                                "netAverage": "46"
                                                            }
                                                        ],
                                                        "kickReturnStats": [
                                                            {
                                                                "player": {
                                                                    "playerId": 690153,
                                                                    "firstName": "Cordarrelle",
                                                                    "lastName": "Patterson",
                                                                    "uniform": "84"
                                                                },
                                                                "returns": 4,
                                                                "yards": 120,
                                                                "long": 43,
                                                                "isLongTouchdown": false,
                                                                "touchdowns": 0,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 40,
                                                                        "number": 1,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }
                                                        ],
                                                        "puntReturnStats": [
                                                            {
                                                                "player": {
                                                                    "playerId": 334435,
                                                                    "firstName": "Marcus",
                                                                    "lastName": "Sherels",
                                                                    "uniform": "35"
                                                                },
                                                                "returns": 4,
                                                                "yards": 11,
                                                                "fairCatches": 0,
                                                                "long": 13,
                                                                "isLongTouchdown": false,
                                                                "touchdowns": 0,
                                                                "bigPlays": [
                                                                    {
                                                                        "value": 40,
                                                                        "number": 0,
                                                                        "touchdowns": 0
                                                                    }
                                                                ]
                                                            }
                                                        ],
                                                        "defenseStats": [
                                                            {
                                                                "player": {
                                                                    "playerId": 469187,
                                                                    "firstName": "Robert",
                                                                    "lastName": "Blanton",
                                                                    "uniform": "36"
                                                                },
                                                                "tackles": 7,
                                                                "assists": 3,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 0,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 493471,
                                                                    "firstName": "Gerald",
                                                                    "lastName": "Hodges",
                                                                    "uniform": "50"
                                                                },
                                                                "tackles": 6,
                                                                "assists": 1,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 2.0,
                                                                "stuffYards": 4.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 0,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 553112,
                                                                    "firstName": "Anthony",
                                                                    "lastName": "Barr",
                                                                    "uniform": "55"
                                                                },
                                                                "tackles": 2,
                                                                "assists": 3,
                                                                "sacks": 1.0,
                                                                "sackYards": 5.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 1,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 0,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 400486,
                                                                    "firstName": "Harrison",
                                                                    "lastName": "Smith",
                                                                    "uniform": "22"
                                                                },
                                                                "tackles": 2,
                                                                "assists": 2,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 3,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 0,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 332869,
                                                                    "firstName": "Captain",
                                                                    "lastName": "Munnerlyn",
                                                                    "uniform": "24"
                                                                },
                                                                "tackles": 5,
                                                                "assists": 1,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 0,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 495661,
                                                                    "firstName": "Josh",
                                                                    "lastName": "Robinson",
                                                                    "uniform": "21"
                                                                },
                                                                "tackles": 5,
                                                                "assists": 1,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 0,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 323621,
                                                                    "firstName": "Jasper",
                                                                    "lastName": "Brinkley",
                                                                    "uniform": "54"
                                                                },
                                                                "tackles": 3,
                                                                "assists": 2,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 0,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 402468,
                                                                    "firstName": "Linval",
                                                                    "lastName": "Joseph",
                                                                    "uniform": "98"
                                                                },
                                                                "tackles": 3,
                                                                "assists": 1,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 1.0,
                                                                "stuffYards": 6.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 0,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 509368,
                                                                    "firstName": "Xavier",
                                                                    "lastName": "Rhodes",
                                                                    "uniform": "29"
                                                                },
                                                                "tackles": 2,
                                                                "assists": 2,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 0,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 157101,
                                                                    "firstName": "Chad",
                                                                    "lastName": "Greenway",
                                                                    "uniform": "52"
                                                                },
                                                                "tackles": 1,
                                                                "assists": 2,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 0,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 215104,
                                                                    "firstName": "Brian",
                                                                    "lastName": "Robison",
                                                                    "uniform": "96"
                                                                },
                                                                "tackles": 1,
                                                                "assists": 2,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 0,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 557186,
                                                                    "firstName": "Sharrif",
                                                                    "lastName": "Floyd",
                                                                    "uniform": "73"
                                                                },
                                                                "tackles": 2,
                                                                "assists": 0,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 0,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 399305,
                                                                    "firstName": "Everson",
                                                                    "lastName": "Griffen",
                                                                    "uniform": "97"
                                                                },
                                                                "tackles": 2,
                                                                "assists": 0,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 0,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 248299,
                                                                    "firstName": "Tom",
                                                                    "lastName": "Johnson",
                                                                    "uniform": "92"
                                                                },
                                                                "tackles": 2,
                                                                "assists": 0,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 0,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }, {
                                                                "player": {
                                                                    "playerId": 546109,
                                                                    "firstName": "Jabari",
                                                                    "lastName": "Price",
                                                                    "uniform": "39"
                                                                },
                                                                "tackles": 1,
                                                                "assists": 0,
                                                                "sacks": 0.0,
                                                                "sackYards": 0.0,
                                                                "stuffs": 0.0,
                                                                "stuffYards": 0.0,
                                                                "passesDefensed": 0,
                                                                "miscTackles": 0,
                                                                "miscAssists": 0,
                                                                "specialTeamsTackles": 1,
                                                                "specialTeamsAssists": 0,
                                                                "safeties": 0
                                                            }
                                                        ],
                                                        "interceptionStats": [],
                                                        "ownFumbleStats": [],
                                                        "ownFumbleRecoveredStats": [],
                                                        "opponentFumbleRecoveredStats": [],
                                                        "forcedFumbleStats": [],
                                                        "penaltyStats": [
                                                            {
                                                                "player": {
                                                                    "playerId": 399305,
                                                                    "firstName": "Everson",
                                                                    "lastName": "Griffen",
                                                                    "uniform": "97"
                                                                },
                                                                "accepted": 1,
                                                                "yards": 5
                                                            }, {
                                                                "player": {
                                                                    "playerId": 335671,
                                                                    "firstName": "Vladimir",
                                                                    "lastName": "Ducasse",
                                                                    "uniform": "62"
                                                                },
                                                                "accepted": 2,
                                                                "yards": 14
                                                            }, {
                                                                "player": {
                                                                    "playerId": 332869,
                                                                    "firstName": "Captain",
                                                                    "lastName": "Munnerlyn",
                                                                    "uniform": "24"
                                                                },
                                                                "accepted": 1,
                                                                "yards": 15
                                                            }, {
                                                                "player": {
                                                                    "playerId": 495661,
                                                                    "firstName": "Josh",
                                                                    "lastName": "Robinson",
                                                                    "uniform": "21"
                                                                },
                                                                "accepted": 1,
                                                                "yards": 10
                                                            }
                                                        ],
                                                        "blockedKickStats": [
                                                            {
                                                                "player": {
                                                                    "playerId": 399305,
                                                                    "firstName": "Everson",
                                                                    "lastName": "Griffen",
                                                                    "uniform": "97"
                                                                },
                                                                "total": 1,
                                                                "punts": 0,
                                                                "fieldGoals": 0,
                                                                "extraPoints": 1
                                                            }
                                                        ],
                                                        "fieldGoalStats": [
                                                            {
                                                                "player": {
                                                                    "playerId": 458095,
                                                                    "firstName": "Blair",
                                                                    "lastName": "Walsh",
                                                                    "uniform": "3"
                                                                },
                                                                "made": 3,
                                                                "attempts": 3,
                                                                "long": 40,
                                                                "blocked": 0,
                                                                "madeDetails": [
                                                                    {
                                                                        "distance": 25
                                                                    }, {
                                                                        "distance": 30
                                                                    }, {
                                                                        "distance": 40
                                                                    }
                                                                ],
                                                                "missedDetails": []
                                                            }
                                                        ],
                                                        "patStats": [],
                                                        "twoPointConversionStats": [],
                                                        "participationStats": [
                                                            {
                                                                "player": {
                                                                    "playerId": 383504,
                                                                    "firstName": "Matt",
                                                                    "lastName": "Asiata",
                                                                    "uniform": "44"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 400140,
                                                                    "firstName": "Joe",
                                                                    "lastName": "Banyard",
                                                                    "uniform": "23"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 553112,
                                                                    "firstName": "Anthony",
                                                                    "lastName": "Barr",
                                                                    "uniform": "55"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 283443,
                                                                    "firstName": "Joe",
                                                                    "lastName": "Berger",
                                                                    "uniform": "61"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 469187,
                                                                    "firstName": "Robert",
                                                                    "lastName": "Blanton",
                                                                    "uniform": "36"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 592195,
                                                                    "firstName": "Teddy",
                                                                    "lastName": "Bridgewater",
                                                                    "uniform": "5"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 323621,
                                                                    "firstName": "Jasper",
                                                                    "lastName": "Brinkley",
                                                                    "uniform": "54"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 145407,
                                                                    "firstName": "Matt",
                                                                    "lastName": "Cassel",
                                                                    "uniform": "16"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 401512,
                                                                    "firstName": "Audie",
                                                                    "lastName": "Cole",
                                                                    "uniform": "57"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 335671,
                                                                    "firstName": "Vladimir",
                                                                    "lastName": "Ducasse",
                                                                    "uniform": "62"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 399295,
                                                                    "firstName": "Rhett",
                                                                    "lastName": "Ellison",
                                                                    "uniform": "85"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 507515,
                                                                    "firstName": "Antone",
                                                                    "lastName": "Exum Jr.",
                                                                    "uniform": "32"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 253055,
                                                                    "firstName": "Jerome",
                                                                    "lastName": "Felton",
                                                                    "uniform": "42"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 557186,
                                                                    "firstName": "Sharrif",
                                                                    "lastName": "Floyd",
                                                                    "uniform": "73"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 333164,
                                                                    "firstName": "Brandon",
                                                                    "lastName": "Fusco",
                                                                    "uniform": "63"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 464295,
                                                                    "firstName": "MarQueis",
                                                                    "lastName": "Gray",
                                                                    "uniform": "87"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 157101,
                                                                    "firstName": "Chad",
                                                                    "lastName": "Greenway",
                                                                    "uniform": "52"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 399305,
                                                                    "firstName": "Everson",
                                                                    "lastName": "Griffen",
                                                                    "uniform": "97"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 493471,
                                                                    "firstName": "Gerald",
                                                                    "lastName": "Hodges",
                                                                    "uniform": "50"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 156869,
                                                                    "firstName": "Greg",
                                                                    "lastName": "Jennings",
                                                                    "uniform": "15"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 214906,
                                                                    "firstName": "Charlie",
                                                                    "lastName": "Johnson",
                                                                    "uniform": "74"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 248299,
                                                                    "firstName": "Tom",
                                                                    "lastName": "Johnson",
                                                                    "uniform": "92"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 402468,
                                                                    "firstName": "Linval",
                                                                    "lastName": "Joseph",
                                                                    "uniform": "98"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 459328,
                                                                    "firstName": "Matt",
                                                                    "lastName": "Kalil",
                                                                    "uniform": "75"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 323225,
                                                                    "firstName": "Phil",
                                                                    "lastName": "Loadholt",
                                                                    "uniform": "71"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 461708,
                                                                    "firstName": "Jeff",
                                                                    "lastName": "Locke",
                                                                    "uniform": "18"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 251130,
                                                                    "firstName": "Cullen",
                                                                    "lastName": "Loeffler",
                                                                    "uniform": "46"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 448030,
                                                                    "firstName": "Michael",
                                                                    "lastName": "Mauti",
                                                                    "uniform": "56"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 563824,
                                                                    "firstName": "Jerick",
                                                                    "lastName": "McKinnon",
                                                                    "uniform": "31"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 332869,
                                                                    "firstName": "Captain",
                                                                    "lastName": "Munnerlyn",
                                                                    "uniform": "24"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 690153,
                                                                    "firstName": "Cordarrelle",
                                                                    "lastName": "Patterson",
                                                                    "uniform": "84"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 546109,
                                                                    "firstName": "Jabari",
                                                                    "lastName": "Price",
                                                                    "uniform": "39"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 509368,
                                                                    "firstName": "Xavier",
                                                                    "lastName": "Rhodes",
                                                                    "uniform": "29"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 495661,
                                                                    "firstName": "Josh",
                                                                    "lastName": "Robinson",
                                                                    "uniform": "21"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 215104,
                                                                    "firstName": "Brian",
                                                                    "lastName": "Robison",
                                                                    "uniform": "96"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 469472,
                                                                    "firstName": "Kyle",
                                                                    "lastName": "Rudolph",
                                                                    "uniform": "82"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 339359,
                                                                    "firstName": "Andrew",
                                                                    "lastName": "Sendejo",
                                                                    "uniform": "34"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 334435,
                                                                    "firstName": "Marcus",
                                                                    "lastName": "Sherels",
                                                                    "uniform": "35"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 400486,
                                                                    "firstName": "Harrison",
                                                                    "lastName": "Smith",
                                                                    "uniform": "22"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 511821,
                                                                    "firstName": "Shamar",
                                                                    "lastName": "Stephen",
                                                                    "uniform": "93"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 230933,
                                                                    "firstName": "John",
                                                                    "lastName": "Sullivan",
                                                                    "uniform": "65"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 733643,
                                                                    "firstName": "Adam",
                                                                    "lastName": "Thielen",
                                                                    "uniform": "19"
                                                                },
                                                                "isGameStarted": true,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 458095,
                                                                    "firstName": "Blair",
                                                                    "lastName": "Walsh",
                                                                    "uniform": "3"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 285068,
                                                                    "firstName": "Corey",
                                                                    "lastName": "Wootton",
                                                                    "uniform": "99"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }, {
                                                                "player": {
                                                                    "playerId": 465652,
                                                                    "firstName": "Jarius",
                                                                    "lastName": "Wright",
                                                                    "uniform": "17"
                                                                },
                                                                "isGameStarted": false,
                                                                "isGamePlayed": true
                                                            }
                                                        ],
                                                        "inactives": [
                                                            {
                                                                "player": {
                                                                    "playerId": 557855,
                                                                    "firstName": "Scott",
                                                                    "lastName": "Crichton",
                                                                    "uniform": "95"
                                                                }
                                                            }, {
                                                                "player": {
                                                                    "playerId": 386696,
                                                                    "firstName": "Charles",
                                                                    "lastName": "Johnson",
                                                                    "uniform": "12"
                                                                }
                                                            }, {
                                                                "player": {
                                                                    "playerId": 323467,
                                                                    "firstName": "Christian",
                                                                    "lastName": "Ponder",
                                                                    "uniform": "7"
                                                                }
                                                            }, {
                                                                "player": {
                                                                    "playerId": 464044,
                                                                    "firstName": "Shaun",
                                                                    "lastName": "Prater",
                                                                    "uniform": "27"
                                                                }
                                                            }, {
                                                                "player": {
                                                                    "playerId": 509370,
                                                                    "firstName": "Rodney",
                                                                    "lastName": "Smith",
                                                                    "uniform": "83"
                                                                }
                                                            }, {
                                                                "player": {
                                                                    "playerId": 498816,
                                                                    "firstName": "Brandon",
                                                                    "lastName": "Watts",
                                                                    "uniform": "58"
                                                                }
                                                            }, {
                                                                "player": {
                                                                    "playerId": 553111,
                                                                    "firstName": "David",
                                                                    "lastName": "Yankey",
                                                                    "uniform": "66"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ],
                                            "gameDetail": {
                                                "timeOfGame": {
                                                    "hours": 2,
                                                    "minutes": 47
                                                },
                                                "attendance": "73005",
                                                "officiatingCrew": [
                                                    {
                                                        "refereeId": 40403,
                                                        "firstName": "Walt",
                                                        "lastName": "Anderson",
                                                        "positionName": "referee"
                                                    }, {
                                                        "refereeId": 40400,
                                                        "firstName": "Jeff",
                                                        "lastName": "Rice",
                                                        "positionName": "umpire"
                                                    }, {
                                                        "refereeId": 172314,
                                                        "firstName": "Steve",
                                                        "lastName": "Stelljes",
                                                        "positionName": "head-linesman"
                                                    }, {
                                                        "refereeId": 40390,
                                                        "firstName": "Byron",
                                                        "lastName": "Boston",
                                                        "positionName": "line-judge"
                                                    }, {
                                                        "refereeId": 409692,
                                                        "firstName": "Eugene",
                                                        "lastName": "Hall",
                                                        "positionName": "field-judge"
                                                    }, {
                                                        "refereeId": 172311,
                                                        "firstName": "Greg",
                                                        "lastName": "Meyer",
                                                        "positionName": "side-judge"
                                                    }, {
                                                        "refereeId": 465219,
                                                        "firstName": "Terrence",
                                                        "lastName": "Miles",
                                                        "positionName": "back-judge"
                                                    }, {
                                                        "refereeId": 40378,
                                                        "firstName": "Billy",
                                                        "lastName": "Smith",
                                                        "positionName": "replay-official"
                                                    }
                                                ],
                                                "weather": {
                                                    "isIndoor": true,
                                                    "temperature": 70,
                                                    "humidity": 68,
                                                    "clouds": {
                                                        "cloudId": 0,
                                                        "name": "Unknown"
                                                    },
                                                    "wind": {
                                                        "velocity": [
                                                            {
                                                                "speedUnitId": 1,
                                                                "name": "Miles Per Hour",
                                                                "abbreviation": "MPH",
                                                                "speed": "0"
                                                            }
                                                        ],
                                                        "direction": {
                                                            "directionId": 0,
                                                            "name": "Dome or Roof Closed"
                                                        }
                                                    }
                                                }
                                            },
                                            "scoringSummaries": [
                                                {
                                                    "period": 1,
                                                    "scores": [
                                                        {
                                                            "time": {
                                                                "minutes": 9,
                                                                "seconds": 36
                                                            },
                                                            "teamId": 350,
                                                            "scoreType": {
                                                                "scoreTypeId": 1,
                                                                "name": "Rushing TD"
                                                            },
                                                            "unit": {
                                                                "unitId": 1,
                                                                "name": "Offense"
                                                            },
                                                            "scoringPlayerId": 215734,
                                                            "pat": {
                                                                "patTypeId": 14,
                                                                "points": 1,
                                                                "isGood": true,
                                                                "patPlayerId": 75699
                                                            },
                                                            "distance": 1,
                                                            "summaryText": "Pierre Thomas 1 yd run (Shayne Graham kick)",
                                                            "drive": {
                                                                "driveId": 1,
                                                                "plays": 11,
                                                                "yards": 80,
                                                                "minutes": 5,
                                                                "seconds": 24
                                                            },
                                                            "currentScore": {
                                                                "leaderTeamId": 350,
                                                                "leadingScore": 7,
                                                                "trailingScore": 0
                                                            }
                                                        }, {
                                                            "time": {
                                                                "minutes": 4,
                                                                "seconds": 50
                                                            },
                                                            "teamId": 350,
                                                            "scoreType": {
                                                                "scoreTypeId": 2,
                                                                "name": "Passing TD"
                                                            },
                                                            "unit": {
                                                                "unitId": 1,
                                                                "name": "Offense"
                                                            },
                                                            "scoringPlayerId": 469509,
                                                            "passerId": 25598,
                                                            "pat": {
                                                                "patTypeId": 21,
                                                                "points": 1,
                                                                "isGood": false,
                                                                "patPlayerId": 75699
                                                            },
                                                            "distance": 34,
                                                            "summaryText": "Josh Hill 34 yd pass from Drew Brees (blocked XP)",
                                                            "drive": {
                                                                "driveId": 3,
                                                                "plays": 7,
                                                                "yards": 82,
                                                                "minutes": 3,
                                                                "seconds": 39
                                                            },
                                                            "currentScore": {
                                                                "leaderTeamId": 350,
                                                                "leadingScore": 13,
                                                                "trailingScore": 0
                                                            }
                                                        }
                                                    ]
                                                }, {
                                                    "period": 2,
                                                    "scores": [
                                                        {
                                                            "time": {
                                                                "minutes": 14,
                                                                "seconds": 6
                                                            },
                                                            "teamId": 347,
                                                            "scoreType": {
                                                                "scoreTypeId": 3,
                                                                "name": "Field Goal Attempt"
                                                            },
                                                            "unit": {
                                                                "unitId": 3,
                                                                "name": "Special Teams"
                                                            },
                                                            "scoringPlayerId": 458095,
                                                            "distance": 25,
                                                            "summaryText": "Blair Walsh 25 yd FG",
                                                            "drive": {
                                                                "driveId": 4,
                                                                "plays": 13,
                                                                "yards": 71,
                                                                "minutes": 5,
                                                                "seconds": 44
                                                            },
                                                            "currentScore": {
                                                                "leaderTeamId": 350,
                                                                "leadingScore": 13,
                                                                "trailingScore": 3
                                                            }
                                                        }, {
                                                            "time": {
                                                                "minutes": 6,
                                                                "seconds": 28
                                                            },
                                                            "teamId": 347,
                                                            "scoreType": {
                                                                "scoreTypeId": 3,
                                                                "name": "Field Goal Attempt"
                                                            },
                                                            "unit": {
                                                                "unitId": 3,
                                                                "name": "Special Teams"
                                                            },
                                                            "scoringPlayerId": 458095,
                                                            "distance": 30,
                                                            "summaryText": "Blair Walsh 30 yd FG",
                                                            "drive": {
                                                                "driveId": 6,
                                                                "plays": 10,
                                                                "yards": 51,
                                                                "minutes": 5,
                                                                "seconds": 47
                                                            },
                                                            "currentScore": {
                                                                "leaderTeamId": 350,
                                                                "leadingScore": 13,
                                                                "trailingScore": 6
                                                            }
                                                        }
                                                    ]
                                                }, {
                                                    "period": 3,
                                                    "scores": [
                                                        {
                                                            "time": {
                                                                "minutes": 10,
                                                                "seconds": 20
                                                            },
                                                            "teamId": 347,
                                                            "scoreType": {
                                                                "scoreTypeId": 3,
                                                                "name": "Field Goal Attempt"
                                                            },
                                                            "unit": {
                                                                "unitId": 3,
                                                                "name": "Special Teams"
                                                            },
                                                            "scoringPlayerId": 458095,
                                                            "distance": 40,
                                                            "summaryText": "Blair Walsh 40 yd FG",
                                                            "drive": {
                                                                "driveId": 11,
                                                                "plays": 10,
                                                                "yards": 43,
                                                                "minutes": 4,
                                                                "seconds": 40
                                                            },
                                                            "currentScore": {
                                                                "leaderTeamId": 350,
                                                                "leadingScore": 13,
                                                                "trailingScore": 9
                                                            }
                                                        }
                                                    ]
                                                }, {
                                                    "period": 4,
                                                    "scores": [
                                                        {
                                                            "time": {
                                                                "minutes": 12,
                                                                "seconds": 22
                                                            },
                                                            "teamId": 350,
                                                            "scoreType": {
                                                                "scoreTypeId": 2,
                                                                "name": "Passing TD"
                                                            },
                                                            "unit": {
                                                                "unitId": 1,
                                                                "name": "Offense"
                                                            },
                                                            "scoringPlayerId": 162990,
                                                            "passerId": 25598,
                                                            "pat": {
                                                                "patTypeId": 14,
                                                                "points": 1,
                                                                "isGood": true,
                                                                "patPlayerId": 75699
                                                            },
                                                            "distance": 18,
                                                            "summaryText": "Marques Colston 18 yd pass from Drew Brees (Shayne Graham kick)",
                                                            "drive": {
                                                                "driveId": 14,
                                                                "plays": 12,
                                                                "yards": 90,
                                                                "minutes": 5,
                                                                "seconds": 28
                                                            },
                                                            "currentScore": {
                                                                "leaderTeamId": 350,
                                                                "leadingScore": 20,
                                                                "trailingScore": 9
                                                            }
                                                        }
                                                    ]
                                                }
                                            ],
                                            "pbp": [
                                                {
                                                    "playId": 1.0,
                                                    "period": 1,
                                                    "time": "15:00",
                                                    "down": null,
                                                    "distance": null,
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 0,
                                                    "homeScoreAfter": 0,
                                                    "yardLine": "Min35",
                                                    "endYardLine": "NO0",
                                                    "driveId": 1,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": true,
                                                    "kickType": {
                                                        "kickTypeId": 9,
                                                        "name": "Touchback"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Blair Walsh kicks off to the endzone. Touchback.",
                                                    "playType": {
                                                        "playTypeId": 5,
                                                        "name": "Kickoff"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 458095,
                                                                "firstName": "Blair",
                                                                "lastName": "Walsh",
                                                                "uniform": "3"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "M",
                                                    "yards": 65
                                                }, {
                                                    "playId": 3.0,
                                                    "period": 1,
                                                    "time": "15:00",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 0,
                                                    "homeScoreAfter": 0,
                                                    "yardLine": "NO20",
                                                    "endYardLine": "NO30",
                                                    "driveId": 1,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees pass to the right to Benjamin Watson for 10 yards to the NO30. Tackled by Tom Johnson.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 248299,
                                                                "firstName": "Tom",
                                                                "lastName": "Johnson",
                                                                "uniform": "92"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 246082,
                                                                "firstName": "Benjamin",
                                                                "lastName": "Watson",
                                                                "uniform": "82"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 10
                                                }, {
                                                    "playId": 4.0,
                                                    "period": 1,
                                                    "time": "14:25",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 0,
                                                    "homeScoreAfter": 0,
                                                    "yardLine": "NO30",
                                                    "endYardLine": "NO41",
                                                    "driveId": 1,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 4,
                                                        "name": "Off Left End"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Khiry Robinson rush to the left for 11 yards to the NO41. Tackled by Robert Blanton.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 734347,
                                                                "firstName": "Khiry",
                                                                "lastName": "Robinson",
                                                                "uniform": "29"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 469187,
                                                                "firstName": "Robert",
                                                                "lastName": "Blanton",
                                                                "uniform": "36"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 11
                                                }, {
                                                    "playId": 5.0,
                                                    "period": 1,
                                                    "time": "13:55",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 0,
                                                    "homeScoreAfter": 0,
                                                    "yardLine": "NO41",
                                                    "endYardLine": "NO48",
                                                    "driveId": 1,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees pass to the left to Brandin Cooks for 7 yards to the NO48. Tackled by Anthony Barr.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 553112,
                                                                "firstName": "Anthony",
                                                                "lastName": "Barr",
                                                                "uniform": "55"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 607864,
                                                                "firstName": "Brandin",
                                                                "lastName": "Cooks",
                                                                "uniform": "10"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 7
                                                }, {
                                                    "playId": 6.0,
                                                    "period": 1,
                                                    "time": "13:22",
                                                    "down": "2",
                                                    "distance": "3",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 0,
                                                    "homeScoreAfter": 0,
                                                    "yardLine": "NO48",
                                                    "endYardLine": "Min44",
                                                    "driveId": 1,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 9,
                                                        "name": "Off Right Tackle"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Pierre Thomas rush to the right for 8 yards to the Min44. Tackled by Tom Johnson.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 215734,
                                                                "firstName": "Pierre",
                                                                "lastName": "Thomas",
                                                                "uniform": "23"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 248299,
                                                                "firstName": "Tom",
                                                                "lastName": "Johnson",
                                                                "uniform": "92"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 8
                                                }, {
                                                    "playId": 7.0,
                                                    "period": 1,
                                                    "time": "12:46",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 0,
                                                    "homeScoreAfter": 0,
                                                    "yardLine": "Min44",
                                                    "endYardLine": "Min31",
                                                    "driveId": 1,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 9,
                                                        "name": "Off Right Tackle"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Khiry Robinson rush to the right for 13 yards to the Min31. Tackled by Jasper Brinkley.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 734347,
                                                                "firstName": "Khiry",
                                                                "lastName": "Robinson",
                                                                "uniform": "29"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 323621,
                                                                "firstName": "Jasper",
                                                                "lastName": "Brinkley",
                                                                "uniform": "54"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 13
                                                }, {
                                                    "playId": 8.0,
                                                    "period": 1,
                                                    "time": "12:07",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 0,
                                                    "homeScoreAfter": 0,
                                                    "yardLine": "Min31",
                                                    "endYardLine": "Min24",
                                                    "driveId": 1,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees pass to the right to Jimmy Graham for 7 yards to the Min24. Tackled by Josh Robinson.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 495661,
                                                                "firstName": "Josh",
                                                                "lastName": "Robinson",
                                                                "uniform": "21"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 295918,
                                                                "firstName": "Jimmy",
                                                                "lastName": "Graham",
                                                                "uniform": "80"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 7
                                                }, {
                                                    "playId": 9.0,
                                                    "period": 1,
                                                    "time": "11:35",
                                                    "down": "2",
                                                    "distance": "3",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 0,
                                                    "homeScoreAfter": 0,
                                                    "yardLine": "Min24",
                                                    "endYardLine": "Min19",
                                                    "driveId": 1,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees pass to the left to Brandin Cooks for 5 yards to the Min19. Tackled by Captain Munnerlyn and Chad Greenway.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 332869,
                                                                "firstName": "Captain",
                                                                "lastName": "Munnerlyn",
                                                                "uniform": "24"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 2,
                                                            "player": {
                                                                "playerId": 157101,
                                                                "firstName": "Chad",
                                                                "lastName": "Greenway",
                                                                "uniform": "52"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 607864,
                                                                "firstName": "Brandin",
                                                                "lastName": "Cooks",
                                                                "uniform": "10"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 5
                                                }, {
                                                    "playId": 10.0,
                                                    "period": 1,
                                                    "time": "11:05",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 0,
                                                    "homeScoreAfter": 0,
                                                    "yardLine": "Min19",
                                                    "endYardLine": "Min16",
                                                    "driveId": 1,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 4,
                                                        "name": "Off Left End"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Travaris Cadet rush to the left for 3 yards to the Min16. Tackled by Captain Munnerlyn.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 400644,
                                                                "firstName": "Travaris",
                                                                "lastName": "Cadet",
                                                                "uniform": "39"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 332869,
                                                                "firstName": "Captain",
                                                                "lastName": "Munnerlyn",
                                                                "uniform": "24"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 3
                                                }, {
                                                    "playId": 11.0,
                                                    "period": 1,
                                                    "time": "10:38",
                                                    "down": "2",
                                                    "distance": "7",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 0,
                                                    "homeScoreAfter": 0,
                                                    "yardLine": "Min16",
                                                    "endYardLine": "Min14",
                                                    "driveId": 1,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 10,
                                                        "name": "Off Right End"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Khiry Robinson rush to the right for 2 yards to the Min14. Tackled by Josh Robinson.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 734347,
                                                                "firstName": "Khiry",
                                                                "lastName": "Robinson",
                                                                "uniform": "29"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 495661,
                                                                "firstName": "Josh",
                                                                "lastName": "Robinson",
                                                                "uniform": "21"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 2
                                                }, {
                                                    "playId": 12.0,
                                                    "period": 1,
                                                    "time": "9:56",
                                                    "down": "3",
                                                    "distance": "5",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 0,
                                                    "homeScoreAfter": 0,
                                                    "yardLine": "Min14",
                                                    "endYardLine": "Min1",
                                                    "driveId": 1,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees pass to the right to Pierre Thomas for 13 yards to the Min1. Tackled by Josh Robinson.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 495661,
                                                                "firstName": "Josh",
                                                                "lastName": "Robinson",
                                                                "uniform": "21"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 215734,
                                                                "firstName": "Pierre",
                                                                "lastName": "Thomas",
                                                                "uniform": "23"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 13
                                                }, {
                                                    "playId": 13.0,
                                                    "period": 1,
                                                    "time": "9:40",
                                                    "down": "1",
                                                    "distance": "1",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 0,
                                                    "homeScoreAfter": 6,
                                                    "yardLine": "Min1",
                                                    "endYardLine": "Min0",
                                                    "driveId": 1,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 8,
                                                        "name": "Off Right Guard"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Pierre Thomas rush to the right for 1 yard for a TOUCHDOWN.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 215734,
                                                                "firstName": "Pierre",
                                                                "lastName": "Thomas",
                                                                "uniform": "23"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 1
                                                }, {
                                                    "playId": 15.0,
                                                    "period": 1,
                                                    "time": "9:36",
                                                    "down": null,
                                                    "distance": null,
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 6,
                                                    "homeScoreAfter": 7,
                                                    "yardLine": "Min2",
                                                    "endYardLine": "Min2",
                                                    "driveId": 1,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Shayne Graham extra point is GOOD.",
                                                    "playType": {
                                                        "playTypeId": 22,
                                                        "name": "Made Extra Point"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 75699,
                                                                "firstName": "Shayne",
                                                                "lastName": "Graham",
                                                                "uniform": "3"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 7,
                                                            "playerInvolvedType": "holder",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 246313,
                                                                "firstName": "Luke",
                                                                "lastName": "7"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "M",
                                                    "yards": 0
                                                }, {
                                                    "playId": 16.0,
                                                    "period": 1,
                                                    "time": "9:36",
                                                    "down": null,
                                                    "distance": null,
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 7,
                                                    "homeScoreAfter": 7,
                                                    "yardLine": "NO35",
                                                    "endYardLine": "Min20",
                                                    "driveId": 2,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": true,
                                                    "kickType": {
                                                        "kickTypeId": 1,
                                                        "name": "Short"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Thomas Morstead kicks off to the Min-5. Cordarrelle Patterson return for 25 yards to Min20. Tackled by Josh Hill.",
                                                    "playType": {
                                                        "playTypeId": 5,
                                                        "name": "Kickoff"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 286840,
                                                                "firstName": "Thomas",
                                                                "lastName": "Morstead",
                                                                "uniform": "6"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 2,
                                                            "player": {
                                                                "playerId": 690153,
                                                                "firstName": "Cordarrelle",
                                                                "lastName": "Patterson",
                                                                "uniform": "84"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 469509,
                                                                "firstName": "Josh",
                                                                "lastName": "Hill",
                                                                "uniform": "89"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 25
                                                }, {
                                                    "playId": 18.0,
                                                    "period": 1,
                                                    "time": "9:30",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 7,
                                                    "homeScoreAfter": 7,
                                                    "yardLine": "Min20",
                                                    "endYardLine": "Min22",
                                                    "driveId": 2,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 5,
                                                        "name": "Off Left Tackle"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Matt Asiata rush to the left for 2 yards to the Min22. Tackled by Brodrick Bunkley and Junior Galette.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 383504,
                                                                "firstName": "Matt",
                                                                "lastName": "Asiata",
                                                                "uniform": "44"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 215181,
                                                                "firstName": "Brodrick",
                                                                "lastName": "Bunkley",
                                                                "uniform": "77"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 2,
                                                            "player": {
                                                                "playerId": 334303,
                                                                "firstName": "Junior",
                                                                "lastName": "Galette",
                                                                "uniform": "93"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 2
                                                }, {
                                                    "playId": 19.0,
                                                    "period": 1,
                                                    "time": "8:54",
                                                    "down": "2",
                                                    "distance": "8",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 7,
                                                    "homeScoreAfter": 7,
                                                    "yardLine": "Min22",
                                                    "endYardLine": "Min22",
                                                    "driveId": 2,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Matt Cassel incomplete pass to the right intended for Rhett Ellison.",
                                                    "playType": {
                                                        "playTypeId": 2,
                                                        "name": "Incomplete Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 145407,
                                                                "firstName": "Matt",
                                                                "lastName": "Cassel",
                                                                "uniform": "16"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 399295,
                                                                "firstName": "Rhett",
                                                                "lastName": "Ellison",
                                                                "uniform": "85"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 0
                                                }, {
                                                    "playId": 20.0,
                                                    "period": 1,
                                                    "time": "8:46",
                                                    "down": "3",
                                                    "distance": "8",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 7,
                                                    "homeScoreAfter": 7,
                                                    "yardLine": "Min22",
                                                    "endYardLine": "Min22",
                                                    "driveId": 2,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Matt Cassel incomplete pass to the right intended for Kyle Rudolph.",
                                                    "playType": {
                                                        "playTypeId": 2,
                                                        "name": "Incomplete Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 145407,
                                                                "firstName": "Matt",
                                                                "lastName": "Cassel",
                                                                "uniform": "16"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 469472,
                                                                "firstName": "Kyle",
                                                                "lastName": "Rudolph",
                                                                "uniform": "82"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 0
                                                }, {
                                                    "playId": 21.0,
                                                    "period": 1,
                                                    "time": "8:41",
                                                    "down": "4",
                                                    "distance": "8",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 7,
                                                    "homeScoreAfter": 7,
                                                    "yardLine": "Min22",
                                                    "endYardLine": "NO18",
                                                    "driveId": 2,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": true,
                                                    "kickType": {
                                                        "kickTypeId": 1,
                                                        "name": "Short"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Jeff Locke punts for 57 yards to NO21. Brandin Cooks return for a loss of 3 yards to NO18. Tackled by Jabari Price.",
                                                    "playType": {
                                                        "playTypeId": 7,
                                                        "name": "Punt"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 461708,
                                                                "firstName": "Jeff",
                                                                "lastName": "Locke",
                                                                "uniform": "18"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 2,
                                                            "player": {
                                                                "playerId": 607864,
                                                                "firstName": "Brandin",
                                                                "lastName": "Cooks",
                                                                "uniform": "10"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 546109,
                                                                "firstName": "Jabari",
                                                                "lastName": "Price",
                                                                "uniform": "39"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 6,
                                                            "playerInvolvedType": "snapper",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 251130,
                                                                "firstName": "Cullen",
                                                                "lastName": "Loeffler",
                                                                "uniform": "46"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": -3
                                                }, {
                                                    "playId": 23.0,
                                                    "period": 1,
                                                    "time": "8:29",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 7,
                                                    "homeScoreAfter": 7,
                                                    "yardLine": "NO18",
                                                    "endYardLine": "NO19",
                                                    "driveId": 3,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees pass to the left to Pierre Thomas for 1 yard to the NO19. Tackled by Linval Joseph and Jasper Brinkley.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 402468,
                                                                "firstName": "Linval",
                                                                "lastName": "Joseph",
                                                                "uniform": "98"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 2,
                                                            "player": {
                                                                "playerId": 323621,
                                                                "firstName": "Jasper",
                                                                "lastName": "Brinkley",
                                                                "uniform": "54"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 215734,
                                                                "firstName": "Pierre",
                                                                "lastName": "Thomas",
                                                                "uniform": "23"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 1
                                                }, {
                                                    "playId": 24.0,
                                                    "period": 1,
                                                    "time": "7:52",
                                                    "down": "2",
                                                    "distance": "9",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 7,
                                                    "homeScoreAfter": 7,
                                                    "yardLine": "NO19",
                                                    "endYardLine": "NO19",
                                                    "driveId": 3,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 10,
                                                        "name": "Off Right End"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Khiry Robinson rush to the right for no gain to the NO19. Tackled by Captain Munnerlyn.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 734347,
                                                                "firstName": "Khiry",
                                                                "lastName": "Robinson",
                                                                "uniform": "29"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 332869,
                                                                "firstName": "Captain",
                                                                "lastName": "Munnerlyn",
                                                                "uniform": "24"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 0
                                                }, {
                                                    "playId": 25.0,
                                                    "period": 1,
                                                    "time": "7:16",
                                                    "down": "3",
                                                    "distance": "9",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 7,
                                                    "homeScoreAfter": 7,
                                                    "yardLine": "NO19",
                                                    "endYardLine": "NO34",
                                                    "driveId": 3,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees pass to the right to Jimmy Graham for 15 yards to the NO34. Tackled by Robert Blanton.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 469187,
                                                                "firstName": "Robert",
                                                                "lastName": "Blanton",
                                                                "uniform": "36"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 295918,
                                                                "firstName": "Jimmy",
                                                                "lastName": "Graham",
                                                                "uniform": "80"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 15
                                                }, {
                                                    "playId": 26.0,
                                                    "period": 1,
                                                    "time": "6:44",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 7,
                                                    "homeScoreAfter": 7,
                                                    "yardLine": "NO34",
                                                    "endYardLine": "NO45",
                                                    "driveId": 3,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 4,
                                                        "name": "Off Left End"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Pierre Thomas rush to the left for 11 yards to the NO45. Tackled by Robert Blanton.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 215734,
                                                                "firstName": "Pierre",
                                                                "lastName": "Thomas",
                                                                "uniform": "23"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 469187,
                                                                "firstName": "Robert",
                                                                "lastName": "Blanton",
                                                                "uniform": "36"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 11
                                                }, {
                                                    "playId": 27.0,
                                                    "period": 1,
                                                    "time": "6:07",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 7,
                                                    "homeScoreAfter": 7,
                                                    "yardLine": "NO45",
                                                    "endYardLine": "Min39",
                                                    "driveId": 3,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees pass to the left to Brandin Cooks for 16 yards to the Min39. Tackled by Robert Blanton.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 469187,
                                                                "firstName": "Robert",
                                                                "lastName": "Blanton",
                                                                "uniform": "36"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 607864,
                                                                "firstName": "Brandin",
                                                                "lastName": "Cooks",
                                                                "uniform": "10"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 16
                                                }, {
                                                    "playId": 28.0,
                                                    "period": 1,
                                                    "time": "5:30",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 7,
                                                    "homeScoreAfter": 7,
                                                    "yardLine": "Min39",
                                                    "endYardLine": "Min34",
                                                    "driveId": 3,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 5,
                                                        "name": "Off Left Tackle"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Khiry Robinson rush to the left for 5 yards to the Min34. Tackled by Brian Robison and Harrison Smith.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 734347,
                                                                "firstName": "Khiry",
                                                                "lastName": "Robinson",
                                                                "uniform": "29"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 215104,
                                                                "firstName": "Brian",
                                                                "lastName": "Robison",
                                                                "uniform": "96"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 2,
                                                            "player": {
                                                                "playerId": 400486,
                                                                "firstName": "Harrison",
                                                                "lastName": "Smith",
                                                                "uniform": "22"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 5
                                                }, {
                                                    "playId": 29.0,
                                                    "period": 1,
                                                    "time": "4:57",
                                                    "down": "2",
                                                    "distance": "5",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 7,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min34",
                                                    "endYardLine": "Min0",
                                                    "driveId": 3,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees pass to the right to Josh Hill for 34 yards for a TOUCHDOWN.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 469509,
                                                                "firstName": "Josh",
                                                                "lastName": "Hill",
                                                                "uniform": "89"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 34
                                                }, {
                                                    "playId": 30.0,
                                                    "period": 1,
                                                    "time": "4:50",
                                                    "down": null,
                                                    "distance": null,
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min2",
                                                    "endYardLine": "Min2",
                                                    "driveId": 3,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Shayne Graham extra point Is BLOCKED.",
                                                    "playType": {
                                                        "playTypeId": 47,
                                                        "name": "Blocked Extra Point"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 75699,
                                                                "firstName": "Shayne",
                                                                "lastName": "Graham",
                                                                "uniform": "3"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 7,
                                                            "playerInvolvedType": "holder",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 246313,
                                                                "firstName": "Luke",
                                                                "lastName": "McCown",
                                                                "uniform": "7"
                                                            }
                                                        }
                                                    ],
                                                    "direction": null,
                                                    "yards": 0
                                                }, {
                                                    "playId": 31.0,
                                                    "period": 1,
                                                    "time": "4:50",
                                                    "down": null,
                                                    "distance": null,
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO35",
                                                    "endYardLine": "Min22",
                                                    "driveId": 4,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": true,
                                                    "kickType": {
                                                        "kickTypeId": 1,
                                                        "name": "Short"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Thomas Morstead kicks off to the Min-4. Cordarrelle Patterson return for 26 yards to Min22. Tackled by Austin Johnson.",
                                                    "playType": {
                                                        "playTypeId": 5,
                                                        "name": "Kickoff"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 286840,
                                                                "firstName": "Thomas",
                                                                "lastName": "Morstead",
                                                                "uniform": "6"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 2,
                                                            "player": {
                                                                "playerId": 690153,
                                                                "firstName": "Cordarrelle",
                                                                "lastName": "Patterson",
                                                                "uniform": "84"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 449465,
                                                                "firstName": "Austin",
                                                                "lastName": "Johnson",
                                                                "uniform": "35"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 26
                                                }, {
                                                    "playId": 33.0,
                                                    "period": 1,
                                                    "time": "4:50",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min22",
                                                    "endYardLine": "Min22",
                                                    "driveId": 4,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Matt Cassel pass to the left to Matt Asiata for no gain to the Min22. Tackled by Parys Haralson.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 145407,
                                                                "firstName": "Matt",
                                                                "lastName": "Cassel",
                                                                "uniform": "16"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 217301,
                                                                "firstName": "Parys",
                                                                "lastName": "Haralson",
                                                                "uniform": "98"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 383504,
                                                                "firstName": "Matt",
                                                                "lastName": "Asiata",
                                                                "uniform": "44"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 0
                                                }, {
                                                    "playId": 34.0,
                                                    "period": 1,
                                                    "time": "4:00",
                                                    "down": "2",
                                                    "distance": "10",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min22",
                                                    "endYardLine": "Min30",
                                                    "driveId": 4,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Matt Cassel pass to the right to Kyle Rudolph for 8 yards to the Min30. Tackled by Rafael Bush.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 145407,
                                                                "firstName": "Matt",
                                                                "lastName": "Cassel",
                                                                "uniform": "16"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 303006,
                                                                "firstName": "Rafael",
                                                                "lastName": "Bush",
                                                                "uniform": "25"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 469472,
                                                                "firstName": "Kyle",
                                                                "lastName": "Rudolph",
                                                                "uniform": "82"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 8
                                                }, {
                                                    "playId": 35.0,
                                                    "period": 1,
                                                    "time": "3:28",
                                                    "down": "3",
                                                    "distance": "2",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min30",
                                                    "endYardLine": "Min38",
                                                    "driveId": 4,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Matt Cassel pass to the left to Greg Jennings for 8 yards to the Min38. Tackled by Kenny Vaccaro.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 145407,
                                                                "firstName": "Matt",
                                                                "lastName": "Cassel",
                                                                "uniform": "16"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 492781,
                                                                "firstName": "Kenny",
                                                                "lastName": "Vaccaro",
                                                                "uniform": "32"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 156869,
                                                                "firstName": "Greg",
                                                                "lastName": "Jennings",
                                                                "uniform": "15"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 8
                                                }, {
                                                    "playId": 36.0,
                                                    "period": 1,
                                                    "time": "2:54",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min38",
                                                    "endYardLine": "Min37",
                                                    "driveId": 4,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 9,
                                                        "name": "Off Right Tackle"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Matt Asiata rush to the right for a loss of 1 yard to the Min37. Tackled by Curtis Lofton.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 383504,
                                                                "firstName": "Matt",
                                                                "lastName": "Asiata",
                                                                "uniform": "44"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 300754,
                                                                "firstName": "Curtis",
                                                                "lastName": "Lofton",
                                                                "uniform": "50"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": -1
                                                }, {
                                                    "playId": 37.0,
                                                    "period": 1,
                                                    "time": "2:22",
                                                    "down": "2",
                                                    "distance": "11",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min37",
                                                    "endYardLine": "NO35",
                                                    "driveId": 4,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Matt Cassel pass to the left to Cordarrelle Patterson for 28 yards to the NO35. Tackled by Corey White.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 145407,
                                                                "firstName": "Matt",
                                                                "lastName": "Cassel",
                                                                "uniform": "16"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 459492,
                                                                "firstName": "Corey",
                                                                "lastName": "White",
                                                                "uniform": "24"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 690153,
                                                                "firstName": "Cordarrelle",
                                                                "lastName": "Patterson",
                                                                "uniform": "84"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 28
                                                }, {
                                                    "playId": 38.0,
                                                    "period": 1,
                                                    "time": "1:38",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO35",
                                                    "endYardLine": "NO26",
                                                    "driveId": 4,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Matt Cassel pass to the middle to Kyle Rudolph for 9 yards to the NO26. Tackled by Kenny Vaccaro and Junior Galette.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 145407,
                                                                "firstName": "Matt",
                                                                "lastName": "Cassel",
                                                                "uniform": "16"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 492781,
                                                                "firstName": "Kenny",
                                                                "lastName": "Vaccaro",
                                                                "uniform": "32"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 2,
                                                            "player": {
                                                                "playerId": 334303,
                                                                "firstName": "Junior",
                                                                "lastName": "Galette",
                                                                "uniform": "93"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 469472,
                                                                "firstName": "Kyle",
                                                                "lastName": "Rudolph",
                                                                "uniform": "82"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "M",
                                                    "yards": 9
                                                }, {
                                                    "playId": 39.0,
                                                    "period": 1,
                                                    "time": "1:00",
                                                    "down": "2",
                                                    "distance": "1",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO26",
                                                    "endYardLine": "NO26",
                                                    "driveId": 4,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Matt Cassel incomplete pass to the right intended for Kyle Rudolph defensed by Ramon Humber.",
                                                    "playType": {
                                                        "playTypeId": 2,
                                                        "name": "Incomplete Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 145407,
                                                                "firstName": "Matt",
                                                                "lastName": "Cassel",
                                                                "uniform": "16"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 4,
                                                            "playerInvolvedType": "pass defender",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 316286,
                                                                "firstName": "Ramon",
                                                                "lastName": "Humber",
                                                                "uniform": "53"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 469472,
                                                                "firstName": "Kyle",
                                                                "lastName": "Rudolph",
                                                                "uniform": "82"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 0
                                                }, {
                                                    "playId": 40.0,
                                                    "period": 1,
                                                    "time": "0:55",
                                                    "down": "3",
                                                    "distance": "1",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO26",
                                                    "endYardLine": "NO22",
                                                    "driveId": 4,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 6,
                                                        "name": "Off Left Guard"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Matt Asiata rush to the left for 4 yards to the NO22. Tackled by Jairus Byrd and Kyle Knox.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 383504,
                                                                "firstName": "Matt",
                                                                "lastName": "Asiata",
                                                                "uniform": "44"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 296058,
                                                                "firstName": "Jairus",
                                                                "lastName": "Byrd",
                                                                "uniform": "31"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 2,
                                                            "player": {
                                                                "playerId": 449679,
                                                                "firstName": "Kyle",
                                                                "lastName": "Knox",
                                                                "uniform": "58"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 4
                                                }, {
                                                    "playId": 41.0,
                                                    "period": 1,
                                                    "time": "0:15",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO22",
                                                    "endYardLine": "NO17",
                                                    "driveId": 4,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 8,
                                                        "name": "Off Right Guard"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Matt Asiata rush to the right for 5 yards to the NO17. Tackled by Junior Galette.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 383504,
                                                                "firstName": "Matt",
                                                                "lastName": "Asiata",
                                                                "uniform": "44"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 334303,
                                                                "firstName": "Junior",
                                                                "lastName": "Galette",
                                                                "uniform": "93"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 5
                                                }, {
                                                    "playId": 43.0,
                                                    "period": 2,
                                                    "time": "15:00",
                                                    "down": "2",
                                                    "distance": "5",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO17",
                                                    "endYardLine": "NO12",
                                                    "driveId": 4,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "penaltyType": {
                                                        "penaltyTypeId": 12,
                                                        "name": "Holding"
                                                    },
                                                    "playText": "Penalty: Holding on Saints (Kenny Vaccaro) 5 yards.",
                                                    "playType": {
                                                        "playTypeId": 11,
                                                        "name": "Penalty"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 492781,
                                                                "firstName": "Kenny",
                                                                "lastName": "Vaccaro",
                                                                "uniform": "32"
                                                            }
                                                        }
                                                    ],
                                                    "direction": null,
                                                    "yards": 5
                                                }, {
                                                    "playId": 45.0,
                                                    "period": 2,
                                                    "time": "14:56",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO12",
                                                    "endYardLine": "NO12",
                                                    "driveId": 4,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Matt Cassel incomplete pass to the left intended for Cordarrelle Patterson.",
                                                    "playType": {
                                                        "playTypeId": 2,
                                                        "name": "Incomplete Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 145407,
                                                                "firstName": "Matt",
                                                                "lastName": "Cassel",
                                                                "uniform": "16"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 690153,
                                                                "firstName": "Cordarrelle",
                                                                "lastName": "Patterson",
                                                                "uniform": "84"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 0
                                                }, {
                                                    "playId": 46.0,
                                                    "period": 2,
                                                    "time": "14:52",
                                                    "down": "2",
                                                    "distance": "10",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO12",
                                                    "endYardLine": "NO12",
                                                    "driveId": 4,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Matt Cassel incomplete pass to the left intended for Matt Asiata.",
                                                    "playType": {
                                                        "playTypeId": 2,
                                                        "name": "Incomplete Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 145407,
                                                                "firstName": "Matt",
                                                                "lastName": "Cassel",
                                                                "uniform": "16"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 383504,
                                                                "firstName": "Matt",
                                                                "lastName": "Asiata",
                                                                "uniform": "44"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 0
                                                }, {
                                                    "playId": 47.0,
                                                    "period": 2,
                                                    "time": "14:47",
                                                    "down": "3",
                                                    "distance": "10",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 0,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO12",
                                                    "endYardLine": "NO7",
                                                    "driveId": 4,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 7,
                                                        "name": "Middle"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Matt Cassel rush to the middle for 5 yards to the NO7. Tackled by Curtis Lofton.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 145407,
                                                                "firstName": "Matt",
                                                                "lastName": "Cassel",
                                                                "uniform": "16"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 300754,
                                                                "firstName": "Curtis",
                                                                "lastName": "Lofton",
                                                                "uniform": "50"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "M",
                                                    "yards": 5
                                                }, {
                                                    "playId": 48.0,
                                                    "period": 2,
                                                    "time": "14:10",
                                                    "down": "4",
                                                    "distance": "5",
                                                    "awayScoreBefore": 0,
                                                    "awayScoreAfter": 3,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO7",
                                                    "endYardLine": "NO0",
                                                    "driveId": 4,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Blair Walsh 25 yard field goal attempt is GOOD. Holder: Jeff Locke.",
                                                    "playType": {
                                                        "playTypeId": 17,
                                                        "name": "Made Field Goal"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 458095,
                                                                "firstName": "Blair",
                                                                "lastName": "Walsh",
                                                                "uniform": "3"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 7,
                                                            "playerInvolvedType": "holder",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 461708,
                                                                "firstName": "Jeff",
                                                                "lastName": "Locke",
                                                                "uniform": "18"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "M",
                                                    "yards": 25
                                                }, {
                                                    "playId": 49.0,
                                                    "period": 2,
                                                    "time": "14:06",
                                                    "down": null,
                                                    "distance": null,
                                                    "awayScoreBefore": 3,
                                                    "awayScoreAfter": 3,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min35",
                                                    "endYardLine": "NO0",
                                                    "driveId": 5,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": true,
                                                    "kickType": {
                                                        "kickTypeId": 9,
                                                        "name": "Touchback"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Blair Walsh kicks off to the endzone. Touchback.",
                                                    "playType": {
                                                        "playTypeId": 5,
                                                        "name": "Kickoff"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 458095,
                                                                "firstName": "Blair",
                                                                "lastName": "Walsh",
                                                                "uniform": "3"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 65
                                                }, {
                                                    "playId": 51.0,
                                                    "period": 2,
                                                    "time": "14:06",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 3,
                                                    "awayScoreAfter": 3,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO20",
                                                    "endYardLine": "NO20",
                                                    "driveId": 5,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees incomplete pass to the left intended for Marques Colston.",
                                                    "playType": {
                                                        "playTypeId": 2,
                                                        "name": "Incomplete Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 162990,
                                                                "firstName": "Marques",
                                                                "lastName": "Colston",
                                                                "uniform": "12"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 0
                                                }, {
                                                    "playId": 52.0,
                                                    "period": 2,
                                                    "time": "14:01",
                                                    "down": "2",
                                                    "distance": "10",
                                                    "awayScoreBefore": 3,
                                                    "awayScoreAfter": 3,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO20",
                                                    "endYardLine": "NO10",
                                                    "driveId": 5,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 8,
                                                        "name": "Off Right Guard"
                                                    },
                                                    "isReview": false,
                                                    "penaltyType": {
                                                        "penaltyTypeId": 12,
                                                        "name": "Holding"
                                                    },
                                                    "playText": "Penalty: Holding on Saints (Ben Grubbs) -10 yards.",
                                                    "playType": {
                                                        "playTypeId": 10,
                                                        "name": "Penalty"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 217576,
                                                                "firstName": "Ben",
                                                                "lastName": "Grubbs",
                                                                "uniform": "66"
                                                            }
                                                        }
                                                    ],
                                                    "direction": null,
                                                    "yards": -10
                                                }, {
                                                    "playId": 54.0,
                                                    "period": 2,
                                                    "time": "13:36",
                                                    "down": "2",
                                                    "distance": "20",
                                                    "awayScoreBefore": 3,
                                                    "awayScoreAfter": 3,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO10",
                                                    "endYardLine": "NO17",
                                                    "driveId": 5,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 9,
                                                        "name": "Off Right Tackle"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Pierre Thomas rush to the right for 7 yards to the NO17. Tackled by Sharrif Floyd.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 215734,
                                                                "firstName": "Pierre",
                                                                "lastName": "Thomas",
                                                                "uniform": "23"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 557186,
                                                                "firstName": "Sharrif",
                                                                "lastName": "Floyd",
                                                                "uniform": "73"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 7
                                                }, {
                                                    "playId": 55.0,
                                                    "period": 2,
                                                    "time": "12:59",
                                                    "down": "3",
                                                    "distance": "13",
                                                    "awayScoreBefore": 3,
                                                    "awayScoreAfter": 3,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO17",
                                                    "endYardLine": "NO24",
                                                    "driveId": 5,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees pass to the left to Brandin Cooks for 7 yards to the NO24. Tackled by Xavier Rhodes.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 509368,
                                                                "firstName": "Xavier",
                                                                "lastName": "Rhodes",
                                                                "uniform": "29"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 607864,
                                                                "firstName": "Brandin",
                                                                "lastName": "Cooks",
                                                                "uniform": "10"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 7
                                                }, {
                                                    "playId": 56.0,
                                                    "period": 2,
                                                    "time": "12:24",
                                                    "down": "4",
                                                    "distance": "6",
                                                    "awayScoreBefore": 3,
                                                    "awayScoreAfter": 3,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO24",
                                                    "endYardLine": "Min37",
                                                    "driveId": 5,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": true,
                                                    "kickType": {
                                                        "kickTypeId": 1,
                                                        "name": "Short"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Thomas Morstead punts for 42 yards to Min34. Marcus Sherels return for 3 yards to Min37. Tackled by Brian Dixon.",
                                                    "playType": {
                                                        "playTypeId": 7,
                                                        "name": "Punt"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 286840,
                                                                "firstName": "Thomas",
                                                                "lastName": "Morstead",
                                                                "uniform": "6"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 2,
                                                            "player": {
                                                                "playerId": 334435,
                                                                "firstName": "Marcus",
                                                                "lastName": "Sherels",
                                                                "uniform": "35"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 794242,
                                                                "firstName": "Brian",
                                                                "lastName": "Dixon",
                                                                "uniform": "20"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 6,
                                                            "playerInvolvedType": "snapper",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 332584,
                                                                "firstName": "Justin",
                                                                "lastName": "Drescher",
                                                                "uniform": "47"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 3
                                                }, {
                                                    "playId": 58.0,
                                                    "period": 2,
                                                    "time": "12:15",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 3,
                                                    "awayScoreAfter": 3,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min37",
                                                    "endYardLine": "Min30",
                                                    "driveId": 6,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 4,
                                                        "name": "Off Left End"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Cordarrelle Patterson rush to the left for a loss of 7 yards to the Min30. Tackled by Curtis Lofton.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 690153,
                                                                "firstName": "Cordarrelle",
                                                                "lastName": "Patterson",
                                                                "uniform": "84"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 300754,
                                                                "firstName": "Curtis",
                                                                "lastName": "Lofton",
                                                                "uniform": "50"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": -7
                                                }, {
                                                    "playId": 59.0,
                                                    "period": 2,
                                                    "time": "11:33",
                                                    "down": "2",
                                                    "distance": "17",
                                                    "awayScoreBefore": 3,
                                                    "awayScoreAfter": 3,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min30",
                                                    "endYardLine": "Min40",
                                                    "driveId": 6,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Teddy Bridgewater pass to the right to Greg Jennings for 10 yards to the Min40. Tackled by Jairus Byrd.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 296058,
                                                                "firstName": "Jairus",
                                                                "lastName": "Byrd",
                                                                "uniform": "31"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 156869,
                                                                "firstName": "Greg",
                                                                "lastName": "Jennings",
                                                                "uniform": "15"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 10
                                                }, {
                                                    "playId": 60.0,
                                                    "period": 2,
                                                    "time": "10:48",
                                                    "down": "3",
                                                    "distance": "7",
                                                    "awayScoreBefore": 3,
                                                    "awayScoreAfter": 3,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min40",
                                                    "endYardLine": "NO19",
                                                    "driveId": 6,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Teddy Bridgewater pass to the left to Matt Asiata for 41 yards to the NO19. Tackled by Curtis Lofton.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 300754,
                                                                "firstName": "Curtis",
                                                                "lastName": "Lofton",
                                                                "uniform": "50"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 383504,
                                                                "firstName": "Matt",
                                                                "lastName": "Asiata",
                                                                "uniform": "44"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 41
                                                }, {
                                                    "playId": 61.0,
                                                    "period": 2,
                                                    "time": "10:16",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 3,
                                                    "awayScoreAfter": 3,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO19",
                                                    "endYardLine": "NO17",
                                                    "driveId": 6,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 9,
                                                        "name": "Off Right Tackle"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Teddy Bridgewater rush to the right for 2 yards to the NO17. Tackled by Junior Galette.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 334303,
                                                                "firstName": "Junior",
                                                                "lastName": "Galette",
                                                                "uniform": "93"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 2
                                                }, {
                                                    "playId": 62.0,
                                                    "period": 2,
                                                    "time": "9:44",
                                                    "down": "2",
                                                    "distance": "8",
                                                    "awayScoreBefore": 3,
                                                    "awayScoreAfter": 3,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO17",
                                                    "endYardLine": "NO16",
                                                    "driveId": 6,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 8,
                                                        "name": "Off Right Guard"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Matt Asiata rush to the right for 1 yard to the NO16. Tackled by Curtis Lofton.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 383504,
                                                                "firstName": "Matt",
                                                                "lastName": "Asiata",
                                                                "uniform": "44"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 300754,
                                                                "firstName": "Curtis",
                                                                "lastName": "Lofton",
                                                                "uniform": "50"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 1
                                                }, {
                                                    "playId": 63.0,
                                                    "period": 2,
                                                    "time": "9:09",
                                                    "down": "3",
                                                    "distance": "7",
                                                    "awayScoreBefore": 3,
                                                    "awayScoreAfter": 3,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO16",
                                                    "endYardLine": "NO7",
                                                    "driveId": 6,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 8,
                                                        "name": "Off Right Guard"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Teddy Bridgewater rush to the right for 9 yards to the NO7. Tackled by Rafael Bush.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 303006,
                                                                "firstName": "Rafael",
                                                                "lastName": "Bush",
                                                                "uniform": "25"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 9
                                                }, {
                                                    "playId": 64.0,
                                                    "period": 2,
                                                    "time": "8:29",
                                                    "down": "1",
                                                    "distance": "7",
                                                    "awayScoreBefore": 3,
                                                    "awayScoreAfter": 3,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO7",
                                                    "endYardLine": "NO7",
                                                    "driveId": 6,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Vikings timeout.",
                                                    "playType": {
                                                        "playTypeId": 57,
                                                        "name": "Offense Time Out"
                                                    },
                                                    "playersInvolved": [],
                                                    "direction": null,
                                                    "yards": 0
                                                }, {
                                                    "playId": 65.0,
                                                    "period": 2,
                                                    "time": "8:29",
                                                    "down": "1",
                                                    "distance": "7",
                                                    "awayScoreBefore": 3,
                                                    "awayScoreAfter": 3,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO7",
                                                    "endYardLine": "NO15",
                                                    "driveId": 6,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Teddy Bridgewater sacked at NO15 for a loss of 8 yards by Junior Galette.",
                                                    "playType": {
                                                        "playTypeId": 3,
                                                        "name": "Sack"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 334303,
                                                                "firstName": "Junior",
                                                                "lastName": "Galette",
                                                                "uniform": "93"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": -8
                                                }, {
                                                    "playId": 66.0,
                                                    "period": 2,
                                                    "time": "7:50",
                                                    "down": "2",
                                                    "distance": "15",
                                                    "awayScoreBefore": 3,
                                                    "awayScoreAfter": 3,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO15",
                                                    "endYardLine": "NO20",
                                                    "driveId": 6,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Teddy Bridgewater pass to the left to Matt Asiata for a loss of 5 yards to the NO20. Tackled by Curtis Lofton and Junior Galette.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 300754,
                                                                "firstName": "Curtis",
                                                                "lastName": "Lofton",
                                                                "uniform": "50"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 2,
                                                            "player": {
                                                                "playerId": 334303,
                                                                "firstName": "Junior",
                                                                "lastName": "Galette",
                                                                "uniform": "93"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 383504,
                                                                "firstName": "Matt",
                                                                "lastName": "Asiata",
                                                                "uniform": "44"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": -5
                                                }, {
                                                    "playId": 67.0,
                                                    "period": 2,
                                                    "time": "7:06",
                                                    "down": "3",
                                                    "distance": "20",
                                                    "awayScoreBefore": 3,
                                                    "awayScoreAfter": 3,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO20",
                                                    "endYardLine": "NO12",
                                                    "driveId": 6,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 10,
                                                        "name": "Off Right End"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Matt Asiata rush to the right for 8 yards to the NO12. Tackled by Kenny Vaccaro and Rafael Bush.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 383504,
                                                                "firstName": "Matt",
                                                                "lastName": "Asiata",
                                                                "uniform": "44"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 492781,
                                                                "firstName": "Kenny",
                                                                "lastName": "Vaccaro",
                                                                "uniform": "32"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 2,
                                                            "player": {
                                                                "playerId": 303006,
                                                                "firstName": "Rafael",
                                                                "lastName": "Bush",
                                                                "uniform": "25"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 8
                                                }, {
                                                    "playId": 68.0,
                                                    "period": 2,
                                                    "time": "6:33",
                                                    "down": "4",
                                                    "distance": "12",
                                                    "awayScoreBefore": 3,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO12",
                                                    "endYardLine": "NO0",
                                                    "driveId": 6,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Blair Walsh 30 yard field goal attempt is GOOD. Holder: Jeff Locke.",
                                                    "playType": {
                                                        "playTypeId": 17,
                                                        "name": "Made Field Goal"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 458095,
                                                                "firstName": "Blair",
                                                                "lastName": "Walsh",
                                                                "uniform": "3"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 7,
                                                            "playerInvolvedType": "holder",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 461708,
                                                                "firstName": "Jeff",
                                                                "lastName": "Locke",
                                                                "uniform": "18"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "M",
                                                    "yards": 30
                                                }, {
                                                    "playId": 69.0,
                                                    "period": 2,
                                                    "time": "6:28",
                                                    "down": null,
                                                    "distance": null,
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min35",
                                                    "endYardLine": "NO0",
                                                    "driveId": 7,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": true,
                                                    "kickType": {
                                                        "kickTypeId": 9,
                                                        "name": "Touchback"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Blair Walsh kicks off to the endzone. Touchback.",
                                                    "playType": {
                                                        "playTypeId": 5,
                                                        "name": "Kickoff"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 458095,
                                                                "firstName": "Blair",
                                                                "lastName": "Walsh",
                                                                "uniform": "3"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 65
                                                }, {
                                                    "playId": 71.0,
                                                    "period": 2,
                                                    "time": "6:28",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO20",
                                                    "endYardLine": "NO26",
                                                    "driveId": 7,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 4,
                                                        "name": "Off Left End"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Travaris Cadet rush to the left for 6 yards to the NO26. Tackled by Xavier Rhodes.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 400644,
                                                                "firstName": "Travaris",
                                                                "lastName": "Cadet",
                                                                "uniform": "39"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 509368,
                                                                "firstName": "Xavier",
                                                                "lastName": "Rhodes",
                                                                "uniform": "29"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 6
                                                }, {
                                                    "playId": 72.0,
                                                    "period": 2,
                                                    "time": "5:46",
                                                    "down": "2",
                                                    "distance": "4",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO26",
                                                    "endYardLine": "NO26",
                                                    "driveId": 7,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees incomplete pass to the left intended for Marques Colston.",
                                                    "playType": {
                                                        "playTypeId": 2,
                                                        "name": "Incomplete Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 162990,
                                                                "firstName": "Marques",
                                                                "lastName": "Colston",
                                                                "uniform": "12"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 0
                                                }, {
                                                    "playId": 73.0,
                                                    "period": 2,
                                                    "time": "5:40",
                                                    "down": "3",
                                                    "distance": "4",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO26",
                                                    "endYardLine": "NO32",
                                                    "driveId": 7,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees pass to the left to Kenny Stills for 6 yards to the NO32. Tackled by Gerald Hodges.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 493471,
                                                                "firstName": "Gerald",
                                                                "lastName": "Hodges",
                                                                "uniform": "50"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 542896,
                                                                "firstName": "Kenny",
                                                                "lastName": "Stills",
                                                                "uniform": "84"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 6
                                                }, {
                                                    "playId": 74.0,
                                                    "period": 2,
                                                    "time": "5:10",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO32",
                                                    "endYardLine": "NO39",
                                                    "driveId": 7,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 9,
                                                        "name": "Off Right Tackle"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Khiry Robinson rush to the right for 7 yards to the NO39. Tackled by Jasper Brinkley and Anthony Barr.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 734347,
                                                                "firstName": "Khiry",
                                                                "lastName": "Robinson",
                                                                "uniform": "29"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 323621,
                                                                "firstName": "Jasper",
                                                                "lastName": "Brinkley",
                                                                "uniform": "54"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 2,
                                                            "player": {
                                                                "playerId": 553112,
                                                                "firstName": "Anthony",
                                                                "lastName": "Barr",
                                                                "uniform": "55"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 7
                                                }, {
                                                    "playId": 75.0,
                                                    "period": 2,
                                                    "time": "4:35",
                                                    "down": "2",
                                                    "distance": "3",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO39",
                                                    "endYardLine": "NO41",
                                                    "driveId": 7,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees pass to the left to Brandin Cooks for 2 yards to the NO41. Tackled by Jasper Brinkley.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 323621,
                                                                "firstName": "Jasper",
                                                                "lastName": "Brinkley",
                                                                "uniform": "54"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 607864,
                                                                "firstName": "Brandin",
                                                                "lastName": "Cooks",
                                                                "uniform": "10"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 2
                                                }, {
                                                    "playId": 76.0,
                                                    "period": 2,
                                                    "time": "3:56",
                                                    "down": "3",
                                                    "distance": "1",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO41",
                                                    "endYardLine": "NO41",
                                                    "driveId": 7,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 4,
                                                        "name": "Off Left End"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Pierre Thomas rush to the left for no gain to the NO41. Tackled by Harrison Smith.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 215734,
                                                                "firstName": "Pierre",
                                                                "lastName": "Thomas",
                                                                "uniform": "23"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 400486,
                                                                "firstName": "Harrison",
                                                                "lastName": "Smith",
                                                                "uniform": "22"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 0
                                                }, {
                                                    "playId": 77.0,
                                                    "period": 2,
                                                    "time": "3:16",
                                                    "down": "4",
                                                    "distance": "1",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO41",
                                                    "endYardLine": "Min27",
                                                    "driveId": 7,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": true,
                                                    "kickType": {
                                                        "kickTypeId": 1,
                                                        "name": "Short"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Thomas Morstead punts for 45 yards to Min14. Marcus Sherels return for 13 yards to Min27. Tackled by Patrick Robinson.",
                                                    "playType": {
                                                        "playTypeId": 7,
                                                        "name": "Punt"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 286840,
                                                                "firstName": "Thomas",
                                                                "lastName": "Morstead",
                                                                "uniform": "6"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 2,
                                                            "player": {
                                                                "playerId": 334435,
                                                                "firstName": "Marcus",
                                                                "lastName": "Sherels",
                                                                "uniform": "35"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 323505,
                                                                "firstName": "Patrick",
                                                                "lastName": "Robinson",
                                                                "uniform": "21"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 6,
                                                            "playerInvolvedType": "snapper",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 332584,
                                                                "firstName": "Justin",
                                                                "lastName": "Drescher",
                                                                "uniform": "47"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 13
                                                }, {
                                                    "playId": 79.0,
                                                    "period": 2,
                                                    "time": "3:02",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min27",
                                                    "endYardLine": "Min42",
                                                    "driveId": 8,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 7,
                                                        "name": "Middle"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Teddy Bridgewater rush to the middle for 15 yards to the Min42. Tackled by Jairus Byrd.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 296058,
                                                                "firstName": "Jairus",
                                                                "lastName": "Byrd",
                                                                "uniform": "31"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "M",
                                                    "yards": 15
                                                }, {
                                                    "playId": 80.0,
                                                    "period": 2,
                                                    "time": "2:22",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min42",
                                                    "endYardLine": "Min43",
                                                    "driveId": 8,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 8,
                                                        "name": "Off Right Guard"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Jerick McKinnon rush to the right for 1 yard to the Min43. Tackled by Parys Haralson.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 563824,
                                                                "firstName": "Jerick",
                                                                "lastName": "McKinnon",
                                                                "uniform": "31"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 217301,
                                                                "firstName": "Parys",
                                                                "lastName": "Haralson",
                                                                "uniform": "98"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 1
                                                }, {
                                                    "playId": 81.0,
                                                    "period": 2,
                                                    "time": "2:17",
                                                    "down": "2",
                                                    "distance": "9",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min43",
                                                    "endYardLine": "Min43",
                                                    "driveId": 8,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Saints timeout.",
                                                    "playType": {
                                                        "playTypeId": 58,
                                                        "name": "Defensive Time Out"
                                                    },
                                                    "playersInvolved": [],
                                                    "direction": null,
                                                    "yards": 0
                                                }, {
                                                    "playId": 82.0,
                                                    "period": 2,
                                                    "time": "2:17",
                                                    "down": "2",
                                                    "distance": "9",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min43",
                                                    "endYardLine": "Min43",
                                                    "driveId": 8,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Teddy Bridgewater incomplete pass to the right intended for Jerick McKinnon.",
                                                    "playType": {
                                                        "playTypeId": 2,
                                                        "name": "Incomplete Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 563824,
                                                                "firstName": "Jerick",
                                                                "lastName": "McKinnon",
                                                                "uniform": "31"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 0
                                                }, {
                                                    "playId": 83.0,
                                                    "period": 2,
                                                    "time": "2:14",
                                                    "down": "3",
                                                    "distance": "9",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min43",
                                                    "endYardLine": "Min43",
                                                    "driveId": 8,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Teddy Bridgewater incomplete pass to the left intended for Jerick McKinnon.",
                                                    "playType": {
                                                        "playTypeId": 2,
                                                        "name": "Incomplete Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 563824,
                                                                "firstName": "Jerick",
                                                                "lastName": "McKinnon",
                                                                "uniform": "31"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 0
                                                }, {
                                                    "playId": 84.0,
                                                    "period": 2,
                                                    "time": "2:11",
                                                    "down": "4",
                                                    "distance": "9",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min43",
                                                    "endYardLine": "NO20",
                                                    "driveId": 8,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": true,
                                                    "kickType": {
                                                        "kickTypeId": 10,
                                                        "name": "Fair Catch"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Jeff Locke punts for 37 yards to NO20. No return.",
                                                    "playType": {
                                                        "playTypeId": 7,
                                                        "name": "Punt"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 461708,
                                                                "firstName": "Jeff",
                                                                "lastName": "Locke",
                                                                "uniform": "18"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 6,
                                                            "playerInvolvedType": "snapper",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 251130,
                                                                "firstName": "Cullen",
                                                                "lastName": "Loeffler",
                                                                "uniform": "46"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "M",
                                                    "yards": 0
                                                }, {
                                                    "playId": 86.0,
                                                    "period": 2,
                                                    "time": "2:05",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO20",
                                                    "endYardLine": "NO26",
                                                    "driveId": 9,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees pass to the right to Jimmy Graham for 6 yards to the NO26. Tackled by Chad Greenway.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 157101,
                                                                "firstName": "Chad",
                                                                "lastName": "Greenway",
                                                                "uniform": "52"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 295918,
                                                                "firstName": "Jimmy",
                                                                "lastName": "Graham",
                                                                "uniform": "80"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 6
                                                }, {
                                                    "playId": 87.0,
                                                    "period": 2,
                                                    "time": "1:59",
                                                    "down": "2",
                                                    "distance": "4",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO26",
                                                    "endYardLine": "NO26",
                                                    "driveId": 9,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Two Minute Warning.",
                                                    "playType": {
                                                        "playTypeId": 13,
                                                        "name": "Two Minute Warning"
                                                    },
                                                    "playersInvolved": [],
                                                    "direction": null,
                                                    "yards": 0
                                                }, {
                                                    "playId": 88.0,
                                                    "period": 2,
                                                    "time": "1:59",
                                                    "down": "2",
                                                    "distance": "4",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO26",
                                                    "endYardLine": "NO35",
                                                    "driveId": 9,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees pass to the right to Jimmy Graham for 9 yards to the NO35. Tackled by Brian Robison.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 215104,
                                                                "firstName": "Brian",
                                                                "lastName": "Robison",
                                                                "uniform": "96"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 295918,
                                                                "firstName": "Jimmy",
                                                                "lastName": "Graham",
                                                                "uniform": "80"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 9
                                                }, {
                                                    "playId": 89.0,
                                                    "period": 2,
                                                    "time": "1:39",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO35",
                                                    "endYardLine": "NO50",
                                                    "driveId": 9,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees pass to the right to Kenny Stills for 15 yards to the NO50.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 542896,
                                                                "firstName": "Kenny",
                                                                "lastName": "Stills",
                                                                "uniform": "84"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 15
                                                }, {
                                                    "playId": 90.0,
                                                    "period": 2,
                                                    "time": "1:36",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO50",
                                                    "endYardLine": "NO50",
                                                    "driveId": 9,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees incomplete pass to the right intended for Jimmy Graham defensed by Harrison Smith.",
                                                    "playType": {
                                                        "playTypeId": 2,
                                                        "name": "Incomplete Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 4,
                                                            "playerInvolvedType": "pass defender",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 400486,
                                                                "firstName": "Harrison",
                                                                "lastName": "Smith",
                                                                "uniform": "22"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 295918,
                                                                "firstName": "Jimmy",
                                                                "lastName": "Graham",
                                                                "uniform": "80"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 0
                                                }, {
                                                    "playId": 91.0,
                                                    "period": 2,
                                                    "time": "1:31",
                                                    "down": "2",
                                                    "distance": "10",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO50",
                                                    "endYardLine": "NO45",
                                                    "driveId": 9,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees sacked at NO45 for a loss of 5 yards by Anthony Barr.",
                                                    "playType": {
                                                        "playTypeId": 3,
                                                        "name": "Sack"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 553112,
                                                                "firstName": "Anthony",
                                                                "lastName": "Barr",
                                                                "uniform": "55"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": -5
                                                }, {
                                                    "playId": 92.0,
                                                    "period": 2,
                                                    "time": "0:56",
                                                    "down": "3",
                                                    "distance": "15",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO45",
                                                    "endYardLine": "NO45",
                                                    "driveId": 9,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees incomplete pass to the right intended for Brandin Cooks defensed by Harrison Smith.",
                                                    "playType": {
                                                        "playTypeId": 2,
                                                        "name": "Incomplete Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 4,
                                                            "playerInvolvedType": "pass defender",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 400486,
                                                                "firstName": "Harrison",
                                                                "lastName": "Smith",
                                                                "uniform": "22"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 607864,
                                                                "firstName": "Brandin",
                                                                "lastName": "Cooks",
                                                                "uniform": "10"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 0
                                                }, {
                                                    "playId": 93.0,
                                                    "period": 2,
                                                    "time": "0:49",
                                                    "down": "4",
                                                    "distance": "15",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO45",
                                                    "endYardLine": "Min4",
                                                    "driveId": 9,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": true,
                                                    "kickType": {
                                                        "kickTypeId": 1,
                                                        "name": "Short"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Thomas Morstead punts for 46 yards to Min9. Marcus Sherels return for a loss of 5 yards to Min4. Tackled by Josh Hill.",
                                                    "playType": {
                                                        "playTypeId": 7,
                                                        "name": "Punt"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 286840,
                                                                "firstName": "Thomas",
                                                                "lastName": "Morstead",
                                                                "uniform": "6"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 2,
                                                            "player": {
                                                                "playerId": 334435,
                                                                "firstName": "Marcus",
                                                                "lastName": "Sherels",
                                                                "uniform": "35"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 469509,
                                                                "firstName": "Josh",
                                                                "lastName": "Hill",
                                                                "uniform": "89"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 6,
                                                            "playerInvolvedType": "snapper",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 332584,
                                                                "firstName": "Justin",
                                                                "lastName": "Drescher",
                                                                "uniform": "47"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": -5
                                                }, {
                                                    "playId": 95.0,
                                                    "period": 2,
                                                    "time": "0:37",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min4",
                                                    "endYardLine": "Min8",
                                                    "driveId": 10,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 6,
                                                        "name": "Off Left Guard"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Matt Asiata rush to the left for 4 yards to the Min8. Tackled by Cameron Jordan.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 383504,
                                                                "firstName": "Matt",
                                                                "lastName": "Asiata",
                                                                "uniform": "44"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 401762,
                                                                "firstName": "Cameron",
                                                                "lastName": "Jordan",
                                                                "uniform": "94"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 4
                                                }, {
                                                    "playId": 96.0,
                                                    "period": 2,
                                                    "time": "0:32",
                                                    "down": "2",
                                                    "distance": "6",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min8",
                                                    "endYardLine": "Min8",
                                                    "driveId": 10,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Saints timeout.",
                                                    "playType": {
                                                        "playTypeId": 58,
                                                        "name": "Defensive Time Out"
                                                    },
                                                    "playersInvolved": [],
                                                    "direction": null,
                                                    "yards": 0
                                                }, {
                                                    "playId": 97.0,
                                                    "period": 2,
                                                    "time": "0:32",
                                                    "down": "2",
                                                    "distance": "6",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min8",
                                                    "endYardLine": "Min6",
                                                    "driveId": 10,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 21,
                                                        "name": "Kneel to Runout Clock"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Teddy Bridgewater rush to the middle for a loss of 2 yards to the Min6.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "M",
                                                    "yards": -2
                                                }, {
                                                    "playId": 98.0,
                                                    "period": 2,
                                                    "time": "0:30",
                                                    "down": "3",
                                                    "distance": "8",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min6",
                                                    "endYardLine": "Min6",
                                                    "driveId": 10,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Saints timeout.",
                                                    "playType": {
                                                        "playTypeId": 58,
                                                        "name": "Defensive Time Out"
                                                    },
                                                    "playersInvolved": [],
                                                    "direction": null,
                                                    "yards": 0
                                                }, {
                                                    "playId": 99.0,
                                                    "period": 2,
                                                    "time": "0:28",
                                                    "down": "3",
                                                    "distance": "8",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min6",
                                                    "endYardLine": "Min5",
                                                    "driveId": 10,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 21,
                                                        "name": "Kneel to Runout Clock"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Teddy Bridgewater rush to the middle for a loss of 1 yard to the Min5.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "M",
                                                    "yards": -1
                                                }, {
                                                    "playId": 101.0,
                                                    "period": 3,
                                                    "time": "15:00",
                                                    "down": null,
                                                    "distance": null,
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO35",
                                                    "endYardLine": "Min35",
                                                    "driveId": 11,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": true,
                                                    "kickType": {
                                                        "kickTypeId": 1,
                                                        "name": "Short"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Thomas Morstead kicks off to the Min-8. Cordarrelle Patterson return for 43 yards to Min35. Tackled by Corey White.",
                                                    "playType": {
                                                        "playTypeId": 5,
                                                        "name": "Kickoff"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 286840,
                                                                "firstName": "Thomas",
                                                                "lastName": "Morstead",
                                                                "uniform": "6"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 2,
                                                            "player": {
                                                                "playerId": 690153,
                                                                "firstName": "Cordarrelle",
                                                                "lastName": "Patterson",
                                                                "uniform": "84"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 459492,
                                                                "firstName": "Corey",
                                                                "lastName": "White",
                                                                "uniform": "24"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 43
                                                }, {
                                                    "playId": 103.0,
                                                    "period": 3,
                                                    "time": "14:52",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min35",
                                                    "endYardLine": "Min39",
                                                    "driveId": 11,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 6,
                                                        "name": "Off Left Guard"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Matt Asiata rush to the left for 4 yards to the Min39. Tackled by Akiem Hicks.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 383504,
                                                                "firstName": "Matt",
                                                                "lastName": "Asiata",
                                                                "uniform": "44"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 498969,
                                                                "firstName": "Akiem",
                                                                "lastName": "Hicks",
                                                                "uniform": "76"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 4
                                                }, {
                                                    "playId": 104.0,
                                                    "period": 3,
                                                    "time": "14:11",
                                                    "down": "2",
                                                    "distance": "6",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min39",
                                                    "endYardLine": "Min49",
                                                    "driveId": 11,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Teddy Bridgewater pass to the right to Kyle Rudolph for 10 yards to the Min49. Tackled by Jairus Byrd.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 296058,
                                                                "firstName": "Jairus",
                                                                "lastName": "Byrd",
                                                                "uniform": "31"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 469472,
                                                                "firstName": "Kyle",
                                                                "lastName": "Rudolph",
                                                                "uniform": "82"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 10
                                                }, {
                                                    "playId": 105.0,
                                                    "period": 3,
                                                    "time": "13:44",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min49",
                                                    "endYardLine": "Min50",
                                                    "driveId": 11,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 6,
                                                        "name": "Off Left Guard"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Matt Asiata rush to the left for 1 yard to the Min50. Tackled by Curtis Lofton.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 383504,
                                                                "firstName": "Matt",
                                                                "lastName": "Asiata",
                                                                "uniform": "44"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 300754,
                                                                "firstName": "Curtis",
                                                                "lastName": "Lofton",
                                                                "uniform": "50"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 1
                                                }, {
                                                    "playId": 106.0,
                                                    "period": 3,
                                                    "time": "13:02",
                                                    "down": "2",
                                                    "distance": "9",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min50",
                                                    "endYardLine": "Min50",
                                                    "driveId": 11,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Teddy Bridgewater incomplete pass to the left intended for Matt Asiata.",
                                                    "playType": {
                                                        "playTypeId": 2,
                                                        "name": "Incomplete Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 383504,
                                                                "firstName": "Matt",
                                                                "lastName": "Asiata",
                                                                "uniform": "44"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 0
                                                }, {
                                                    "playId": 107.0,
                                                    "period": 3,
                                                    "time": "12:59",
                                                    "down": "3",
                                                    "distance": "9",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min50",
                                                    "endYardLine": "NO41",
                                                    "driveId": 11,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 4,
                                                        "name": "Off Left End"
                                                    },
                                                    "isReview": false,
                                                    "penaltyType": {
                                                        "penaltyTypeId": 12,
                                                        "name": "Holding"
                                                    },
                                                    "playText": "Teddy Bridgewater rush to the left for 4 yards to the NO46. Tackled by Tyrunn Walker. Penalty: Holding on Saints (Keenan Lewis) 5 yards.",
                                                    "playType": {
                                                        "playTypeId": 11,
                                                        "name": "Penalty"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 2,
                                                            "player": {
                                                                "playerId": 245752,
                                                                "firstName": "Keenan",
                                                                "lastName": "Lewis",
                                                                "uniform": "28"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 554384,
                                                                "firstName": "Tyrunn",
                                                                "lastName": "Walker",
                                                                "uniform": "75"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 9
                                                }, {
                                                    "playId": 109.0,
                                                    "period": 3,
                                                    "time": "12:26",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO41",
                                                    "endYardLine": "NO27",
                                                    "driveId": 11,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Teddy Bridgewater pass to the right to Cordarrelle Patterson for 14 yards to the NO27. Tackled by Keenan Lewis.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 245752,
                                                                "firstName": "Keenan",
                                                                "lastName": "Lewis",
                                                                "uniform": "28"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 690153,
                                                                "firstName": "Cordarrelle",
                                                                "lastName": "Patterson",
                                                                "uniform": "84"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 14
                                                }, {
                                                    "playId": 110.0,
                                                    "period": 3,
                                                    "time": "11:55",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO27",
                                                    "endYardLine": "NO29",
                                                    "driveId": 11,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 8,
                                                        "name": "Off Right Guard"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Jerick McKinnon rush to the right for a loss of 2 yards to the NO29. Tackled by Junior Galette.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 563824,
                                                                "firstName": "Jerick",
                                                                "lastName": "McKinnon",
                                                                "uniform": "31"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 334303,
                                                                "firstName": "Junior",
                                                                "lastName": "Galette",
                                                                "uniform": "93"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": -2
                                                }, {
                                                    "playId": 111.0,
                                                    "period": 3,
                                                    "time": "11:14",
                                                    "down": "2",
                                                    "distance": "12",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO29",
                                                    "endYardLine": "NO22",
                                                    "driveId": 11,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Teddy Bridgewater pass to the left to Greg Jennings for 7 yards to the NO22. Tackled by Rafael Bush.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 303006,
                                                                "firstName": "Rafael",
                                                                "lastName": "Bush",
                                                                "uniform": "25"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 156869,
                                                                "firstName": "Greg",
                                                                "lastName": "Jennings",
                                                                "uniform": "15"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 7
                                                }, {
                                                    "playId": 112.0,
                                                    "period": 3,
                                                    "time": "10:29",
                                                    "down": "3",
                                                    "distance": "5",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 6,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO22",
                                                    "endYardLine": "NO22",
                                                    "driveId": 11,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Teddy Bridgewater incomplete pass to the middle intended for Matt Asiata.",
                                                    "playType": {
                                                        "playTypeId": 2,
                                                        "name": "Incomplete Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 383504,
                                                                "firstName": "Matt",
                                                                "lastName": "Asiata",
                                                                "uniform": "44"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "M",
                                                    "yards": 0
                                                }, {
                                                    "playId": 113.0,
                                                    "period": 3,
                                                    "time": "10:24",
                                                    "down": "4",
                                                    "distance": "5",
                                                    "awayScoreBefore": 6,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO22",
                                                    "endYardLine": "NO0",
                                                    "driveId": 11,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Blair Walsh 40 yard field goal attempt is GOOD. Holder: Jeff Locke.",
                                                    "playType": {
                                                        "playTypeId": 17,
                                                        "name": "Made Field Goal"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 458095,
                                                                "firstName": "Blair",
                                                                "lastName": "Walsh",
                                                                "uniform": "3"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 7,
                                                            "playerInvolvedType": "holder",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 461708,
                                                                "firstName": "Jeff",
                                                                "lastName": "Locke",
                                                                "uniform": "18"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "M",
                                                    "yards": 40
                                                }, {
                                                    "playId": 114.0,
                                                    "period": 3,
                                                    "time": "10:20",
                                                    "down": null,
                                                    "distance": null,
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min35",
                                                    "endYardLine": "NO0",
                                                    "driveId": 12,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": true,
                                                    "kickType": {
                                                        "kickTypeId": 9,
                                                        "name": "Touchback"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Blair Walsh kicks off to the endzone. Touchback.",
                                                    "playType": {
                                                        "playTypeId": 5,
                                                        "name": "Kickoff"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 458095,
                                                                "firstName": "Blair",
                                                                "lastName": "Walsh",
                                                                "uniform": "3"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 65
                                                }, {
                                                    "playId": 116.0,
                                                    "period": 3,
                                                    "time": "10:20",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO20",
                                                    "endYardLine": "NO20",
                                                    "driveId": 12,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees pass to the left to Brandin Cooks for no gain to the NO20. Tackled by Robert Blanton.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 469187,
                                                                "firstName": "Robert",
                                                                "lastName": "Blanton",
                                                                "uniform": "36"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 607864,
                                                                "firstName": "Brandin",
                                                                "lastName": "Cooks",
                                                                "uniform": "10"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 0
                                                }, {
                                                    "playId": 117.0,
                                                    "period": 3,
                                                    "time": "9:46",
                                                    "down": "2",
                                                    "distance": "10",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO20",
                                                    "endYardLine": "NO14",
                                                    "driveId": 12,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 9,
                                                        "name": "Off Right Tackle"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Khiry Robinson rush to the right for a loss of 6 yards to the NO14. Tackled by Linval Joseph.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 734347,
                                                                "firstName": "Khiry",
                                                                "lastName": "Robinson",
                                                                "uniform": "29"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 402468,
                                                                "firstName": "Linval",
                                                                "lastName": "Joseph",
                                                                "uniform": "98"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": -6
                                                }, {
                                                    "playId": 118.0,
                                                    "period": 3,
                                                    "time": "9:07",
                                                    "down": "3",
                                                    "distance": "16",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO14",
                                                    "endYardLine": "NO32",
                                                    "driveId": 12,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees pass to the right to Brandin Cooks for 18 yards to the NO32. Tackled by Josh Robinson.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 495661,
                                                                "firstName": "Josh",
                                                                "lastName": "Robinson",
                                                                "uniform": "21"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 607864,
                                                                "firstName": "Brandin",
                                                                "lastName": "Cooks",
                                                                "uniform": "10"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 18
                                                }, {
                                                    "playId": 119.0,
                                                    "period": 3,
                                                    "time": "8:34",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO32",
                                                    "endYardLine": "NO39",
                                                    "driveId": 12,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees pass to the right to Jimmy Graham for 7 yards to the NO39. Tackled by Robert Blanton.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 469187,
                                                                "firstName": "Robert",
                                                                "lastName": "Blanton",
                                                                "uniform": "36"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 295918,
                                                                "firstName": "Jimmy",
                                                                "lastName": "Graham",
                                                                "uniform": "80"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 7
                                                }, {
                                                    "playId": 120.0,
                                                    "period": 3,
                                                    "time": "7:58",
                                                    "down": "2",
                                                    "distance": "3",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO39",
                                                    "endYardLine": "NO41",
                                                    "driveId": 12,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 4,
                                                        "name": "Off Left End"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Pierre Thomas rush to the left for 2 yards to the NO41. Tackled by Anthony Barr and Robert Blanton.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 215734,
                                                                "firstName": "Pierre",
                                                                "lastName": "Thomas",
                                                                "uniform": "23"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 553112,
                                                                "firstName": "Anthony",
                                                                "lastName": "Barr",
                                                                "uniform": "55"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 2,
                                                            "player": {
                                                                "playerId": 469187,
                                                                "firstName": "Robert",
                                                                "lastName": "Blanton",
                                                                "uniform": "36"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 2
                                                }, {
                                                    "playId": 121.0,
                                                    "period": 3,
                                                    "time": "7:45",
                                                    "down": "3",
                                                    "distance": "1",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO41",
                                                    "endYardLine": "NO43",
                                                    "driveId": 12,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 6,
                                                        "name": "Off Left Guard"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Austin Johnson rush to the left for 2 yards to the NO43. Tackled by Robert Blanton and Xavier Rhodes.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 449465,
                                                                "firstName": "Austin",
                                                                "lastName": "Johnson",
                                                                "uniform": "35"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 469187,
                                                                "firstName": "Robert",
                                                                "lastName": "Blanton",
                                                                "uniform": "36"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 2,
                                                            "player": {
                                                                "playerId": 509368,
                                                                "firstName": "Xavier",
                                                                "lastName": "Rhodes",
                                                                "uniform": "29"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 2
                                                }, {
                                                    "playId": 122.0,
                                                    "period": 3,
                                                    "time": "7:06",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO43",
                                                    "endYardLine": "NO41",
                                                    "driveId": 12,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 6,
                                                        "name": "Off Left Guard"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Pierre Thomas rush to the left for a loss of 2 yards to the NO41. Tackled by Gerald Hodges.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 215734,
                                                                "firstName": "Pierre",
                                                                "lastName": "Thomas",
                                                                "uniform": "23"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 493471,
                                                                "firstName": "Gerald",
                                                                "lastName": "Hodges",
                                                                "uniform": "50"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": -2
                                                }, {
                                                    "playId": 123.0,
                                                    "period": 3,
                                                    "time": "6:32",
                                                    "down": "2",
                                                    "distance": "12",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO41",
                                                    "endYardLine": "NO44",
                                                    "driveId": 12,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 5,
                                                        "name": "Off Left Tackle"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Pierre Thomas rush to the left for 3 yards to the NO44. Tackled by Gerald Hodges and Xavier Rhodes.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 215734,
                                                                "firstName": "Pierre",
                                                                "lastName": "Thomas",
                                                                "uniform": "23"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 493471,
                                                                "firstName": "Gerald",
                                                                "lastName": "Hodges",
                                                                "uniform": "50"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 2,
                                                            "player": {
                                                                "playerId": 509368,
                                                                "firstName": "Xavier",
                                                                "lastName": "Rhodes",
                                                                "uniform": "29"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 3
                                                }, {
                                                    "playId": 124.0,
                                                    "period": 3,
                                                    "time": "5:47",
                                                    "down": "3",
                                                    "distance": "9",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO44",
                                                    "endYardLine": "NO24",
                                                    "driveId": 12,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": true,
                                                    "rushType": {
                                                        "rushTypeId": 19,
                                                        "name": "Aborted/Dropped Snap"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Drew Brees rush to the middle for no gain to the NO44. FUMBLE, recovered by NO (Drew Brees).",
                                                    "playType": {
                                                        "playTypeId": 14,
                                                        "name": "Fumble"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "M",
                                                    "yards": -18
                                                }, {
                                                    "playId": 127.0,
                                                    "period": 3,
                                                    "time": "5:11",
                                                    "down": "4",
                                                    "distance": "27",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO26",
                                                    "endYardLine": "Min10",
                                                    "driveId": 12,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": true,
                                                    "kickType": {
                                                        "kickTypeId": 1,
                                                        "name": "Short"
                                                    },
                                                    "isReview": false,
                                                    "penaltyType": {
                                                        "penaltyTypeId": 14,
                                                        "name": "Illegal Block"
                                                    },
                                                    "playText": "Thomas Morstead punts for 54 yards to Min20. Marcus Sherels - no return. Tackled by Thomas Morstead. Penalty: Illegal Block on Vikings (Josh Robinson) -10 yards.",
                                                    "playType": {
                                                        "playTypeId": 10,
                                                        "name": "Penalty"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 286840,
                                                                "firstName": "Thomas",
                                                                "lastName": "Morstead",
                                                                "uniform": "6"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 2,
                                                            "player": {
                                                                "playerId": 334435,
                                                                "firstName": "Marcus",
                                                                "lastName": "Sherels",
                                                                "uniform": "35"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 3,
                                                            "player": {
                                                                "playerId": 495661,
                                                                "firstName": "Josh",
                                                                "lastName": "Robinson",
                                                                "uniform": "21"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 286840,
                                                                "firstName": "Thomas",
                                                                "lastName": "Morstead",
                                                                "uniform": "6"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 6,
                                                            "playerInvolvedType": "snapper",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 332584,
                                                                "firstName": "Justin",
                                                                "lastName": "Drescher",
                                                                "uniform": "47"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": -10
                                                }, {
                                                    "playId": 130.0,
                                                    "period": 3,
                                                    "time": "5:01",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min10",
                                                    "endYardLine": "Min11",
                                                    "driveId": 13,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 10,
                                                        "name": "Off Right End"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Matt Asiata rush to the right for 1 yard to the Min11. Tackled by Curtis Lofton.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 383504,
                                                                "firstName": "Matt",
                                                                "lastName": "Asiata",
                                                                "uniform": "44"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 300754,
                                                                "firstName": "Curtis",
                                                                "lastName": "Lofton",
                                                                "uniform": "50"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 1
                                                }, {
                                                    "playId": 131.0,
                                                    "period": 3,
                                                    "time": "4:24",
                                                    "down": "2",
                                                    "distance": "9",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min11",
                                                    "endYardLine": "Min41",
                                                    "driveId": 13,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Teddy Bridgewater pass to the left to Greg Jennings for 30 yards to the Min41. Tackled by Jairus Byrd.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 296058,
                                                                "firstName": "Jairus",
                                                                "lastName": "Byrd",
                                                                "uniform": "31"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 156869,
                                                                "firstName": "Greg",
                                                                "lastName": "Jennings",
                                                                "uniform": "15"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 30
                                                }, {
                                                    "playId": 132.0,
                                                    "period": 3,
                                                    "time": "3:53",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min41",
                                                    "endYardLine": "Min41",
                                                    "driveId": 13,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Teddy Bridgewater incomplete pass to the right intended for Greg Jennings.",
                                                    "playType": {
                                                        "playTypeId": 2,
                                                        "name": "Incomplete Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 156869,
                                                                "firstName": "Greg",
                                                                "lastName": "Jennings",
                                                                "uniform": "15"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 0
                                                }, {
                                                    "playId": 133.0,
                                                    "period": 3,
                                                    "time": "3:46",
                                                    "down": "2",
                                                    "distance": "10",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min41",
                                                    "endYardLine": "Min46",
                                                    "driveId": 13,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 9,
                                                        "name": "Off Right Tackle"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Matt Asiata rush to the right for 5 yards to the Min46. Tackled by Kenny Vaccaro.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 383504,
                                                                "firstName": "Matt",
                                                                "lastName": "Asiata",
                                                                "uniform": "44"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 492781,
                                                                "firstName": "Kenny",
                                                                "lastName": "Vaccaro",
                                                                "uniform": "32"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 5
                                                }, {
                                                    "playId": 134.0,
                                                    "period": 3,
                                                    "time": "3:04",
                                                    "down": "3",
                                                    "distance": "5",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min46",
                                                    "endYardLine": "Min46",
                                                    "driveId": 13,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Teddy Bridgewater incomplete pass to the right intended for Greg Jennings defensed by Keenan Lewis.",
                                                    "playType": {
                                                        "playTypeId": 2,
                                                        "name": "Incomplete Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 4,
                                                            "playerInvolvedType": "pass defender",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 245752,
                                                                "firstName": "Keenan",
                                                                "lastName": "Lewis",
                                                                "uniform": "28"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 156869,
                                                                "firstName": "Greg",
                                                                "lastName": "Jennings",
                                                                "uniform": "15"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 0
                                                }, {
                                                    "playId": 135.0,
                                                    "period": 3,
                                                    "time": "2:57",
                                                    "down": "4",
                                                    "distance": "5",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min46",
                                                    "endYardLine": "NO10",
                                                    "driveId": 13,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": true,
                                                    "kickType": {
                                                        "kickTypeId": 10,
                                                        "name": "Fair Catch"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Jeff Locke punts for 44 yards to NO10. No return.",
                                                    "playType": {
                                                        "playTypeId": 7,
                                                        "name": "Punt"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 461708,
                                                                "firstName": "Jeff",
                                                                "lastName": "Locke",
                                                                "uniform": "18"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 6,
                                                            "playerInvolvedType": "snapper",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 251130,
                                                                "firstName": "Cullen",
                                                                "lastName": "Loeffler",
                                                                "uniform": "46"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 0
                                                }, {
                                                    "playId": 137.0,
                                                    "period": 3,
                                                    "time": "2:50",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO10",
                                                    "endYardLine": "NO24",
                                                    "driveId": 14,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees pass to the left to Josh Hill for 14 yards to the NO24. Tackled by Chad Greenway and Robert Blanton.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 157101,
                                                                "firstName": "Chad",
                                                                "lastName": "Greenway",
                                                                "uniform": "52"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 2,
                                                            "player": {
                                                                "playerId": 469187,
                                                                "firstName": "Robert",
                                                                "lastName": "Blanton",
                                                                "uniform": "36"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 469509,
                                                                "firstName": "Josh",
                                                                "lastName": "Hill",
                                                                "uniform": "89"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 14
                                                }, {
                                                    "playId": 138.0,
                                                    "period": 3,
                                                    "time": "2:13",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO24",
                                                    "endYardLine": "NO28",
                                                    "driveId": 14,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 8,
                                                        "name": "Off Right Guard"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Khiry Robinson rush to the right for 4 yards to the NO28. Tackled by Linval Joseph.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 734347,
                                                                "firstName": "Khiry",
                                                                "lastName": "Robinson",
                                                                "uniform": "29"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 402468,
                                                                "firstName": "Linval",
                                                                "lastName": "Joseph",
                                                                "uniform": "98"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 4
                                                }, {
                                                    "playId": 139.0,
                                                    "period": 3,
                                                    "time": "1:40",
                                                    "down": "2",
                                                    "distance": "6",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO28",
                                                    "endYardLine": "NO35",
                                                    "driveId": 14,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees pass to the right to Marques Colston for 7 yards to the NO35. Tackled by Josh Robinson and Anthony Barr.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 495661,
                                                                "firstName": "Josh",
                                                                "lastName": "Robinson",
                                                                "uniform": "21"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 2,
                                                            "player": {
                                                                "playerId": 553112,
                                                                "firstName": "Anthony",
                                                                "lastName": "Barr",
                                                                "uniform": "55"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 162990,
                                                                "firstName": "Marques",
                                                                "lastName": "Colston",
                                                                "uniform": "12"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 7
                                                }, {
                                                    "playId": 140.0,
                                                    "period": 3,
                                                    "time": "1:03",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO35",
                                                    "endYardLine": "NO25",
                                                    "driveId": 14,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "penaltyType": {
                                                        "penaltyTypeId": 12,
                                                        "name": "Holding"
                                                    },
                                                    "playText": "Penalty: Holding on Saints (Terron Armstead) -10 yards.",
                                                    "playType": {
                                                        "playTypeId": 10,
                                                        "name": "Penalty"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 561826,
                                                                "firstName": "Terron",
                                                                "lastName": "Armstead",
                                                                "uniform": "72"
                                                            }
                                                        }
                                                    ],
                                                    "direction": null,
                                                    "yards": -10
                                                }, {
                                                    "playId": 142.0,
                                                    "period": 3,
                                                    "time": "0:58",
                                                    "down": "1",
                                                    "distance": "20",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO25",
                                                    "endYardLine": "NO32",
                                                    "driveId": 14,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees pass to the right to Pierre Thomas for 7 yards to the NO32. Tackled by Everson Griffen.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 399305,
                                                                "firstName": "Everson",
                                                                "lastName": "Griffen",
                                                                "uniform": "97"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 215734,
                                                                "firstName": "Pierre",
                                                                "lastName": "Thomas",
                                                                "uniform": "23"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 7
                                                }, {
                                                    "playId": 143.0,
                                                    "period": 3,
                                                    "time": "0:20",
                                                    "down": "2",
                                                    "distance": "13",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO32",
                                                    "endYardLine": "NO32",
                                                    "driveId": 14,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees incomplete pass to the left intended for Brandin Cooks.",
                                                    "playType": {
                                                        "playTypeId": 2,
                                                        "name": "Incomplete Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 607864,
                                                                "firstName": "Brandin",
                                                                "lastName": "Cooks",
                                                                "uniform": "10"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 0
                                                }, {
                                                    "playId": 144.0,
                                                    "period": 3,
                                                    "time": "0:14",
                                                    "down": "3",
                                                    "distance": "13",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO32",
                                                    "endYardLine": "NO47",
                                                    "driveId": 14,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "penaltyType": {
                                                        "penaltyTypeId": 52,
                                                        "name": "Unnecessary Roughness"
                                                    },
                                                    "playText": "Penalty: Unnecessary Roughness on Vikings (Captain Munnerlyn) 15 yards.",
                                                    "playType": {
                                                        "playTypeId": 11,
                                                        "name": "Penalty"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 332869,
                                                                "firstName": "Captain",
                                                                "lastName": "Munnerlyn",
                                                                "uniform": "24"
                                                            }
                                                        }
                                                    ],
                                                    "direction": null,
                                                    "yards": 15
                                                }, {
                                                    "playId": 147.0,
                                                    "period": 4,
                                                    "time": "15:00",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO47",
                                                    "endYardLine": "NO50",
                                                    "driveId": 14,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 9,
                                                        "name": "Off Right Tackle"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Khiry Robinson rush to the right for 3 yards to the NO50. Tackled by Sharrif Floyd.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 734347,
                                                                "firstName": "Khiry",
                                                                "lastName": "Robinson",
                                                                "uniform": "29"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 557186,
                                                                "firstName": "Sharrif",
                                                                "lastName": "Floyd",
                                                                "uniform": "73"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 3
                                                }, {
                                                    "playId": 148.0,
                                                    "period": 4,
                                                    "time": "14:25",
                                                    "down": "2",
                                                    "distance": "7",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO50",
                                                    "endYardLine": "NO50",
                                                    "driveId": 14,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees incomplete pass to the left intended for Kenny Stills defensed by Anthony Barr.",
                                                    "playType": {
                                                        "playTypeId": 2,
                                                        "name": "Incomplete Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 4,
                                                            "playerInvolvedType": "pass defender",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 553112,
                                                                "firstName": "Anthony",
                                                                "lastName": "Barr",
                                                                "uniform": "55"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 542896,
                                                                "firstName": "Kenny",
                                                                "lastName": "Stills",
                                                                "uniform": "84"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 0
                                                }, {
                                                    "playId": 149.0,
                                                    "period": 4,
                                                    "time": "14:17",
                                                    "down": "3",
                                                    "distance": "7",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "NO50",
                                                    "endYardLine": "Min40",
                                                    "driveId": 14,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees pass to the right to Jimmy Graham for 10 yards to the Min40. Tackled by Harrison Smith and Brian Robison.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 400486,
                                                                "firstName": "Harrison",
                                                                "lastName": "Smith",
                                                                "uniform": "22"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 3,
                                                            "playerInvolvedType": "assister",
                                                            "typeSequence": 2,
                                                            "player": {
                                                                "playerId": 215104,
                                                                "firstName": "Brian",
                                                                "lastName": "Robison",
                                                                "uniform": "96"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 295918,
                                                                "firstName": "Jimmy",
                                                                "lastName": "Graham",
                                                                "uniform": "80"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 10
                                                }, {
                                                    "playId": 150.0,
                                                    "period": 4,
                                                    "time": "13:42",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min40",
                                                    "endYardLine": "Min37",
                                                    "driveId": 14,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 9,
                                                        "name": "Off Right Tackle"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Khiry Robinson rush to the right for 3 yards to the Min37. Tackled by Everson Griffen.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 734347,
                                                                "firstName": "Khiry",
                                                                "lastName": "Robinson",
                                                                "uniform": "29"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 399305,
                                                                "firstName": "Everson",
                                                                "lastName": "Griffen",
                                                                "uniform": "97"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 3
                                                }, {
                                                    "playId": 151.0,
                                                    "period": 4,
                                                    "time": "13:04",
                                                    "down": "2",
                                                    "distance": "7",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min37",
                                                    "endYardLine": "Min37",
                                                    "driveId": 14,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees incomplete pass to the right intended for Jimmy Graham.",
                                                    "playType": {
                                                        "playTypeId": 2,
                                                        "name": "Incomplete Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 295918,
                                                                "firstName": "Jimmy",
                                                                "lastName": "Graham",
                                                                "uniform": "80"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 0
                                                }, {
                                                    "playId": 152.0,
                                                    "period": 4,
                                                    "time": "12:59",
                                                    "down": "3",
                                                    "distance": "7",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 13,
                                                    "yardLine": "Min37",
                                                    "endYardLine": "Min18",
                                                    "driveId": 14,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees pass to the left to Brandin Cooks for 19 yards to the Min18. Tackled by Josh Robinson.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 495661,
                                                                "firstName": "Josh",
                                                                "lastName": "Robinson",
                                                                "uniform": "21"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 607864,
                                                                "firstName": "Brandin",
                                                                "lastName": "Cooks",
                                                                "uniform": "10"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 19
                                                }, {
                                                    "playId": 153.0,
                                                    "period": 4,
                                                    "time": "12:28",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 13,
                                                    "homeScoreAfter": 19,
                                                    "yardLine": "Min18",
                                                    "endYardLine": "Min0",
                                                    "driveId": 14,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees pass to the right to Marques Colston for 18 yards for a TOUCHDOWN.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 162990,
                                                                "firstName": "Marques",
                                                                "lastName": "Colston",
                                                                "uniform": "12"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 18
                                                }, {
                                                    "playId": 154.0,
                                                    "period": 4,
                                                    "time": "12:22",
                                                    "down": null,
                                                    "distance": null,
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 19,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "Min2",
                                                    "endYardLine": "Min2",
                                                    "driveId": 14,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Shayne Graham extra point is GOOD.",
                                                    "playType": {
                                                        "playTypeId": 22,
                                                        "name": "Made Extra Point"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 75699,
                                                                "firstName": "Shayne",
                                                                "lastName": "Graham",
                                                                "uniform": "3"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 7,
                                                            "playerInvolvedType": "holder",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 246313,
                                                                "firstName": "Luke",
                                                                "lastName": "7"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "M",
                                                    "yards": 0
                                                }, {
                                                    "playId": 155.0,
                                                    "period": 4,
                                                    "time": "12:22",
                                                    "down": null,
                                                    "distance": null,
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "NO35",
                                                    "endYardLine": "Min18",
                                                    "driveId": 15,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": true,
                                                    "kickType": {
                                                        "kickTypeId": 1,
                                                        "name": "Short"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Thomas Morstead kicks off to the Min-8. Cordarrelle Patterson return for 26 yards to Min18. Tackled by Patrick Robinson.",
                                                    "playType": {
                                                        "playTypeId": 5,
                                                        "name": "Kickoff"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 286840,
                                                                "firstName": "Thomas",
                                                                "lastName": "Morstead",
                                                                "uniform": "6"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 2,
                                                            "player": {
                                                                "playerId": 690153,
                                                                "firstName": "Cordarrelle",
                                                                "lastName": "Patterson",
                                                                "uniform": "84"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 323505,
                                                                "firstName": "Patrick",
                                                                "lastName": "Robinson",
                                                                "uniform": "21"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 26
                                                }, {
                                                    "playId": 157.0,
                                                    "period": 4,
                                                    "time": "12:19",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "Min18",
                                                    "endYardLine": "Min9",
                                                    "driveId": 15,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 9,
                                                        "name": "Off Right Tackle"
                                                    },
                                                    "isReview": false,
                                                    "penaltyType": {
                                                        "penaltyTypeId": 12,
                                                        "name": "Holding"
                                                    },
                                                    "playText": "Penalty: Holding on Vikings (Vladimir Ducasse) -9 yards.",
                                                    "playType": {
                                                        "playTypeId": 10,
                                                        "name": "Penalty"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 335671,
                                                                "firstName": "Vladimir",
                                                                "lastName": "Ducasse",
                                                                "uniform": "62"
                                                            }
                                                        }
                                                    ],
                                                    "direction": null,
                                                    "yards": -9
                                                }, {
                                                    "playId": 159.0,
                                                    "period": 4,
                                                    "time": "11:58",
                                                    "down": "1",
                                                    "distance": "19",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "Min9",
                                                    "endYardLine": "Min26",
                                                    "driveId": 15,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Teddy Bridgewater pass to the right to Cordarrelle Patterson for 17 yards to the Min26. Tackled by Ramon Humber.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 316286,
                                                                "firstName": "Ramon",
                                                                "lastName": "Humber",
                                                                "uniform": "53"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 690153,
                                                                "firstName": "Cordarrelle",
                                                                "lastName": "Patterson",
                                                                "uniform": "84"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 17
                                                }, {
                                                    "playId": 160.0,
                                                    "period": 4,
                                                    "time": "11:24",
                                                    "down": "2",
                                                    "distance": "2",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "Min26",
                                                    "endYardLine": "Min27",
                                                    "driveId": 15,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 8,
                                                        "name": "Off Right Guard"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Matt Asiata rush to the right for 1 yard to the Min27. Tackled by Ramon Humber.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 383504,
                                                                "firstName": "Matt",
                                                                "lastName": "Asiata",
                                                                "uniform": "44"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 316286,
                                                                "firstName": "Ramon",
                                                                "lastName": "Humber",
                                                                "uniform": "53"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 1
                                                }, {
                                                    "playId": 161.0,
                                                    "period": 4,
                                                    "time": "10:41",
                                                    "down": "3",
                                                    "distance": "1",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "Min27",
                                                    "endYardLine": "Min27",
                                                    "driveId": 15,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Vikings timeout.",
                                                    "playType": {
                                                        "playTypeId": 57,
                                                        "name": "Offense Time Out"
                                                    },
                                                    "playersInvolved": [],
                                                    "direction": null,
                                                    "yards": 0
                                                }, {
                                                    "playId": 162.0,
                                                    "period": 4,
                                                    "time": "10:41",
                                                    "down": "3",
                                                    "distance": "1",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "Min27",
                                                    "endYardLine": "Min29",
                                                    "driveId": 15,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Teddy Bridgewater pass to the left to Cordarrelle Patterson for 2 yards to the Min29. Tackled by Keenan Lewis.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 245752,
                                                                "firstName": "Keenan",
                                                                "lastName": "Lewis",
                                                                "uniform": "28"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 690153,
                                                                "firstName": "Cordarrelle",
                                                                "lastName": "Patterson",
                                                                "uniform": "84"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 2
                                                }, {
                                                    "playId": 163.0,
                                                    "period": 4,
                                                    "time": "10:00",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "Min29",
                                                    "endYardLine": "Min22",
                                                    "driveId": 15,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Teddy Bridgewater sacked at Min22 for a loss of 7 yards by Cameron Jordan.",
                                                    "playType": {
                                                        "playTypeId": 3,
                                                        "name": "Sack"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 401762,
                                                                "firstName": "Cameron",
                                                                "lastName": "Jordan",
                                                                "uniform": "94"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "M",
                                                    "yards": -7
                                                }, {
                                                    "playId": 164.0,
                                                    "period": 4,
                                                    "time": "9:17",
                                                    "down": "2",
                                                    "distance": "17",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "Min22",
                                                    "endYardLine": "Min37",
                                                    "driveId": 15,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Teddy Bridgewater pass to the middle to Greg Jennings for 15 yards to the Min37. Tackled by Corey White.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 459492,
                                                                "firstName": "Corey",
                                                                "lastName": "White",
                                                                "uniform": "24"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 156869,
                                                                "firstName": "Greg",
                                                                "lastName": "Jennings",
                                                                "uniform": "15"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "M",
                                                    "yards": 15
                                                }, {
                                                    "playId": 165.0,
                                                    "period": 4,
                                                    "time": "8:37",
                                                    "down": "3",
                                                    "distance": "2",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "Min37",
                                                    "endYardLine": "Min44",
                                                    "driveId": 15,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Teddy Bridgewater pass to the right to Jerick McKinnon for 7 yards to the Min44. Tackled by Ramon Humber.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 316286,
                                                                "firstName": "Ramon",
                                                                "lastName": "Humber",
                                                                "uniform": "53"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 563824,
                                                                "firstName": "Jerick",
                                                                "lastName": "McKinnon",
                                                                "uniform": "31"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 7
                                                }, {
                                                    "playId": 166.0,
                                                    "period": 4,
                                                    "time": "7:53",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "Min44",
                                                    "endYardLine": "Min44",
                                                    "driveId": 15,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Teddy Bridgewater incomplete pass to the right intended for Rhett Ellison defensed by Kenny Vaccaro.",
                                                    "playType": {
                                                        "playTypeId": 2,
                                                        "name": "Incomplete Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 4,
                                                            "playerInvolvedType": "pass defender",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 492781,
                                                                "firstName": "Kenny",
                                                                "lastName": "Vaccaro",
                                                                "uniform": "32"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 399295,
                                                                "firstName": "Rhett",
                                                                "lastName": "Ellison",
                                                                "uniform": "85"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 0
                                                }, {
                                                    "playId": 167.0,
                                                    "period": 4,
                                                    "time": "7:48",
                                                    "down": "2",
                                                    "distance": "10",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "Min44",
                                                    "endYardLine": "Min39",
                                                    "driveId": 15,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "penaltyType": {
                                                        "penaltyTypeId": 11,
                                                        "name": "False Start"
                                                    },
                                                    "playText": "Penalty: False Start on Vikings (Vladimir Ducasse) -5 yards.",
                                                    "playType": {
                                                        "playTypeId": 10,
                                                        "name": "Penalty"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 335671,
                                                                "firstName": "Vladimir",
                                                                "lastName": "Ducasse",
                                                                "uniform": "62"
                                                            }
                                                        }
                                                    ],
                                                    "direction": null,
                                                    "yards": -5
                                                }, {
                                                    "playId": 168.0,
                                                    "period": 4,
                                                    "time": "7:48",
                                                    "down": "2",
                                                    "distance": "15",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "Min39",
                                                    "endYardLine": "Min41",
                                                    "driveId": 15,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Teddy Bridgewater pass to the left to Jerick McKinnon for 2 yards to the Min41. Tackled by Jairus Byrd.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 296058,
                                                                "firstName": "Jairus",
                                                                "lastName": "Byrd",
                                                                "uniform": "31"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 563824,
                                                                "firstName": "Jerick",
                                                                "lastName": "McKinnon",
                                                                "uniform": "31"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 2
                                                }, {
                                                    "playId": 169.0,
                                                    "period": 4,
                                                    "time": "7:16",
                                                    "down": "3",
                                                    "distance": "13",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "Min41",
                                                    "endYardLine": "Min41",
                                                    "driveId": 15,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 347
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Teddy Bridgewater incomplete pass to the left intended for Jerick McKinnon.",
                                                    "playType": {
                                                        "playTypeId": 2,
                                                        "name": "Incomplete Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 592195,
                                                                "firstName": "Teddy",
                                                                "lastName": "Bridgewater",
                                                                "uniform": "5"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 563824,
                                                                "firstName": "Jerick",
                                                                "lastName": "McKinnon",
                                                                "uniform": "31"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 0
                                                }, {
                                                    "playId": 170.0,
                                                    "period": 4,
                                                    "time": "7:05",
                                                    "down": "4",
                                                    "distance": "13",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "Min41",
                                                    "endYardLine": "NO16",
                                                    "driveId": 15,
                                                    "startPossession": {
                                                        "teamId": 347
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": true,
                                                    "kickType": {
                                                        "kickTypeId": 10,
                                                        "name": "Fair Catch"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Jeff Locke punts for 43 yards to NO16. No return.",
                                                    "playType": {
                                                        "playTypeId": 7,
                                                        "name": "Punt"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 461708,
                                                                "firstName": "Jeff",
                                                                "lastName": "Locke",
                                                                "uniform": "18"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 6,
                                                            "playerInvolvedType": "snapper",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 251130,
                                                                "firstName": "Cullen",
                                                                "lastName": "Loeffler",
                                                                "uniform": "46"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 0
                                                }, {
                                                    "playId": 172.0,
                                                    "period": 4,
                                                    "time": "6:58",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "NO16",
                                                    "endYardLine": "NO16",
                                                    "driveId": 16,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 9,
                                                        "name": "Off Right Tackle"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Khiry Robinson rush to the right for no gain to the NO16. Tackled by Gerald Hodges.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 734347,
                                                                "firstName": "Khiry",
                                                                "lastName": "Robinson",
                                                                "uniform": "29"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 493471,
                                                                "firstName": "Gerald",
                                                                "lastName": "Hodges",
                                                                "uniform": "50"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 0
                                                }, {
                                                    "playId": 173.0,
                                                    "period": 4,
                                                    "time": "6:15",
                                                    "down": "2",
                                                    "distance": "10",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "NO16",
                                                    "endYardLine": "NO16",
                                                    "driveId": 16,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees incomplete pass to the right intended for Marques Colston defensed by Harrison Smith.",
                                                    "playType": {
                                                        "playTypeId": 2,
                                                        "name": "Incomplete Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 4,
                                                            "playerInvolvedType": "pass defender",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 400486,
                                                                "firstName": "Harrison",
                                                                "lastName": "Smith",
                                                                "uniform": "22"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 162990,
                                                                "firstName": "Marques",
                                                                "lastName": "Colston",
                                                                "uniform": "12"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 0
                                                }, {
                                                    "playId": 174.0,
                                                    "period": 4,
                                                    "time": "6:09",
                                                    "down": "3",
                                                    "distance": "10",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "NO16",
                                                    "endYardLine": "NO27",
                                                    "driveId": 16,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees pass to the right to Kenny Stills for 11 yards to the NO27. Tackled by Jabari Price.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 546109,
                                                                "firstName": "Jabari",
                                                                "lastName": "Price",
                                                                "uniform": "39"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 542896,
                                                                "firstName": "Kenny",
                                                                "lastName": "Stills",
                                                                "uniform": "84"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 11
                                                }, {
                                                    "playId": 175.0,
                                                    "period": 4,
                                                    "time": "5:32",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "NO27",
                                                    "endYardLine": "NO33",
                                                    "driveId": 16,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 6,
                                                        "name": "Off Left Guard"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Khiry Robinson rush to the left for 6 yards to the NO33. Tackled by Captain Munnerlyn.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 734347,
                                                                "firstName": "Khiry",
                                                                "lastName": "Robinson",
                                                                "uniform": "29"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 332869,
                                                                "firstName": "Captain",
                                                                "lastName": "Munnerlyn",
                                                                "uniform": "24"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 6
                                                }, {
                                                    "playId": 176.0,
                                                    "period": 4,
                                                    "time": "4:48",
                                                    "down": "2",
                                                    "distance": "4",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "NO33",
                                                    "endYardLine": "NO38",
                                                    "driveId": 16,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 4,
                                                        "name": "Off Left End"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Khiry Robinson rush to the left for 5 yards to the NO38. Tackled by Jasper Brinkley.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 734347,
                                                                "firstName": "Khiry",
                                                                "lastName": "Robinson",
                                                                "uniform": "29"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 323621,
                                                                "firstName": "Jasper",
                                                                "lastName": "Brinkley",
                                                                "uniform": "54"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 5
                                                }, {
                                                    "playId": 177.0,
                                                    "period": 4,
                                                    "time": "4:11",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "NO38",
                                                    "endYardLine": "NO44",
                                                    "driveId": 16,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees pass to the right to Kenny Stills for 6 yards to the NO44. Tackled by Captain Munnerlyn.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 332869,
                                                                "firstName": "Captain",
                                                                "lastName": "Munnerlyn",
                                                                "uniform": "24"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 542896,
                                                                "firstName": "Kenny",
                                                                "lastName": "Stills",
                                                                "uniform": "84"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 6
                                                }, {
                                                    "playId": 178.0,
                                                    "period": 4,
                                                    "time": "4:07",
                                                    "down": "2",
                                                    "distance": "4",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "NO44",
                                                    "endYardLine": "Min46",
                                                    "driveId": 16,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 6,
                                                        "name": "Off Left Guard"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Khiry Robinson rush to the left for 10 yards to the Min46. Tackled by Harrison Smith.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 734347,
                                                                "firstName": "Khiry",
                                                                "lastName": "Robinson",
                                                                "uniform": "29"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 400486,
                                                                "firstName": "Harrison",
                                                                "lastName": "Smith",
                                                                "uniform": "22"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": 10
                                                }, {
                                                    "playId": 179.0,
                                                    "period": 4,
                                                    "time": "3:21",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "Min46",
                                                    "endYardLine": "Min45",
                                                    "driveId": 16,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 9,
                                                        "name": "Off Right Tackle"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Khiry Robinson rush to the right for 1 yard to the Min45. Tackled by Gerald Hodges.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 734347,
                                                                "firstName": "Khiry",
                                                                "lastName": "Robinson",
                                                                "uniform": "29"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 493471,
                                                                "firstName": "Gerald",
                                                                "lastName": "Hodges",
                                                                "uniform": "50"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 1
                                                }, {
                                                    "playId": 180.0,
                                                    "period": 4,
                                                    "time": "2:36",
                                                    "down": "2",
                                                    "distance": "9",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "Min45",
                                                    "endYardLine": "Min47",
                                                    "driveId": 16,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 4,
                                                        "name": "Off Left End"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Khiry Robinson rush to the left for a loss of 2 yards to the Min47. Tackled by Gerald Hodges.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 734347,
                                                                "firstName": "Khiry",
                                                                "lastName": "Robinson",
                                                                "uniform": "29"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 493471,
                                                                "firstName": "Gerald",
                                                                "lastName": "Hodges",
                                                                "uniform": "50"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "L",
                                                    "yards": -2
                                                }, {
                                                    "playId": 181.0,
                                                    "period": 4,
                                                    "time": "2:30",
                                                    "down": "3",
                                                    "distance": "11",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "Min47",
                                                    "endYardLine": "Min47",
                                                    "driveId": 16,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Vikings timeout.",
                                                    "playType": {
                                                        "playTypeId": 58,
                                                        "name": "Defensive Time Out"
                                                    },
                                                    "playersInvolved": [],
                                                    "direction": null,
                                                    "yards": 0
                                                }, {
                                                    "playId": 182.0,
                                                    "period": 4,
                                                    "time": "2:29",
                                                    "down": "3",
                                                    "distance": "11",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "Min47",
                                                    "endYardLine": "Min24",
                                                    "driveId": 16,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Drew Brees pass to the middle to Robert Meachem for 23 yards to the Min24. Tackled by Robert Blanton.",
                                                    "playType": {
                                                        "playTypeId": 1,
                                                        "name": "Pass"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 469187,
                                                                "firstName": "Robert",
                                                                "lastName": "Blanton",
                                                                "uniform": "36"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 5,
                                                            "playerInvolvedType": "target",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 225376,
                                                                "firstName": "Robert",
                                                                "lastName": "Meachem",
                                                                "uniform": "17"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "M",
                                                    "yards": 23
                                                }, {
                                                    "playId": 183.0,
                                                    "period": 4,
                                                    "time": "2:00",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "Min24",
                                                    "endYardLine": "Min24",
                                                    "driveId": 16,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Two Minute Warning.",
                                                    "playType": {
                                                        "playTypeId": 13,
                                                        "name": "Two Minute Warning"
                                                    },
                                                    "playersInvolved": [],
                                                    "direction": null,
                                                    "yards": 0
                                                }, {
                                                    "playId": 184.0,
                                                    "period": 4,
                                                    "time": "2:00",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "Min24",
                                                    "endYardLine": "Min22",
                                                    "driveId": 16,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 8,
                                                        "name": "Off Right Guard"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Khiry Robinson rush to the right for 2 yards to the Min22. Tackled by Linval Joseph.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 734347,
                                                                "firstName": "Khiry",
                                                                "lastName": "Robinson",
                                                                "uniform": "29"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 402468,
                                                                "firstName": "Linval",
                                                                "lastName": "Joseph",
                                                                "uniform": "98"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 2
                                                }, {
                                                    "playId": 185.0,
                                                    "period": 4,
                                                    "time": "1:55",
                                                    "down": "2",
                                                    "distance": "8",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "Min22",
                                                    "endYardLine": "Min22",
                                                    "driveId": 16,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Vikings timeout.",
                                                    "playType": {
                                                        "playTypeId": 58,
                                                        "name": "Defensive Time Out"
                                                    },
                                                    "playersInvolved": [],
                                                    "direction": null,
                                                    "yards": 0
                                                }, {
                                                    "playId": 186.0,
                                                    "period": 4,
                                                    "time": "1:55",
                                                    "down": "2",
                                                    "distance": "8",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "Min22",
                                                    "endYardLine": "Min17",
                                                    "driveId": 16,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 8,
                                                        "name": "Off Right Guard"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Khiry Robinson rush to the right for 5 yards to the Min17. Tackled by Gerald Hodges.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 734347,
                                                                "firstName": "Khiry",
                                                                "lastName": "Robinson",
                                                                "uniform": "29"
                                                            }
                                                        }, {
                                                            "playerInvolvedTypeId": 2,
                                                            "playerInvolvedType": "tackler",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 493471,
                                                                "firstName": "Gerald",
                                                                "lastName": "Hodges",
                                                                "uniform": "50"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "R",
                                                    "yards": 5
                                                }, {
                                                    "playId": 187.0,
                                                    "period": 4,
                                                    "time": "1:09",
                                                    "down": "3",
                                                    "distance": "3",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "Min17",
                                                    "endYardLine": "Min17",
                                                    "driveId": 16,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "playText": "Saints timeout.",
                                                    "playType": {
                                                        "playTypeId": 57,
                                                        "name": "Offense Time Out"
                                                    },
                                                    "playersInvolved": [],
                                                    "direction": null,
                                                    "yards": 0
                                                }, {
                                                    "playId": 188.0,
                                                    "period": 4,
                                                    "time": "1:09",
                                                    "down": "3",
                                                    "distance": "3",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "Min17",
                                                    "endYardLine": "Min12",
                                                    "driveId": 16,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "isReview": false,
                                                    "penaltyType": {
                                                        "penaltyTypeId": 38,
                                                        "name": "Offside"
                                                    },
                                                    "playText": "Penalty: Offside on Vikings (Everson Griffen) 5 yards.",
                                                    "playType": {
                                                        "playTypeId": 11,
                                                        "name": "Penalty"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 399305,
                                                                "firstName": "Everson",
                                                                "lastName": "Griffen",
                                                                "uniform": "97"
                                                            }
                                                        }
                                                    ],
                                                    "direction": null,
                                                    "yards": 5
                                                }, {
                                                    "playId": 189.0,
                                                    "period": 4,
                                                    "time": "1:09",
                                                    "down": "1",
                                                    "distance": "10",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "Min12",
                                                    "endYardLine": "Min13",
                                                    "driveId": 16,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 21,
                                                        "name": "Kneel to Runout Clock"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Drew Brees rush to the middle for a loss of 1 yard to the Min13.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "M",
                                                    "yards": -1
                                                }, {
                                                    "playId": 190.0,
                                                    "period": 4,
                                                    "time": "0:36",
                                                    "down": "2",
                                                    "distance": "11",
                                                    "awayScoreBefore": 9,
                                                    "awayScoreAfter": 9,
                                                    "homeScoreBefore": 20,
                                                    "homeScoreAfter": 20,
                                                    "yardLine": "Min13",
                                                    "endYardLine": "Min14",
                                                    "driveId": 16,
                                                    "startPossession": {
                                                        "teamId": 350
                                                    },
                                                    "endPossession": {
                                                        "teamId": 350
                                                    },
                                                    "isContinuation": false,
                                                    "rushType": {
                                                        "rushTypeId": 21,
                                                        "name": "Kneel to Runout Clock"
                                                    },
                                                    "isReview": false,
                                                    "playText": "Drew Brees rush to the middle for a loss of 1 yard to the Min14.",
                                                    "playType": {
                                                        "playTypeId": 4,
                                                        "name": "Rush"
                                                    },
                                                    "playersInvolved": [
                                                        {
                                                            "playerInvolvedTypeId": 1,
                                                            "playerInvolvedType": "player",
                                                            "typeSequence": 1,
                                                            "player": {
                                                                "playerId": 25598,
                                                                "firstName": "Drew",
                                                                "lastName": "Brees",
                                                                "uniform": "9"
                                                            }
                                                        }
                                                    ],
                                                    "direction": "M",
                                                    "yards": -1
                                                }
                                            ],
                                            "driveChart": [
                                                {
                                                    "driveId": 1,
                                                    "teamId": 350,
                                                    "driveStats": {
                                                        "plays": 11,
                                                        "yards": 80,
                                                        "timeOfPossession": {
                                                            "minutes": 5,
                                                            "seconds": 24
                                                        },
                                                        "penaltyYards": 0,
                                                        "isRedZone": "true",
                                                        "firstDowns": 7,
                                                        "isScoringDrive": "true"
                                                    },
                                                    "driveStart": {
                                                        "period": 1,
                                                        "gameClock": {
                                                            "minutes": 15,
                                                            "seconds": 0
                                                        },
                                                        "yardsFromGoal": 80,
                                                        "yardLine": "NO20",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Kickoff"
                                                        },
                                                        "driveChartPlayName": "Kickoff"
                                                    },
                                                    "driveEnd": {
                                                        "period": 1,
                                                        "gameClock": {
                                                            "minutes": 9,
                                                            "seconds": 36
                                                        },
                                                        "yardsFromGoal": 0,
                                                        "yardLine": "MIN0",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Touchdown"
                                                        },
                                                        "driveChartPlayName": "Touchdown"
                                                    }
                                                }, {
                                                    "driveId": 2,
                                                    "teamId": 347,
                                                    "driveStats": {
                                                        "plays": 3,
                                                        "yards": 2,
                                                        "timeOfPossession": {
                                                            "minutes": 1,
                                                            "seconds": 1
                                                        },
                                                        "penaltyYards": 0,
                                                        "isRedZone": "false",
                                                        "firstDowns": 0,
                                                        "isScoringDrive": "false"
                                                    },
                                                    "driveStart": {
                                                        "period": 1,
                                                        "gameClock": {
                                                            "minutes": 9,
                                                            "seconds": 30
                                                        },
                                                        "yardsFromGoal": 80,
                                                        "yardLine": "MIN20",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Kickoff"
                                                        },
                                                        "driveChartPlayName": "Kickoff"
                                                    },
                                                    "driveEnd": {
                                                        "period": 1,
                                                        "gameClock": {
                                                            "minutes": 8,
                                                            "seconds": 29
                                                        },
                                                        "yardsFromGoal": 78,
                                                        "yardLine": "MIN22",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Punt"
                                                        },
                                                        "driveChartPlayName": "Punt"
                                                    }
                                                }, {
                                                    "driveId": 3,
                                                    "teamId": 350,
                                                    "driveStats": {
                                                        "plays": 7,
                                                        "yards": 82,
                                                        "timeOfPossession": {
                                                            "minutes": 3,
                                                            "seconds": 39
                                                        },
                                                        "penaltyYards": 0,
                                                        "isRedZone": "true",
                                                        "firstDowns": 4,
                                                        "isScoringDrive": "true"
                                                    },
                                                    "driveStart": {
                                                        "period": 1,
                                                        "gameClock": {
                                                            "minutes": 8,
                                                            "seconds": 29
                                                        },
                                                        "yardsFromGoal": 82,
                                                        "yardLine": "NO18",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Punt"
                                                        },
                                                        "driveChartPlayName": "Punt"
                                                    },
                                                    "driveEnd": {
                                                        "period": 1,
                                                        "gameClock": {
                                                            "minutes": 4,
                                                            "seconds": 50
                                                        },
                                                        "yardsFromGoal": 0,
                                                        "yardLine": "MIN0",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Touchdown"
                                                        },
                                                        "driveChartPlayName": "Touchdown"
                                                    }
                                                }, {
                                                    "driveId": 4,
                                                    "teamId": 347,
                                                    "driveStats": {
                                                        "plays": 13,
                                                        "yards": 71,
                                                        "timeOfPossession": {
                                                            "minutes": 5,
                                                            "seconds": 44
                                                        },
                                                        "penaltyYards": 5,
                                                        "isRedZone": "true",
                                                        "firstDowns": 4,
                                                        "isScoringDrive": "true"
                                                    },
                                                    "driveStart": {
                                                        "period": 1,
                                                        "gameClock": {
                                                            "minutes": 4,
                                                            "seconds": 50
                                                        },
                                                        "yardsFromGoal": 78,
                                                        "yardLine": "MIN22",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Kickoff"
                                                        },
                                                        "driveChartPlayName": "Kickoff"
                                                    },
                                                    "driveEnd": {
                                                        "period": 2,
                                                        "gameClock": {
                                                            "minutes": 14,
                                                            "seconds": 6
                                                        },
                                                        "yardsFromGoal": 0,
                                                        "yardLine": "NO0",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Made Field Goal"
                                                        },
                                                        "driveChartPlayName": "Made Field Goal"
                                                    }
                                                }, {
                                                    "driveId": 5,
                                                    "teamId": 350,
                                                    "driveStats": {
                                                        "plays": 3,
                                                        "yards": 4,
                                                        "timeOfPossession": {
                                                            "minutes": 1,
                                                            "seconds": 51
                                                        },
                                                        "penaltyYards": -10,
                                                        "isRedZone": "false",
                                                        "firstDowns": 0,
                                                        "isScoringDrive": "false"
                                                    },
                                                    "driveStart": {
                                                        "period": 2,
                                                        "gameClock": {
                                                            "minutes": 14,
                                                            "seconds": 6
                                                        },
                                                        "yardsFromGoal": 80,
                                                        "yardLine": "NO20",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Kickoff"
                                                        },
                                                        "driveChartPlayName": "Kickoff"
                                                    },
                                                    "driveEnd": {
                                                        "period": 2,
                                                        "gameClock": {
                                                            "minutes": 12,
                                                            "seconds": 15
                                                        },
                                                        "yardsFromGoal": 76,
                                                        "yardLine": "NO24",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Punt"
                                                        },
                                                        "driveChartPlayName": "Punt"
                                                    }
                                                }, {
                                                    "driveId": 6,
                                                    "teamId": 347,
                                                    "driveStats": {
                                                        "plays": 10,
                                                        "yards": 51,
                                                        "timeOfPossession": {
                                                            "minutes": 5,
                                                            "seconds": 47
                                                        },
                                                        "penaltyYards": 0,
                                                        "isRedZone": "true",
                                                        "firstDowns": 2,
                                                        "isScoringDrive": "true"
                                                    },
                                                    "driveStart": {
                                                        "period": 2,
                                                        "gameClock": {
                                                            "minutes": 12,
                                                            "seconds": 15
                                                        },
                                                        "yardsFromGoal": 63,
                                                        "yardLine": "MIN37",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Punt"
                                                        },
                                                        "driveChartPlayName": "Punt"
                                                    },
                                                    "driveEnd": {
                                                        "period": 2,
                                                        "gameClock": {
                                                            "minutes": 6,
                                                            "seconds": 28
                                                        },
                                                        "yardsFromGoal": 0,
                                                        "yardLine": "NO0",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Made Field Goal"
                                                        },
                                                        "driveChartPlayName": "Made Field Goal"
                                                    }
                                                }, {
                                                    "driveId": 7,
                                                    "teamId": 350,
                                                    "driveStats": {
                                                        "plays": 6,
                                                        "yards": 21,
                                                        "timeOfPossession": {
                                                            "minutes": 3,
                                                            "seconds": 26
                                                        },
                                                        "penaltyYards": 0,
                                                        "isRedZone": "false",
                                                        "firstDowns": 1,
                                                        "isScoringDrive": "false"
                                                    },
                                                    "driveStart": {
                                                        "period": 2,
                                                        "gameClock": {
                                                            "minutes": 6,
                                                            "seconds": 28
                                                        },
                                                        "yardsFromGoal": 80,
                                                        "yardLine": "NO20",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Kickoff"
                                                        },
                                                        "driveChartPlayName": "Kickoff"
                                                    },
                                                    "driveEnd": {
                                                        "period": 2,
                                                        "gameClock": {
                                                            "minutes": 3,
                                                            "seconds": 2
                                                        },
                                                        "yardsFromGoal": 59,
                                                        "yardLine": "NO41",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Punt"
                                                        },
                                                        "driveChartPlayName": "Punt"
                                                    }
                                                }, {
                                                    "driveId": 8,
                                                    "teamId": 347,
                                                    "driveStats": {
                                                        "plays": 4,
                                                        "yards": 16,
                                                        "timeOfPossession": {
                                                            "minutes": 0,
                                                            "seconds": 57
                                                        },
                                                        "penaltyYards": 0,
                                                        "isRedZone": "false",
                                                        "firstDowns": 1,
                                                        "isScoringDrive": "false"
                                                    },
                                                    "driveStart": {
                                                        "period": 2,
                                                        "gameClock": {
                                                            "minutes": 3,
                                                            "seconds": 2
                                                        },
                                                        "yardsFromGoal": 73,
                                                        "yardLine": "MIN27",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Punt"
                                                        },
                                                        "driveChartPlayName": "Punt"
                                                    },
                                                    "driveEnd": {
                                                        "period": 2,
                                                        "gameClock": {
                                                            "minutes": 2,
                                                            "seconds": 5
                                                        },
                                                        "yardsFromGoal": 57,
                                                        "yardLine": "MIN43",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Punt"
                                                        },
                                                        "driveChartPlayName": "Punt"
                                                    }
                                                }, {
                                                    "driveId": 9,
                                                    "teamId": 350,
                                                    "driveStats": {
                                                        "plays": 6,
                                                        "yards": 25,
                                                        "timeOfPossession": {
                                                            "minutes": 1,
                                                            "seconds": 28
                                                        },
                                                        "penaltyYards": 0,
                                                        "isRedZone": "false",
                                                        "firstDowns": 2,
                                                        "isScoringDrive": "false"
                                                    },
                                                    "driveStart": {
                                                        "period": 2,
                                                        "gameClock": {
                                                            "minutes": 2,
                                                            "seconds": 5
                                                        },
                                                        "yardsFromGoal": 80,
                                                        "yardLine": "NO20",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Punt"
                                                        },
                                                        "driveChartPlayName": "Punt"
                                                    },
                                                    "driveEnd": {
                                                        "period": 2,
                                                        "gameClock": {
                                                            "minutes": 0,
                                                            "seconds": 37
                                                        },
                                                        "yardsFromGoal": 55,
                                                        "yardLine": "NO45",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Punt"
                                                        },
                                                        "driveChartPlayName": "Punt"
                                                    }
                                                }, {
                                                    "driveId": 10,
                                                    "teamId": 347,
                                                    "driveStats": {
                                                        "plays": 3,
                                                        "yards": 1,
                                                        "timeOfPossession": {
                                                            "minutes": 0,
                                                            "seconds": 37
                                                        },
                                                        "penaltyYards": 0,
                                                        "isRedZone": "false",
                                                        "firstDowns": 0,
                                                        "isScoringDrive": "false"
                                                    },
                                                    "driveStart": {
                                                        "period": 2,
                                                        "gameClock": {
                                                            "minutes": 0,
                                                            "seconds": 37
                                                        },
                                                        "yardsFromGoal": 96,
                                                        "yardLine": "MIN4",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Punt"
                                                        },
                                                        "driveChartPlayName": "Punt"
                                                    },
                                                    "driveEnd": {
                                                        "period": 2,
                                                        "gameClock": {
                                                            "minutes": 0,
                                                            "seconds": 0
                                                        },
                                                        "yardsFromGoal": 95,
                                                        "yardLine": "MIN5",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "End of Half"
                                                        },
                                                        "driveChartPlayName": "End of Half"
                                                    }
                                                }, {
                                                    "driveId": 11,
                                                    "teamId": 347,
                                                    "driveStats": {
                                                        "plays": 10,
                                                        "yards": 43,
                                                        "timeOfPossession": {
                                                            "minutes": 4,
                                                            "seconds": 32
                                                        },
                                                        "penaltyYards": 5,
                                                        "isRedZone": "false",
                                                        "firstDowns": 3,
                                                        "isScoringDrive": "true"
                                                    },
                                                    "driveStart": {
                                                        "period": 3,
                                                        "gameClock": {
                                                            "minutes": 14,
                                                            "seconds": 52
                                                        },
                                                        "yardsFromGoal": 65,
                                                        "yardLine": "MIN35",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Kickoff"
                                                        },
                                                        "driveChartPlayName": "Kickoff"
                                                    },
                                                    "driveEnd": {
                                                        "period": 3,
                                                        "gameClock": {
                                                            "minutes": 10,
                                                            "seconds": 20
                                                        },
                                                        "yardsFromGoal": 0,
                                                        "yardLine": "NO0",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Made Field Goal"
                                                        },
                                                        "driveChartPlayName": "Made Field Goal"
                                                    }
                                                }, {
                                                    "driveId": 12,
                                                    "teamId": 350,
                                                    "driveStats": {
                                                        "plays": 9,
                                                        "yards": 4,
                                                        "timeOfPossession": {
                                                            "minutes": 5,
                                                            "seconds": 19
                                                        },
                                                        "penaltyYards": 0,
                                                        "isRedZone": "false",
                                                        "firstDowns": 2,
                                                        "isScoringDrive": "false"
                                                    },
                                                    "driveStart": {
                                                        "period": 3,
                                                        "gameClock": {
                                                            "minutes": 10,
                                                            "seconds": 20
                                                        },
                                                        "yardsFromGoal": 80,
                                                        "yardLine": "NO20",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Kickoff"
                                                        },
                                                        "driveChartPlayName": "Kickoff"
                                                    },
                                                    "driveEnd": {
                                                        "period": 3,
                                                        "gameClock": {
                                                            "minutes": 5,
                                                            "seconds": 1
                                                        },
                                                        "yardsFromGoal": 76,
                                                        "yardLine": "NO24",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Punt"
                                                        },
                                                        "driveChartPlayName": "Punt"
                                                    }
                                                }, {
                                                    "driveId": 13,
                                                    "teamId": 347,
                                                    "driveStats": {
                                                        "plays": 5,
                                                        "yards": 36,
                                                        "timeOfPossession": {
                                                            "minutes": 2,
                                                            "seconds": 11
                                                        },
                                                        "penaltyYards": 0,
                                                        "isRedZone": "false",
                                                        "firstDowns": 1,
                                                        "isScoringDrive": "false"
                                                    },
                                                    "driveStart": {
                                                        "period": 3,
                                                        "gameClock": {
                                                            "minutes": 5,
                                                            "seconds": 1
                                                        },
                                                        "yardsFromGoal": 90,
                                                        "yardLine": "MIN10",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Punt"
                                                        },
                                                        "driveChartPlayName": "Punt"
                                                    },
                                                    "driveEnd": {
                                                        "period": 3,
                                                        "gameClock": {
                                                            "minutes": 2,
                                                            "seconds": 50
                                                        },
                                                        "yardsFromGoal": 54,
                                                        "yardLine": "MIN46",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Punt"
                                                        },
                                                        "driveChartPlayName": "Punt"
                                                    }
                                                }, {
                                                    "driveId": 14,
                                                    "teamId": 350,
                                                    "driveStats": {
                                                        "plays": 12,
                                                        "yards": 90,
                                                        "timeOfPossession": {
                                                            "minutes": 5,
                                                            "seconds": 28
                                                        },
                                                        "penaltyYards": 5,
                                                        "isRedZone": "true",
                                                        "firstDowns": 6,
                                                        "isScoringDrive": "true"
                                                    },
                                                    "driveStart": {
                                                        "period": 3,
                                                        "gameClock": {
                                                            "minutes": 2,
                                                            "seconds": 50
                                                        },
                                                        "yardsFromGoal": 90,
                                                        "yardLine": "NO10",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Punt"
                                                        },
                                                        "driveChartPlayName": "Punt"
                                                    },
                                                    "driveEnd": {
                                                        "period": 4,
                                                        "gameClock": {
                                                            "minutes": 12,
                                                            "seconds": 22
                                                        },
                                                        "yardsFromGoal": 0,
                                                        "yardLine": "MIN0",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Touchdown"
                                                        },
                                                        "driveChartPlayName": "Touchdown"
                                                    }
                                                }, {
                                                    "driveId": 15,
                                                    "teamId": 347,
                                                    "driveStats": {
                                                        "plays": 9,
                                                        "yards": 23,
                                                        "timeOfPossession": {
                                                            "minutes": 5,
                                                            "seconds": 21
                                                        },
                                                        "penaltyYards": -14,
                                                        "isRedZone": "false",
                                                        "firstDowns": 2,
                                                        "isScoringDrive": "false"
                                                    },
                                                    "driveStart": {
                                                        "period": 4,
                                                        "gameClock": {
                                                            "minutes": 12,
                                                            "seconds": 19
                                                        },
                                                        "yardsFromGoal": 82,
                                                        "yardLine": "MIN18",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Kickoff"
                                                        },
                                                        "driveChartPlayName": "Kickoff"
                                                    },
                                                    "driveEnd": {
                                                        "period": 4,
                                                        "gameClock": {
                                                            "minutes": 6,
                                                            "seconds": 58
                                                        },
                                                        "yardsFromGoal": 59,
                                                        "yardLine": "MIN41",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Punt"
                                                        },
                                                        "driveChartPlayName": "Punt"
                                                    }
                                                }, {
                                                    "driveId": 16,
                                                    "teamId": 350,
                                                    "driveStats": {
                                                        "plays": 14,
                                                        "yards": 71,
                                                        "timeOfPossession": {
                                                            "minutes": 6,
                                                            "seconds": 58
                                                        },
                                                        "penaltyYards": 5,
                                                        "isRedZone": "true",
                                                        "firstDowns": 5,
                                                        "isScoringDrive": "false"
                                                    },
                                                    "driveStart": {
                                                        "period": 4,
                                                        "gameClock": {
                                                            "minutes": 6,
                                                            "seconds": 58
                                                        },
                                                        "yardsFromGoal": 84,
                                                        "yardLine": "NO16",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "Punt"
                                                        },
                                                        "driveChartPlayName": "Punt"
                                                    },
                                                    "driveEnd": {
                                                        "period": 4,
                                                        "gameClock": {
                                                            "minutes": 0,
                                                            "seconds": 0
                                                        },
                                                        "yardsFromGoal": 13,
                                                        "yardLine": "MIN13",
                                                        "playType": {
                                                            "playTypeId": null,
                                                            "name": "End of Game"
                                                        },
                                                        "driveChartPlayName": "End of Game"
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                }
            ]
        };
        $scope.event = $scope.game.apiResults[0].league.season.eventType[0].events[0];

        $scope.showSummary = true;
        $scope.showFullBoxScore = false;
        $scope.showDrivePbp = false;
        $scope.showFullTeamStats = false;

        $scope.swap = function(type) {
            switch(type) {
                case "game":
                    $scope.showSummary = true;
                    $scope.showFullBoxScore = false;
                    $scope.showDrivePbp = false;
                    $scope.showFullTeamStats = false;
                    break;
                case "box":
                    $scope.showSummary = false;
                    $scope.showFullBoxScore = true;
                    $scope.showDrivePbp = false;
                    $scope.showFullTeamStats = false;
                    break;
                case "pbp":
                    $scope.showSummary = false;
                    $scope.showFullBoxScore = false;
                    $scope.showDrivePbp = true;
                    $scope.showFullTeamStats = false;
                    break;
                case "stat":
                    $scope.showSummary = false;
                    $scope.showFullBoxScore = false;
                    $scope.showDrivePbp = false;
                    $scope.showFullTeamStats = true;
                    break;
            }
        }
    }
]);