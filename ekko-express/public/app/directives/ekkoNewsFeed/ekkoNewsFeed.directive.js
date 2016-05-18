'use strict';

angular.module('ekkoApp')
    .directive('ekkoNewsFeed', ['Team', '$user', function (Team, $user) {
        return {
            restrict: 'E', //E = element, A = attribute, C = class, M = comment         
            scope: {
                activesport: "=",
                activeteam: "@"
            },
            templateUrl: '/app/directives/ekkoNewsFeed/ekkoNewsFeed.html',
            link: function ($scope, element, attrs) {
                
                $scope.stories = {
                    "team": {
                        "teamId": 350,
                        "location": "New Orleans",
                        "nickname": "Saints",
                        "abbreviation": "NO",
                        "headlinePackage": {
                            "publishDate": {
                                "year": 2015,
                                "month": 7,
                                "date": 30,
                                "hour": 18,
                                "minute": 44,
                                "second": 0,
                                "full": "2015-07-30T18:44:00",
                                "dateType": "Eastern"
                            },
                            "languageType": {
                                "id": 1,
                                "name": "en"
                            },
                            "headlines": [
                                {
                                    "headlineSequence": 1,
                                    "headlineText": "Saints veterans set tone at training camp's outset",
                                    "storyId": "20150730184331315404908",
                                    "originalStoryId": "20150730184331315404908",
                                    "storyPublishDate": {
                                        "year": 2015,
                                        "month": 7,
                                        "date": 30,
                                        "hour": 18,
                                        "minute": 43,
                                        "second": 35,
                                        "full": "2015-07-30T18:43:35",
                                        "dateType": "Eastern"
                                    },
                                    "version": 0,
                                    "storySource": "AP",
                                    "images": [
                                        {
                                            "imageId": "201507301404506703460",
                                            "source": "",
                                            "caption": "New Orleans Saints running back Khiry Robinson (29) runs the ball during the team's NFL football training camp in White Sulphur Springs, W. Va., Thursday, July 30, 2015. (AP Photo/Chris Tilley)"
                                        }, {
                                            "imageId": "201507301411510763493",
                                            "source": "",
                                            "caption": "A foggy mist rolls off the mountains near the New Orleans Saints NFL football training camp in White Sulphur Springs, W. Va., Thursday, July 30, 2015. (AP Photo/Chris Tilley)"
                                        }, {
                                            "imageId": "201507301411510893504",
                                            "source": "",
                                            "caption": "New Orleans Saints' Stephone Anthony (50) directs the defense at the teams NFL football training camp in White Sulphur Springs, W. Va., Thursday, July 30, 2015. (AP Photo/Chris Tilley)"
                                        }, {
                                            "imageId": "201507301411511103507",
                                            "source": "",
                                            "caption": "New Orleans Saints head coach Sean Payton and New Orleans Saints quarterback Drew Brees (9) during the team's NFL football training camp in White Sulphur Springs, W. Va., Thursday, July 30, 2015. (AP Photo/Chris Tilley)"
                                        }
                                    ]
                                }, {
                                    "headlineSequence": 2,
                                    "headlineText": "GM Loomis: Saints equipped to overcome offseason setbacks",
                                    "storyId": "20150729214100280769708",
                                    "originalStoryId": "20150729214100280769708",
                                    "storyPublishDate": {
                                        "year": 2015,
                                        "month": 7,
                                        "date": 29,
                                        "hour": 21,
                                        "minute": 41,
                                        "second": 3,
                                        "full": "2015-07-29T21:41:03",
                                        "dateType": "Eastern"
                                    },
                                    "version": 0,
                                    "storySource": "AP",
                                    "images": [
                                        {
                                            "imageId": "201507281001360946512",
                                            "source": "",
                                            "caption": "FILE - In this Nov. 24, 2014, file photo, New Orleans Saints outside linebacker Junior Galette walks along the bench during an NFL football game against the Baltimore Ravens in New Orleans.A defense that ranked second-to-last in the NFL last season has cut ties with Galette, who led the club with 10 sacks.  (AP Photo/Jonathan Bachman, File)"
                                        }
                                    ]
                                }, {
                                    "headlineSequence": 3,
                                    "headlineText": "Saints to test revamped roster in training camp",
                                    "storyId": "20150728200227566162808",
                                    "originalStoryId": "20150728200227566162808",
                                    "storyPublishDate": {
                                        "year": 2015,
                                        "month": 7,
                                        "date": 28,
                                        "hour": 20,
                                        "minute": 2,
                                        "second": 31,
                                        "full": "2015-07-28T20:02:31",
                                        "dateType": "Eastern"
                                    },
                                    "version": 0,
                                    "storySource": "AP",
                                    "images": [
                                        {
                                            "imageId": "201507280959359406500",
                                            "source": "",
                                            "caption": "FILE - In this Dec. 28, 2014, file photo, New Orleans Saints quarterback Drew Brees pauses during an NFL football game against the Tampa Bay Buccaneers in Tampa, Fla. Brees said he hopes the teams overhaul has strength the team in the areas of leadership, chemistry, and attention to detail. (AP Photo/Brian Blanco, File)"
                                        }, {
                                            "imageId": "201507281003362166516",
                                            "source": "",
                                            "caption": "FILE - In this Nov. 24, 2014, file photo, New Orleans Saints wide receiver Marques Colston (12) pulls in a touchdown reception in front of Baltimore Ravens strong safety Matt Elam, middle rear, and free safety Terrence Brooks, right, during an NFL football game in New Orleans. (AP Photo/Jonathan Bachman, File)"
                                        }
                                    ]
                                }, {
                                    "headlineSequence": 4,
                                    "headlineText": "Saints cut Bunkley, place Colston, Byrd on PUP",
                                    "storyId": "20150728181544938131408",
                                    "originalStoryId": "20150728181544938131408",
                                    "storyPublishDate": {
                                        "year": 2015,
                                        "month": 7,
                                        "date": 28,
                                        "hour": 18,
                                        "minute": 15,
                                        "second": 46,
                                        "full": "2015-07-28T18:15:46",
                                        "dateType": "Eastern"
                                    },
                                    "version": 0,
                                    "storySource": "AP"
                                }, {
                                    "headlineSequence": 5,
                                    "headlineText": "Saints add 2 players after formally releasing Galette",
                                    "storyId": "20150727212053973664208",
                                    "originalStoryId": "20150727212053973664208",
                                    "storyPublishDate": {
                                        "year": 2015,
                                        "month": 7,
                                        "date": 27,
                                        "hour": 21,
                                        "minute": 20,
                                        "second": 56,
                                        "full": "2015-07-27T21:20:56",
                                        "dateType": "Eastern"
                                    },
                                    "version": 0,
                                    "storySource": "AP"
                                }, {
                                    "headlineSequence": 6,
                                    "headlineText": "New Orleans Saints Capsule",
                                    "storyId": "20150727100320877437208",
                                    "originalStoryId": "20150727100320877437208",
                                    "storyPublishDate": {
                                        "year": 2015,
                                        "month": 7,
                                        "date": 27,
                                        "hour": 10,
                                        "minute": 3,
                                        "second": 25,
                                        "full": "2015-07-27T10:03:25",
                                        "dateType": "Eastern"
                                    },
                                    "version": 0,
                                    "storySource": "AP"
                                }, {
                                    "headlineSequence": 7,
                                    "headlineText": "Agent: Saints inform 2014 sack leader Galette of his release",
                                    "storyId": "20150724205432374747708",
                                    "originalStoryId": "20150724181646905684408",
                                    "storyPublishDate": {
                                        "year": 2015,
                                        "month": 7,
                                        "date": 24,
                                        "hour": 20,
                                        "minute": 54,
                                        "second": 35,
                                        "full": "2015-07-24T20:54:35",
                                        "dateType": "Eastern"
                                    },
                                    "version": 2,
                                    "storySource": "AP",
                                    "images": [
                                        {
                                            "imageId": "201507241720624470892",
                                            "source": "",
                                            "caption": "FILE - In this  Sunday, Oct. 19, 2014 file photo, New Orleans Saints outside linebacker Junior Galette (93) leads the team on to the field for an NFL football game against the Detroit Lions in Detroit. The New Orleans Saints have cut Junior Galette, who has been among their top pass-rushers the past two seasons and last year signed a four-year, $41.5 million contract extension, Friday, July 24, 2015. (AP Photo/Duane Burleson)"
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                };

                $scope.story = {
                    "story": {
                        "storyId": "20150731165407544201708",
                        "originalStoryId": "20150731142558413098708",
                        "publishDate": {
                            "year": 2015,
                            "month": 7,
                            "date": 31,
                            "hour": 16,
                            "minute": 54,
                            "second": 18,
                            "full": "2015-07-31T16:54:18",
                            "dateType": "Eastern"
                        },
                        "version": 2,
                        "storyType": {
                            "storyTypeId": 0,
                            "name": "story"
                        },
                        "storySource": "AP",
                        "editorNote": "Adds details, quotes and background.",
                        "code": "NFL",
                        "slug": "AP-FBN--Browns-Farmer, 2nd Ld-Writethru",
                        "languageType": {
                            "id": 1,
                            "name": "EN"
                        },
                        "teams": [
                            {
                                "teamId": 329,
                                "location": "Cleveland",
                                "nickname": "Browns",
                                "abbreviation": "Cle"
                            }, {
                                "teamId": 348,
                                "location": "New England",
                                "nickname": "Patriots",
                                "abbreviation": "NE"
                            }
                        ],
                        "players": [
                            {
                                "playerId": 25347,
                                "firstName": "Tom",
                                "lastName": "Brady"
                            }, {
                                "playerId": 81059,
                                "firstName": "Josh",
                                "lastName": "McCown"
                            }, {
                                "playerId": 216241,
                                "firstName": "Joe",
                                "lastName": "Thomas"
                            }, {
                                "playerId": 225224,
                                "firstName": "Dwayne",
                                "lastName": "Bowe"
                            }, {
                                "playerId": 286417,
                                "firstName": "Marlon",
                                "lastName": "Moore"
                            }, {
                                "playerId": 464275,
                                "firstName": "Glenn",
                                "lastName": "Winston"
                            }, {
                                "playerId": 518003,
                                "firstName": "Darius",
                                "lastName": "Eubanks"
                            }, {
                                "playerId": 592196,
                                "firstName": "Charles",
                                "lastName": "Gaines"
                            }, {
                                "playerId": 593578,
                                "firstName": "Johnny",
                                "lastName": "Manziel"
                            }
                        ],
                        "images": [
                            {
                                "imageId": "201507311040384405913",
                                "source": "APWF",
                                "caption": "Cleveland Browns general manager Ray Farmer watches practice at the NFL football team's training camp Friday, July 31, 2015, in Berea, Ohio. (AP Photo/Tony Dejak)"
                            }
                        ],
                        "header": {
                            "headline": "Farmer: Browns approach won't change despite his suspension",
                            "byline": "",
                            "bytitle": ""
                        },
                        "content": {
                            "paragraphs": ["BEREA, Ohio (AP)  Even though he has been suspended for the first four weeks of the NFL's regular season, Browns general manager Ray Farmer said Friday his approach to building the roster during training camp and the regular season will not change.", "''We will prepare the same way and keep the best 53 players,'' Farmer said after the second practice of training camp. ''We will go through and figure out who is available. No decision is made in a vacuum. Coaches and scouts have a say and we talk about what is best for the Browns. It is not just me sitting in a room.''", "The league announced in March that Farmer would be suspended four games for texting during games, which violates NFL rules on electronic devices.", "Farmer's cooperation with the NFL was mentioned earlier this week when NFL Commissioner Roger upheld a four-game suspension for New England Patriots quarterback Tom Brady. Goodell said Brady's decision to destroy a cellphone factored into his decision to keep the star's punishment in place for his role in using underinflated footballs in a playoff game last season.", "Farmer said he turned over his cellphone to the league and that sending the texts was his own mistake.", "''There was no ill-gotten intentions or to gain a competitive advantage,'' Farmer said. ''Those are the rules and because of that I will pay my penalty.''", "The league said Farmer's punishment would have been more severe had he not cooperated.", "Farmer and head coach Mike Pettine said there have been preliminary discussions about who will make personnel decisions during Farmer's absence, but Farmer was not ready to divulge those details.", "''I'm very confident given the time of year - you are coming off a lot of the decisions already being made,'' Pettine said. ''Whether it is (executive chief of staff) Bill Kuharich, (vice president of player personnel) Morocco Brown or whatever we decide to do, I have full confidence in that group.''", "About the only thing that Farmer hasn't thought about is how he will spend his four weeks away from the team. He will not be allowed to communicate with team officials or scout college teams in preparation for the draft. Right now his only focus is on improving the roster leading into the regular season.", "''We are going to focus on controlling the line of scrimmage and then letting our skill show what level they are at,'' he said. ''We think our back end is really good on defense, and we think our offense skill is capable, as well. The pieces are in place for us to have success. We just have to go out and demonstrate that we can.''", "On the field, Farmer said he has been impressed with Terrelle Pryor's switch to wide receiver. The former Ohio State standout, who is with his fifth NFL team, might be a long-shot to make the team, but Farmer thinks Pryor can make the transition.", "Farmer pointed to other examples where a player who has been a quarterback earlier in his career has excelled at another position.", "''The question is: Is he a good enough athlete and does he have the skillset to play receiver?'' Farmer said. ''I've seen him turn a broken play into a 90-yard touchdown run so I know he has the speed and he has the athleticism. You have to put two and two together and see if he can make the transition.''", "Farmer has also been pleased with how Josh McCown has done at quarterback early on, along with Johnny Manziel showing more maturity in his second year. McCown, who was signed as a free agent in February, is expected to be the 23rd starting quarterback for the Browns since their return in 1999.", "---", "NOTES: WR/KR Marlon Moore practiced after missing Thursday due to illness. ... RB Glenn Winston (knee), LB Darius Eubanks (knee) and CB Charles Gaines (hamstring) missed practice for a second straight day. ... McCown showed some athleticism by scrambling out of the pocket. He also had the nicest pass of the day with a 50-yard completion to Dwayne Bowe on a fly route. .. Manziel bounced back after struggling on Thursday and completed four straight passes during seven-on-seven drills. . Saturday will mark the first practice in pads but Pettine said that Pro Bowl left tackle Joe Thomas will have the day off.", "---", "AP NFL website: http://pro32.ap.org and http://twitter.com/AP-NFL"]
                        }
                    }
                };
                
                $scope.headlines = {
                    "headlinePackage": {
                        "publishDate": {
                            "year": 2015,
                            "month": 7,
                            "date": 31,
                            "hour": 16,
                            "minute": 55,
                            "second": 0,
                            "full": "2015-07-31T16:55:00",
                            "dateType": "Eastern"
                        },
                        "languageType": {
                            "id": 1,
                            "name": "en"
                        },
                        "headlines": [
                            {
                                "headlineSequence": 1,
                                "headlineText": "Farmer: Browns approach won't change despite his suspension",
                                "storyId": "20150731165407544201708",
                                "originalStoryId": "20150731142558413098708",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 31,
                                    "hour": 16,
                                    "minute": 54,
                                    "second": 12,
                                    "full": "2015-07-31T16:54:12",
                                    "dateType": "Eastern"
                                },
                                "version": 2,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507311040384405913",
                                        "source": "",
                                        "caption": "Cleveland Browns general manager Ray Farmer watches practice at the NFL football team's training camp Friday, July 31, 2015, in Berea, Ohio. (AP Photo/Tony Dejak)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 2,
                                "headlineText": "Jaguars' Clemons arrives at training camp, sits out practice",
                                "storyId": "20150731165136084200308",
                                "originalStoryId": "20150731165136084200308",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 31,
                                    "hour": 16,
                                    "minute": 51,
                                    "second": 36,
                                    "full": "2015-07-31T16:51:36",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507311331486686869",
                                        "source": "",
                                        "caption": "Jacksonville Jaguars defensive end Chris Clemons, right, watches teammates during practice at NFL football training camp, Friday, July 31, 2015, in Jacksonville, Fla. Clemons arrived a day late for camp and did not practice Friday.(AP Photo/John Raoux)"
                                    }, {
                                        "imageId": "201507311334488856897",
                                        "source": "",
                                        "caption": "Jacksonville Jaguars defensive end Chris Clemons watches teammates during practice at NFL football training camp, Friday, July 31, 2015, in Jacksonville, Fla. Clemons arrived a day late for camp and did not practice Friday.(AP Photo/John Raoux)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 3,
                                "headlineText": "All eyes on QB Marcus Mariota as Titans open training camp",
                                "storyId": "20150731164028033193108",
                                "originalStoryId": "20150731164028033193108",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 31,
                                    "hour": 16,
                                    "minute": 40,
                                    "second": 31,
                                    "full": "2015-07-31T16:40:31",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507311338490986905",
                                        "source": "",
                                        "caption": "Tennessee Titans linebacker Brian Orakpo (98) hugs quarterback Marcus Mariota, right, during the first day of NFL football training camp Friday, July 31, 2015, in Nashville, Tenn. (AP Photo/Mark Humphrey)"
                                    }, {
                                        "imageId": "201507311346495666941",
                                        "source": "",
                                        "caption": "Tennessee Titans quarterback Marcus Mariota (8) takes a break with center Brian Schwenke, left, and tackle Taylor Lewan, right, during NFL football training camp Friday, July 31, 2015, in Nashville, Tenn. (AP Photo/Mark Humphrey)"
                                    }, {
                                        "imageId": "201507311354500646985",
                                        "source": "",
                                        "caption": "Tennessee Titans quarterback Marcus Mariota throws during NFL football training camp Friday, July 31, 2015, in Nashville, Tenn. (AP Photo/Mark Humphrey)"
                                    }, {
                                        "imageId": "201507311415513247089",
                                        "source": "",
                                        "caption": "Tennessee Titans quarterback Zach Mettenberger practices with his name misspelled on his jersey during NFL football training camp Friday, July 31, 2015, in Nashville, Tenn. (AP Photo/Mark Humphrey)"
                                    }, {
                                        "imageId": "201507311421517107145",
                                        "source": "",
                                        "caption": "Tennessee Titans head coach Ken Whisenhunt, left, talks with quarterback Marcus Mariota during NFL football training camp Friday, July 31, 2015, in Nashville, Tenn. (AP Photo/Mark Humphrey)"
                                    }, {
                                        "imageId": "201507311432523297230",
                                        "source": "",
                                        "caption": "Tennessee Titans quarterback Marcus Mariota (8) fakes a handoff to running back Bishop Sankey (20) during NFL football training camp Friday, July 31, 2015, in Nashville, Tenn. (AP Photo/Mark Humphrey)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 4,
                                "headlineText": "Ryan: Bills hiring Pat Meyer has no ties to Kromer's status",
                                "storyId": "20150731163926560192608",
                                "originalStoryId": "20150731092113287904108",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 31,
                                    "hour": 16,
                                    "minute": 39,
                                    "second": 31,
                                    "full": "2015-07-31T16:39:31",
                                    "dateType": "Eastern"
                                },
                                "version": 1,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507311023373965797",
                                        "source": "",
                                        "caption": "FILE - This is a 2014, file photo showing Pat Meyer. The Buffalo Bills have hired Pat Meyer as a football operations consultant, and he also has a background as an offensive line coach. The hiring was announced on Friday, July 31, 2015, shortly before the Bills opened training camp in suburban Rochester. Meyer spent the past two seasons as an offensive line coach with the Chicago Bears under coordinator Aaron Kromer, who was hired by the Bills in January.  (AP Photo/File)"
                                    }, {
                                        "imageId": "201507311237454466615",
                                        "source": "",
                                        "caption": "Buffalo Bills football operations consultant Pat Meyer watches the action during their NFL football training camp in Pittsford, N.Y., Friday, July 31, 2015. (AP Photo/Bill Wippert)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 5,
                                "headlineText": "McCoy creates buzz as Buffalo Bills open training camp",
                                "storyId": "20150731163322323188308",
                                "originalStoryId": "20150731162111312178508",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 31,
                                    "hour": 16,
                                    "minute": 33,
                                    "second": 23,
                                    "full": "2015-07-31T16:33:23",
                                    "dateType": "Eastern"
                                },
                                "version": 1,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507311232451306593",
                                        "source": "",
                                        "caption": "Buffalo Bills running back LeSean McCoy (25) poses with fans during their NFL football training camp in Pittsford, N.Y., Friday, July 31, 2015. (AP Photo/Bill Wippert)"
                                    }, {
                                        "imageId": "201507311232451626597",
                                        "source": "",
                                        "caption": "Buffalo Bills tight end Charles Clay makes a catch during their NFL football training camp in Pittsford, N.Y., Friday, July 31, 2015. (AP Photo/Bill Wippert)"
                                    }, {
                                        "imageId": "201507311239455626620",
                                        "source": "",
                                        "caption": "Buffalo Bills defensive end Mario Williams (94) runs onto the field during their NFL football training camp in Pittsford, N.Y., Friday, July 31, 2015. (AP Photo/Bill Wippert)"
                                    }, {
                                        "imageId": "201507311240456036632",
                                        "source": "",
                                        "caption": "Buffalo Bills president Russ Brandon, left, owner Terry Pegula, center, and general manager Doug Whaley talk during the team's NFL football training camp in Pittsford, N.Y., Friday, July 31, 2015. (AP Photo/Bill Wippert)"
                                    }, {
                                        "imageId": "201507311240456376647",
                                        "source": "",
                                        "caption": "Buffalo Bills running back LeSean McCoy (25) makes a diving catch against linebacker Nigel Bradham (53) during their NFL football training camp in Pittsford, N.Y., Friday, July 31, 2015. (AP Photo/Bill Wippert)"
                                    }, {
                                        "imageId": "201507311242457716687",
                                        "source": "",
                                        "caption": "Buffalo Bills quarterback EJ Manuel (3) throws a pass during  the team's NFL football training camp in Pittsford, N.Y., Friday, July 31, 2015. (AP Photo/Bill Wippert)"
                                    }, {
                                        "imageId": "201507311247460326705",
                                        "source": "",
                                        "caption": "Buffalo Bills general manager Doug Whaley, left, and head coach Rex Ryan share a laugh during their team's NFL football training camp in Pittsford, N.Y., Friday, July 31, 2015. (AP Photo/Bill Wippert)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 6,
                                "headlineText": "Tannehill confident, hopeful of a breakthrough in 2015",
                                "storyId": "20150731163322218188208",
                                "originalStoryId": "20150731163322218188208",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 31,
                                    "hour": 16,
                                    "minute": 33,
                                    "second": 23,
                                    "full": "2015-07-31T16:33:23",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507311324482486803",
                                        "source": "",
                                        "caption": "In this Thursday, July 30, 2015 photo, Miami Dolphins quarterback Ryan Tannehill throws a pass at the teams NFL football training camp, in Davie, Fla. (AP Photo/Wilfredo Lee)"
                                    }, {
                                        "imageId": "201507311327484526828",
                                        "source": "",
                                        "caption": "In this Thursday, July 30, 2015 photo, Miami Dolphins quarterback Ryan Tannehill smiles at the teams NFL football training camp, in Davie, Fla. Ryan Tannehill has been smiling throughout the first two days of Miami Dolphins training camp, a combination of more comfort in his role and a belief that his team has turned a corner. (AP Photo/Wilfredo Lee)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 7,
                                "headlineText": "Patriots circle wagons in camp and focus on football",
                                "storyId": "20150731161040538172008",
                                "originalStoryId": "20150731133430001064008",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 31,
                                    "hour": 16,
                                    "minute": 10,
                                    "second": 45,
                                    "full": "2015-07-31T16:10:45",
                                    "dateType": "Eastern"
                                },
                                "version": 2,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507311147424796337",
                                        "source": "",
                                        "caption": "New England Patriots offensive coordinator Josh McDaniels talks with quarterbacks Tom Brady, left, and Jimmy Garappolo during an NFL football training camp in Foxborough, Mass., Friday, July 31, 2015. (AP Photo/Charles Krupa)"
                                    }, {
                                        "imageId": "201507311147424796338",
                                        "source": "",
                                        "caption": "New England Patriots defensive tackle Malcolm Brown, left, pushes off on lineman Joe Vellano, right, during an NFL football training camp in Foxborough, Mass., Friday, July 31, 2015. (AP Photo/Charles Krupa)"
                                    }, {
                                        "imageId": "201507311149425756352",
                                        "source": "",
                                        "caption": "New England Patriots head coach Bill Belichick watches his players during an NFL football training camp in Foxborough, Mass., Friday, July 31, 2015. (AP Photo/Charles Krupa)"
                                    }, {
                                        "imageId": "201507311150426366359",
                                        "source": "",
                                        "caption": "New England Patriots quarterback Jimmy Garoppolo looks to pass during an NFL football training camp in Foxborough, Mass., Friday, July 31, 2015. (AP Photo/Charles Krupa)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 8,
                                "headlineText": "Skins add LB Galette to pass rush, despite off-field issues",
                                "storyId": "20150731160838135170408",
                                "originalStoryId": "20150731123330413020108",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 31,
                                    "hour": 16,
                                    "minute": 8,
                                    "second": 38,
                                    "full": "2015-07-31T16:08:38",
                                    "dateType": "Eastern"
                                },
                                "version": 2,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507311202433266481",
                                        "source": "",
                                        "caption": "FILE - In this Dec. 15, 2014 file photo, New Orleans Saints outside linebacker Junior Galette (93) chases Chicago Bears quarterback Jay Cutler (6) before a sack during the first half of an NFL football game in Chicago. Galette agreed to a one-year contract with the Washington Redskins for the league minimum on Friday, according to agent Alvin Keels. (AP Photo/Charles Rex Arbogast, File)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 9,
                                "headlineText": "Cardinals sign former UA cornerback Shaquille Richardson",
                                "storyId": "20150731160126127166608",
                                "originalStoryId": "20150731160126127166608",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 31,
                                    "hour": 16,
                                    "minute": 1,
                                    "second": 30,
                                    "full": "2015-07-31T16:01:30",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 10,
                                "headlineText": "Titans receiver Hunter leaving legal questions to attorney",
                                "storyId": "20150731155822039162508",
                                "originalStoryId": "20150731155549704160808",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 31,
                                    "hour": 15,
                                    "minute": 58,
                                    "second": 24,
                                    "full": "2015-07-31T15:58:24",
                                    "dateType": "Eastern"
                                },
                                "version": 1,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507311353500316973",
                                        "source": "",
                                        "caption": "Tennessee Titans wide receiver Justin Hunter answers questions following the first day of NFL football training camp Friday, July 31, 2015, in Nashville, Tenn. (AP Photo/Mark Humphrey)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 11,
                                "headlineText": "Manning not worried about contract heading into final year",
                                "storyId": "20150731155146427158008",
                                "originalStoryId": "20150731143754170108208",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 31,
                                    "hour": 15,
                                    "minute": 51,
                                    "second": 46,
                                    "full": "2015-07-31T15:51:46",
                                    "dateType": "Eastern"
                                },
                                "version": 1,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 12,
                                "headlineText": "Falcons' Quinn brings hands-on approach to training camp",
                                "storyId": "20150731154843456155308",
                                "originalStoryId": "20150731154843456155308",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 31,
                                    "hour": 15,
                                    "minute": 48,
                                    "second": 45,
                                    "full": "2015-07-31T15:48:45",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507311120408596140",
                                        "source": "",
                                        "caption": "Atlanta Falcons head coach Dan Quinn directs his players during an NFL football training camp  Friday, July 31, 2015, in Flowery Branch, Ga. (AP Photo/John Bazemore)"
                                    }, {
                                        "imageId": "201507311121408806144",
                                        "source": "",
                                        "caption": "Atlanta Falcons head coach Dan Quinn works with Atlanta Falcons defensive end Jonathan Babineaux (95) during an NFL football training camp  Friday, July 31, 2015, in Flowery Branch, Ga. (AP Photo/John Bazemore)"
                                    }, {
                                        "imageId": "201507311122409306155",
                                        "source": "",
                                        "caption": "Atlanta Falcons outside linebacker  Vic Beasley works during an  NFL football training camp  Friday, July 31, 2015, in Flowery Branch, Ga. (AP Photo/John Bazemore)"
                                    }, {
                                        "imageId": "201507311122409636166",
                                        "source": "",
                                        "caption": "Atlanta Falcons head coach Dan Quinn works with linebacker Stansly Maponga (90) an NFL football training camp  Friday, July 31, 2015, in Flowery Branch, Ga. (AP Photo/John Bazemore)"
                                    }, {
                                        "imageId": "201507311123410026172",
                                        "source": "",
                                        "caption": "Atlanta Falcons head coach Dan Quinn, right, talks with general manager Thomas Dimitroff  during an NFL football training camp  Friday, July 31, 2015, in Flowery Branch, Ga. (AP Photo/John Bazemore)"
                                    }, {
                                        "imageId": "201507311127412736197",
                                        "source": "",
                                        "caption": "Atlanta Falcons quarterback Matt Ryan (2) works during an NFL football training camp  Friday, July 31, 2015, in Flowery Branch, Ga. (AP Photo/John Bazemore)"
                                    }, {
                                        "imageId": "201507311132415256230",
                                        "source": "",
                                        "caption": "Atlanta Falcons offensive lineman Matt Huffer cools down during an NFL football training camp  Friday, July 31, 2015, in Flowery Branch, Ga. (AP Photo/John Bazemore)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 13,
                                "headlineText": "Redskins CB Bashaud Breeland suspended for 1 game by NFL",
                                "storyId": "20150731154843415155208",
                                "originalStoryId": "20150731144300357112008",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 31,
                                    "hour": 15,
                                    "minute": 48,
                                    "second": 45,
                                    "full": "2015-07-31T15:48:45",
                                    "dateType": "Eastern"
                                },
                                "version": 2,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 14,
                                "headlineText": "Players' union, league seek quick resolution to Brady case",
                                "storyId": "20150731152504903139804",
                                "originalStoryId": "20150731144057491110208",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 31,
                                    "hour": 15,
                                    "minute": 25,
                                    "second": 10,
                                    "full": "2015-07-31T15:25:10",
                                    "dateType": "Eastern"
                                },
                                "version": 3,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507310834308545592",
                                        "source": "",
                                        "caption": "New England Patriots quarterback Tom Brady heads to the field for practice at an NFL football training camp Friday, July 31, 2015, in Foxborough, Mass. (AP Photo/Charles Krupa)"
                                    }, {
                                        "imageId": "201507311136418026260",
                                        "source": "",
                                        "caption": "New England Patriots quarterback Tom Brady throws during an NFL football training camp in Foxborough, Mass., Friday, July 31, 2015. (AP Photo/Charles Krupa)"
                                    }, {
                                        "imageId": "201507311138418966274",
                                        "source": "",
                                        "caption": "A New England Patriots fans hold a signs supporting quarterback Tom Brady while seated with thousands to watch practice during an NFL football training camp in Foxborough, Mass., Friday, July 31, 2015. (AP Photo/Charles Krupa)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 15,
                                "headlineText": "Chiefs veterans return to Missouri Western for training camp",
                                "storyId": "20150731150952705131408",
                                "originalStoryId": "20150731144159296111408",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 31,
                                    "hour": 15,
                                    "minute": 9,
                                    "second": 56,
                                    "full": "2015-07-31T15:09:56",
                                    "dateType": "Eastern"
                                },
                                "version": 1,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507311016370135761",
                                        "source": "",
                                        "caption": "Country music artist Kenny Chesney, center, visits with coaches at the Kansas City Chiefs NFL football training camp Friday, July 31, 2015,  in St. Joseph, Mo. Chesney is performing a concert Friday at Arrowhead Stadium in Kansas City, Mo. (Andrew Carpenean/The St. Joseph News-Press via AP) MANDATORY CREDIT"
                                    }, {
                                        "imageId": "201507311055393446013",
                                        "source": "",
                                        "caption": "Kansas City Chiefs quarterback Aaron Murray throws passes during an NFL football training camp practice Thursday, July 30, 2015, in St. Joseph, Mo. (Andrew Carpenean/The St. Joseph News-Press via AP) MANDATORY CREDIT"
                                    }
                                ]
                            }, {
                                "headlineSequence": 16,
                                "headlineText": "Ravens Jimmy Smith wants place among top NFL cornerbacks",
                                "storyId": "20150731144845955116008",
                                "originalStoryId": "20150731144845955116008",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 31,
                                    "hour": 14,
                                    "minute": 48,
                                    "second": 48,
                                    "full": "2015-07-31T14:48:48",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507311024374485816",
                                        "source": "",
                                        "caption": "Baltimore Ravens corner back Jimmy Smith (22), runs a drill during NFL football training camp, Friday, July 31, 2015, in Owings Mills, Md. (AP Photo/Gail Burton)"
                                    }, {
                                        "imageId": "201507311024374615821",
                                        "source": "",
                                        "caption": "Baltimore Ravens corner back Jimmy Smith (22), stretches during NFL football training camp, Friday, July 31, 2015, in Owings Mills, Md. (AP Photo/Gail Burton)"
                                    }, {
                                        "imageId": "201507311056393766015",
                                        "source": "",
                                        "caption": "Baltimore Ravens corner back Jimmy Smith passes a football during NFL football training camp, Friday, July 31, 2015, in Owings Mills, Md. (AP Photo/Gail Burton)"
                                    }, {
                                        "imageId": "201507311224446436575",
                                        "source": "",
                                        "caption": "Baltimore Ravens cornerback Jimmy Smith smiles as he answers questions from the media after NFL football training camp, Friday, July 31, 2015, in Owings Mills, Md. (AP Photo/Gail Burton)"
                                    }, {
                                        "imageId": "201507311224446746581",
                                        "source": "",
                                        "caption": "Baltimore Ravens cornerback Jimmy Smith smiles as he answers questions from the media after NFL football training camp, Friday, July 31, 2015, in Owings Mills, Md. (AP Photo/Gail Burton)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 17,
                                "headlineText": "Understated Beachum making big impact on Steelers line",
                                "storyId": "20150731135226273075708",
                                "originalStoryId": "20150731130607284042708",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 31,
                                    "hour": 13,
                                    "minute": 52,
                                    "second": 31,
                                    "full": "2015-07-31T13:52:31",
                                    "dateType": "Eastern"
                                },
                                "version": 1,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507261836670093145",
                                        "source": "",
                                        "caption": "Pittsburgh Steelers tackles Kelvin Beachum (68) and Alejandro Villanueva (78) toss a medicine ball  along with the rest of the offensive line during practice at NFL football training camp in Latrobe, Pa. on Sunday, July 26, 2015 . (AP Photo/Keith Srakocic)"
                                    }, {
                                        "imageId": "201507261840672223180",
                                        "source": "",
                                        "caption": "Members of local youth football teams stand with other fans as they watch Pittsburgh Steelers tackle Kelvin Beachum (68) go through drills during practice at NFL football training camp in Latrobe, Pa. on Sunday, July 26, 2015 . (AP Photo/Keith Srakocic)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 18,
                                "headlineText": "Receiver Abbrederis misses Packers practice with concussion",
                                "storyId": "20150731134034989068008",
                                "originalStoryId": "20150731134034989068008",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 31,
                                    "hour": 13,
                                    "minute": 40,
                                    "second": 39,
                                    "full": "2015-07-31T13:40:39",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 19,
                                "headlineText": "Wilson signs 4-year contract extension with Seahawks",
                                "storyId": "20150731132018100051908",
                                "originalStoryId": "20150731104642966951308",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 31,
                                    "hour": 13,
                                    "minute": 20,
                                    "second": 22,
                                    "full": "2015-07-31T13:20:22",
                                    "dateType": "Eastern"
                                },
                                "version": 2,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507310951354815678",
                                        "source": "",
                                        "caption": "FILE - In this Feb. 1, 2015, file photo, Seattle Seahawks quarterback Russell Wilson celebrates after throwing a touchdown pass during the first half of NFL Super Bowl XLIX football game against the New England Patriots in Glendale, Ariz. Russell Wilson is sticking around with the Seattle Seahawks.  Wilson tweeted Friday morning, July 31, 2015, that he has agreed to a four-year contract extension with the Seahawks, keeping him with the franchise that took him in the third round of the 2012 draft and watched him become one of the most successful young quarterbacks in NFL history.(AP Photo/David Goldman)"
                                    }, {
                                        "imageId": "201507310951355035679",
                                        "source": "",
                                        "caption": "FILE - In this Jan. 19, 2014, file photo, Seattle Seahawks head coach Pete Carroll celebrates with quarterback Russell Wilson after the second half of the NFL football NFC Championship game against the San Francisco 49ers in Seattle. Wilson tweeted Friday morning, July 31, 2015, that he has agreed to a four-year contract extension with the Seahawks, keeping him with the franchise that took him in the third round of the 2012 draft and watched him become one of the most successful young quarterbacks in NFL history(ASP Photo/Ted Warren, File)"
                                    }, {
                                        "imageId": "201507310951355035680",
                                        "source": "",
                                        "caption": "FILE - In this Feb. 1, 2015, file photo, Seattle Seahawks quarterback Russell Wilson (3) throws a pass during the first half of NFL Super Bowl XLIX football game against the New England Patriots in Glendale, Ariz. Wilson tweeted Friday morning, July 31, 2015, that he has agreed to a four-year contract extension with the Seahawks, keeping him with the franchise that took him in the third round of the 2012 draft and watched him become one of the most successful young quarterbacks in NFL history. (AP Photo/Ben Margot, File)"
                                    }, {
                                        "imageId": "201507310951355145690",
                                        "source": "",
                                        "caption": "FILE - This 2015, file photo showing Russell Wilson of the Seattle Seahawks NFL football team. Wilson tweeted Friday morning, July 31, 2015, that he has agreed to a four-year contract extension with the Seahawks, keeping him with the franchise that took him in the third round of the 2012 draft and watched him become one of the most successful young quarterbacks in NFL history. (AP Photo/File)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 20,
                                "headlineText": "Manning and Thomas back together after 201-day separation",
                                "storyId": "20150731124058766025604",
                                "originalStoryId": "20150731123634138022508",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 31,
                                    "hour": 12,
                                    "minute": 41,
                                    "second": 3,
                                    "full": "2015-07-31T12:41:03",
                                    "dateType": "Eastern"
                                },
                                "version": 1,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 21,
                                "headlineText": "What's new in NFL? Plenty",
                                "storyId": "20150731110954576965808",
                                "originalStoryId": "20150731110954576965808",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 31,
                                    "hour": 11,
                                    "minute": 9,
                                    "second": 57,
                                    "full": "2015-07-31T11:09:57",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507311004362675715",
                                        "source": "",
                                        "caption": "FILE - In this June 16, 2015, file photo, Buffalo Bills head coach Rex Ryan speaks to the media during NFL football minicamp in Orchard Park, N.Y. Rex Ryan already has become an iconic figure in western New York, even though he hasn't coached a scrimmage, let alone a game for the Bills. (AP Photo/Bill Wippert, File)"
                                    }, {
                                        "imageId": "201507311007364575727",
                                        "source": "",
                                        "caption": "FILE - In this Aug. 15, 2014, file photo, developmental line judge Sarah Thomas smiles in the second half of a preseason NFL football game between the Seattle Seahawks and the San Diego Chargers in Seattle. The NFL has its first full-time female game official. Sarah Thomas, who has worked exhibition games, will be a line judge for the 2015 season.  (AP Photo/Stephen Brashear, File)"
                                    }, {
                                        "imageId": "201507311008364905735",
                                        "source": "",
                                        "caption": "FILE - In this June 2, 2015, file photo, Seattle Seahawks tight end Jimmy Graham smiles as he talks to reporters after an NFL football organized team activity in Renton, Wash. The most significant change of address was made by Jimmy Graham, traded to Seattle by New Orleans. (AP Photo/Ted S. Warren, File)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 22,
                                "headlineText": "Bills defensive end Williams passes physical, joins camp",
                                "storyId": "20150731105615487956208",
                                "originalStoryId": "20150731105615487956208",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 31,
                                    "hour": 10,
                                    "minute": 56,
                                    "second": 17,
                                    "full": "2015-07-31T10:56:17",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 23,
                                "headlineText": "Jaguars' Chris Clemons arrives for training camp a day late",
                                "storyId": "20150731081808502879408",
                                "originalStoryId": "20150731081808502879408",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 31,
                                    "hour": 8,
                                    "minute": 18,
                                    "second": 10,
                                    "full": "2015-07-31T08:18:10",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 24,
                                "headlineText": "Cowboys' Bryant says he's a changed man money can't change",
                                "storyId": "20150731023842825767408",
                                "originalStoryId": "20150731023842825767408",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 31,
                                    "hour": 2,
                                    "minute": 38,
                                    "second": 45,
                                    "full": "2015-07-31T02:38:45",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507301527556323998",
                                        "source": "",
                                        "caption": "Dallas Cowboys wide receiver Dez Bryant (88) and quarterback Tony Romo (9) take the field during Dallas Cowboys NFL football training camp, Thursday, July 30, 2015, in Oxnard, Calif. (AP Photo/Gus Ruelas)"
                                    }, {
                                        "imageId": "201507301529557904009",
                                        "source": "",
                                        "caption": "Dallas Cowboys quarterback Tony Romo takes questions from the media after morning practice during Dallas Cowboys NFL football training camp, Thursday, July 30, 2015, in Oxnard, Calif. (AP Photo/Gus Ruelas)"
                                    }, {
                                        "imageId": "201507301530558554013",
                                        "source": "",
                                        "caption": "Dallas Cowboys wide receiver Dez Bryant (88) reacts to his teammates during the team's NFL football training camp, Thursday, July 30, 2015, in Oxnard, Calif. (AP Photo/Gus Ruelas)"
                                    }, {
                                        "imageId": "201507301531558904023",
                                        "source": "",
                                        "caption": "Dallas Cowboys wide receiver Dez Bryant (88) makes a reception as he warms up during the team's NFL training camp, Thursday, July 30, 2015, in Oxnard, Calif. (AP Photo/Gus Ruelas)"
                                    }, {
                                        "imageId": "201507301535561024031",
                                        "source": "",
                                        "caption": "Dallas Cowboys wide receiver Dez Bryant (88) yawns in the middle of a drill during the team's NFL football training camp, Thursday, July 30, 2015, in Oxnard, Calif. (AP Photo/Gus Ruelas)"
                                    }, {
                                        "imageId": "201507301535561344035",
                                        "source": "",
                                        "caption": "Dallas Cowboys cornerback Morris Claiborne, left, guards wide receiver Dez Bryant (88) as they run a drill during NFL football training camp, Thursday, July 30, 2015, in Oxnard, Calif. (AP Photo/Gus Ruelas)"
                                    }, {
                                        "imageId": "201507302043745884837",
                                        "source": "",
                                        "caption": "Dallas Cowboys wide receiver Dez Bryant takes questions from members of the media during NFL training camp, Thursday, July 30, 2015, in Oxnard, Calif. (AP Photo/Gus Ruelas)"
                                    }, {
                                        "imageId": "201507302043745884838",
                                        "source": "",
                                        "caption": "Dallas Cowboys wide receiver Dez Bryant (88) talks with teammate wide receiver Devin Street (15) during Dallas Cowboys' NFL training camp, Thursday, July 30, 2015, in Oxnard, Calif. (AP Photo/Gus Ruelas)"
                                    }, {
                                        "imageId": "201507302043745884839",
                                        "source": "",
                                        "caption": "Dallas Cowboys wide receiver Dez Bryant takes questions from the media during Dallas Cowboys' NFL training camp, Thursday, July 30, 2015, in Oxnard, Calif. (AP Photo/Gus Ruelas)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 25,
                                "headlineText": "Falcons OL Holmes goes on physically unable to perform list",
                                "storyId": "20150730230659780581808",
                                "originalStoryId": "20150730230659780581808",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 23,
                                    "minute": 7,
                                    "second": 4,
                                    "full": "2015-07-30T23:07:04",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 26,
                                "headlineText": "Same ol' Dez: Enthusiastic Bryant back on field with Cowboys",
                                "storyId": "20150730220827013527708",
                                "originalStoryId": "20150730180909570385908",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 22,
                                    "minute": 8,
                                    "second": 31,
                                    "full": "2015-07-30T22:08:31",
                                    "dateType": "Eastern"
                                },
                                "version": 2,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507301527556323998",
                                        "source": "",
                                        "caption": "Dallas Cowboys wide receiver Dez Bryant (88) and quarterback Tony Romo (9) take the field during Dallas Cowboys NFL football training camp, Thursday, July 30, 2015, in Oxnard, Calif. (AP Photo/Gus Ruelas)"
                                    }, {
                                        "imageId": "201507301529557904009",
                                        "source": "",
                                        "caption": "Dallas Cowboys quarterback Tony Romo takes questions from the media after morning practice during Dallas Cowboys NFL football training camp, Thursday, July 30, 2015, in Oxnard, Calif. (AP Photo/Gus Ruelas)"
                                    }, {
                                        "imageId": "201507301530558554013",
                                        "source": "",
                                        "caption": "Dallas Cowboys wide receiver Dez Bryant (88) reacts to his teammates during the team's NFL football training camp, Thursday, July 30, 2015, in Oxnard, Calif. (AP Photo/Gus Ruelas)"
                                    }, {
                                        "imageId": "201507301531558904023",
                                        "source": "",
                                        "caption": "Dallas Cowboys wide receiver Dez Bryant (88) makes a reception as he warms up during the team's NFL training camp, Thursday, July 30, 2015, in Oxnard, Calif. (AP Photo/Gus Ruelas)"
                                    }, {
                                        "imageId": "201507301535561024031",
                                        "source": "",
                                        "caption": "Dallas Cowboys wide receiver Dez Bryant (88) yawns in the middle of a drill during the team's NFL football training camp, Thursday, July 30, 2015, in Oxnard, Calif. (AP Photo/Gus Ruelas)"
                                    }, {
                                        "imageId": "201507301535561344035",
                                        "source": "",
                                        "caption": "Dallas Cowboys cornerback Morris Claiborne, left, guards wide receiver Dez Bryant (88) as they run a drill during NFL football training camp, Thursday, July 30, 2015, in Oxnard, Calif. (AP Photo/Gus Ruelas)"
                                    }, {
                                        "imageId": "201507302043745884837",
                                        "source": "",
                                        "caption": "Dallas Cowboys wide receiver Dez Bryant takes questions from members of the media during NFL training camp, Thursday, July 30, 2015, in Oxnard, Calif. (AP Photo/Gus Ruelas)"
                                    }, {
                                        "imageId": "201507302043745884839",
                                        "source": "",
                                        "caption": "Dallas Cowboys wide receiver Dez Bryant takes questions from the media during Dallas Cowboys' NFL training camp, Thursday, July 30, 2015, in Oxnard, Calif. (AP Photo/Gus Ruelas)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 27,
                                "headlineText": "Jets' Richardson facing charges for resisting arrest",
                                "storyId": "20150730220121541522408",
                                "originalStoryId": "20150730180654189385408",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 22,
                                    "minute": 1,
                                    "second": 25,
                                    "full": "2015-07-30T22:01:25",
                                    "dateType": "Eastern"
                                },
                                "version": 4,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507301632595254206",
                                        "source": "",
                                        "caption": "New York Jets defensive end Sheldon Richardson responds to questions during a news interview after practice at training camp, Thursday, July 30, 2015, in Florham Park, N.J. (AP Photo/Frank Franklin II)"
                                    }, {
                                        "imageId": "201507301637598674226",
                                        "source": "",
                                        "caption": "New York Jets defensive end Sheldon Richardson responds to questions during a news interview after practice at training camp, Thursday, July 30, 2015, in Florham Park, N.J. (AP Photo/Frank Franklin II)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 28,
                                "headlineText": "Gates not sure how banned substance got into his system",
                                "storyId": "20150730212130570490008",
                                "originalStoryId": "20150730212130570490008",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 21,
                                    "minute": 21,
                                    "second": 31,
                                    "full": "2015-07-30T21:21:31",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507301603578314132",
                                        "source": "",
                                        "caption": "San Diego Chargers quarterback Philip Rivers throws a pass during drills at opening day of training camp at Chargers' Park Thursday, July 30, 2015, in San Diego. (AP Photo/Lenny Ignelzi)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 29,
                                "headlineText": "Without new contract, Jets' Wilkerson focused on football",
                                "storyId": "20150730211758362488408",
                                "originalStoryId": "20150730211758362488408",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 21,
                                    "minute": 17,
                                    "second": 59,
                                    "full": "2015-07-30T21:17:59",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507301634596804214",
                                        "source": "",
                                        "caption": "New York Jets defensive end Muhammad Wilkerson responds to questions during a news interview after practice at training camp, Thursday, July 30, 2015, in Florham Park, N.J. (AP Photo/Frank Franklin II)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 30,
                                "headlineText": "Packers offense opens training camp with running start",
                                "storyId": "20150730205957280478608",
                                "originalStoryId": "20150730184247959404208",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 21,
                                    "minute": 0,
                                    "second": 1,
                                    "full": "2015-07-30T21:00:01",
                                    "dateType": "Eastern"
                                },
                                "version": 1,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507301042385502427",
                                        "source": "",
                                        "caption": "Green Bay Packers head coach Mike McCarthy watches a drill during NFL football training camp Thursday, July 30, 2015, in Green Bay, Wis. (AP Photo/Morry Gash)"
                                    }, {
                                        "imageId": "201507301042385622438",
                                        "source": "",
                                        "caption": "Green Bay Packers' Aaron Rodgers smiles during NFL football training camp Thursday, July 30, 2015, in Green Bay, Wis. (AP Photo/Morry Gash)"
                                    }, {
                                        "imageId": "201507301044386432461",
                                        "source": "",
                                        "caption": "Green Bay Packers' Aaron Rodgers runs a drill during NFL football training camp Thursday, July 30, 2015, in Green Bay, Wis. (AP Photo/Morry Gash)"
                                    }, {
                                        "imageId": "201507301044386472465",
                                        "source": "",
                                        "caption": "Green Bay Packers' Jordy Nelson rides a bike to NFL football training camp Thursday, July 30, 2015, in Green Bay, Wis. (AP Photo/Morry Gash)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 31,
                                "headlineText": "Kubiak hoping history repeats itself with Elway, Manning",
                                "storyId": "20150730201944927460108",
                                "originalStoryId": "20150730201944927460108",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 20,
                                    "minute": 19,
                                    "second": 47,
                                    "full": "2015-07-30T20:19:47",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507301607580244160",
                                        "source": "",
                                        "caption": "Joe Ellis, left, president and chief executive officer of the Denver Broncos, jokes with Elizabeth Concordia, center, chief executive officer and president of UCHealth, and UCHealth physician Dr. Richard Schulick during a news conference to announce a partnership between the team and the health care provider at the Broncos' NFL football training camp Thursday, July 30, 2015, in Englewood, Colo. (AP Photo/David Zalubowski)"
                                    }, {
                                        "imageId": "201507301611583074164",
                                        "source": "",
                                        "caption": "John Elway, general manager of the Denver Broncos, responds to questions during a news conference at the team's NFL football training camp Thursday, July 30, 2015, in Englewood, Colo. (AP Photo/David Zalubowski)"
                                    }, {
                                        "imageId": "201507301619587504178",
                                        "source": "",
                                        "caption": "Denver Broncos head coach Gary Kubiak jokes about his new haircut, which he said that he received during a visit to Houston, during a news conference at the team's NFL football training camp Thursday, July 30, 2015, in Englewood, Colo. (AP Photo/David Zalubowski)"
                                    }, {
                                        "imageId": "201507301619587694179",
                                        "source": "",
                                        "caption": "Denver Broncos wide receiver Emmanuel Sanders jokes with reporters during a news conference at the team's NFL football training camp Thursday, July 30, 2015, in Englewood, Colo. (AP Photo/David Zalubowski)"
                                    }, {
                                        "imageId": "201507301619587694181",
                                        "source": "",
                                        "caption": "Denver Broncos head coach Gary Kubiak makes a point during a news conference at the team's NFL football training camp Thursday, July 30, 2015, in Englewood, Colo. (AP Photo/David Zalubowski)"
                                    }, {
                                        "imageId": "201507301619587824190",
                                        "source": "",
                                        "caption": "Denver Broncos general manager John Elway leaves a news conference at the team's NFL football training camp Thursday, July 30, 2015, in Englewood, Colo. (AP Photo/David Zalubowski)"
                                    }, {
                                        "imageId": "201507301621589054198",
                                        "source": "",
                                        "caption": "Denver Broncos general manager John Elway responds to questions during a news conference at the team's NFL football training camp Thursday, July 30, 2015, in Englewood, Colo. (AP Photo/David Zalubowski)"
                                    }, {
                                        "imageId": "201507301626591994202",
                                        "source": "",
                                        "caption": "Denver Broncos president and chief executive officer Joe Ellis, left, fields a question during a news conference as Elizabeth Concordia, center, president and chief executive officer of UCHealth, and physician Dr. Richard Schulick look on at the team's NFL football training camp Thursday, July 30, 2015, in Englewood, Colo. The health care provider and the Broncos have joined forces in a partnership. (AP Photo/David Zalubowski)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 32,
                                "headlineText": "Bengals DT Devon Still relieved about daughter as camp opens",
                                "storyId": "20150730200426218453808",
                                "originalStoryId": "20150730174020468372708",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 20,
                                    "minute": 4,
                                    "second": 27,
                                    "full": "2015-07-30T20:04:27",
                                    "dateType": "Eastern"
                                },
                                "version": 1,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 33,
                                "headlineText": "Steelers' Cortez Allen, Jarvis Jones looking to bounce back",
                                "storyId": "20150730195348464446208",
                                "originalStoryId": "20150730190820803420108",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 19,
                                    "minute": 53,
                                    "second": 51,
                                    "full": "2015-07-30T19:53:51",
                                    "dateType": "Eastern"
                                },
                                "version": 1,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507261859683813230",
                                        "source": "",
                                        "caption": "Pittsburgh Steelers cornerback Cortez Allen yells after he missed coming up with an interception during practice at NFL football training camp in Latrobe, Pa., Sunday, July 26, 2015 . (AP Photo/Keith Srakocic)"
                                    }, {
                                        "imageId": "201507301736633934329",
                                        "source": "",
                                        "caption": "Pittsburgh Steelers outside linebacker Jarvis Jones takes a drink during practice at NFL football training camp in Latrobe, Pa., Thursday, July 30, 2015. (AP Photo/Keith Srakocic)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 34,
                                "headlineText": "Redskins' RG3 not looking back, his 'focus on the future'",
                                "storyId": "20150730193130322435508",
                                "originalStoryId": "20150730131705603212808",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 19,
                                    "minute": 31,
                                    "second": 34,
                                    "full": "2015-07-30T19:31:34",
                                    "dateType": "Eastern"
                                },
                                "version": 2,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507301123409822661",
                                        "source": "",
                                        "caption": "Washington Redskins outside linebacker Ryan Kerrigan signs autographs for fans during the teams NFL football training camp in Richmond, Va., Thursday, July 30, 2015.  (AP Photo/Jason Hirschfeld)"
                                    }, {
                                        "imageId": "201507301124410482676",
                                        "source": "",
                                        "caption": "Washington Redskins quarterback Robert Griffin III speaks to the media during the teams NFL football training camp in Richmond, Va., Thursday, July 30, 2015.   (AP Photo/Jason Hirschfeld)"
                                    }, {
                                        "imageId": "201507301124410812685",
                                        "source": "",
                                        "caption": "Washington Redskins quarterback Robert Griffin III speaks to the media during the teams NFL football training camp in Richmond, Va., Thursday, July 30, 2015.   (AP Photo/Jason Hirschfeld)"
                                    }, {
                                        "imageId": "201507301526555953989",
                                        "source": "",
                                        "caption": "Washington Redskins head coach Jay Gruden, left, and quarterback Robert Griffin III talk during the teams NFL football training camp in Richmond, Va., Thursday, July 30, 2015. (AP Photo/Jason Hirschfeld) (AP Photo/Jason Hirschfeld)"
                                    }, {
                                        "imageId": "201507301529557554005",
                                        "source": "",
                                        "caption": "Washingon Redskins quarterback Robert Griffin III runs with the ball during the teams NFL football training camp in Richmond, Va., Thursday, July 30, 2015.   (AP Photo/Jason Hirschfeld)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 35,
                                "headlineText": "Bengals sign WR Greg Little, rookie Desmond Lawrence",
                                "storyId": "20150730185107303409408",
                                "originalStoryId": "20150730185107303409408",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 18,
                                    "minute": 51,
                                    "second": 9,
                                    "full": "2015-07-30T18:51:09",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 36,
                                "headlineText": "John Mara says Giants have not been allowed to examine JPP",
                                "storyId": "20150730184707683407704",
                                "originalStoryId": "20150730161132354320108",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 18,
                                    "minute": 47,
                                    "second": 17,
                                    "full": "2015-07-30T18:47:17",
                                    "dateType": "Eastern"
                                },
                                "version": 5,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507280833307876288",
                                        "source": "",
                                        "caption": "FILE - In this Sunday, Dec. 28, 2014, file photo, New York Giants' Jason Pierre-Paul (90) reacts after sacking Philadelphia Eagles' Mark Sanchez during the first half of an NFL football game in East Rutherford, N.J. Any chance of normalcy disappeared on July 4, when star defensive end Pierre-Paul was injured in a fireworks accident in Florida. (AP Photo/Bill Kostroun, File)"
                                    }, {
                                        "imageId": "201507301600576274120",
                                        "source": "",
                                        "caption": "FILE - In this Sunday, Dec. 28, 2014, file photo, New York Giants' Jason Pierre-Paul (90) reacts after sacking Philadelphia Eagles' Mark Sanchez during the first half of an NFL football game in East Rutherford, N.J. The Giants have no firsthand knowledge about the extent of the hand injuries Pro Bowl defensive end Pierre-Paul sustained in a July 4, 2015, fireworks accident in Florida. Team co-owner John Mara disclosed that most of the Giants' knowledge about JPP's condition has come from his agents and through text messages with the 26-year-old, who was tagged as a franchise player and due to make at least $14.8 million this season. (AP Photo/Bill Kostroun, File)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 37,
                                "headlineText": "Saints veterans set tone at training camp's outset",
                                "storyId": "20150730184331315404908",
                                "originalStoryId": "20150730184331315404908",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 18,
                                    "minute": 43,
                                    "second": 35,
                                    "full": "2015-07-30T18:43:35",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507301404506703460",
                                        "source": "",
                                        "caption": "New Orleans Saints running back Khiry Robinson (29) runs the ball during the team's NFL football training camp in White Sulphur Springs, W. Va., Thursday, July 30, 2015. (AP Photo/Chris Tilley)"
                                    }, {
                                        "imageId": "201507301411510763493",
                                        "source": "",
                                        "caption": "A foggy mist rolls off the mountains near the New Orleans Saints NFL football training camp in White Sulphur Springs, W. Va., Thursday, July 30, 2015. (AP Photo/Chris Tilley)"
                                    }, {
                                        "imageId": "201507301411510893504",
                                        "source": "",
                                        "caption": "New Orleans Saints' Stephone Anthony (50) directs the defense at the teams NFL football training camp in White Sulphur Springs, W. Va., Thursday, July 30, 2015. (AP Photo/Chris Tilley)"
                                    }, {
                                        "imageId": "201507301411511103507",
                                        "source": "",
                                        "caption": "New Orleans Saints head coach Sean Payton and New Orleans Saints quarterback Drew Brees (9) during the team's NFL football training camp in White Sulphur Springs, W. Va., Thursday, July 30, 2015. (AP Photo/Chris Tilley)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 38,
                                "headlineText": "Bears' Allen out to prove he's still elite pass rusher",
                                "storyId": "20150730183940984402508",
                                "originalStoryId": "20150730183940984402508",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 18,
                                    "minute": 39,
                                    "second": 43,
                                    "full": "2015-07-30T18:39:43",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507291745639480071",
                                        "source": "",
                                        "caption": "Chicago Bears linebacker Jared Allen speaks during an NFL football training camp media availability at Olivet Nazarene University, Wednesday, July 29, 2015, in Bourbonnais, Ill. (AP Photo/Nam Y. Huh)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 39,
                                "headlineText": "Titans agree to terms with nose tackle Isaako Aaitui",
                                "storyId": "20150730182919932390708",
                                "originalStoryId": "20150730182919932390708",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 18,
                                    "minute": 29,
                                    "second": 24,
                                    "full": "2015-07-30T18:29:24",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 40,
                                "headlineText": "Bills coach Kromer pleads not guilty to battery",
                                "storyId": "20150730175715633379908",
                                "originalStoryId": "20150730175715633379908",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 17,
                                    "minute": 57,
                                    "second": 19,
                                    "full": "2015-07-30T17:57:19",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 41,
                                "headlineText": "Patriots open camp, try to ignore 'Deflategate' noise",
                                "storyId": "20150730175258169378308",
                                "originalStoryId": "20150730093222155092008",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 17,
                                    "minute": 53,
                                    "second": 3,
                                    "full": "2015-07-30T17:53:03",
                                    "dateType": "Eastern"
                                },
                                "version": 2,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507300854320532002",
                                        "source": "",
                                        "caption": "New England Patriots head coach Bill Belichick listens to a question as he meets with the media before the team's first practice at an NFL football training camp Thursday, July 30, 2015, in Foxborough, Mass. (AP Photo/Charles Krupa)"
                                    }, {
                                        "imageId": "201507300958358822223",
                                        "source": "",
                                        "caption": "New England Patriots quarterback Tom Brady clutches the football during an NFL training camp in Foxborough, Mass., Thursday, July 30, 2015. (AP Photo/Charles Krupa)"
                                    }, {
                                        "imageId": "201507300958358822224",
                                        "source": "",
                                        "caption": "New England Patriots quarterback Tom Brady throws during an NFL football training camp in Foxborough, Mass., Thursday, July 30, 2015. (AP Photo/Charles Krupa)"
                                    }, {
                                        "imageId": "201507300958358922230",
                                        "source": "",
                                        "caption": "New England Patriots quarterback Tom Brady wipes the sweat from his head during an NFL football training camp in Foxborough, Mass., Thursday, July 30, 2015. (AP Photo/Charles Krupa)"
                                    }, {
                                        "imageId": "201507300958359142231",
                                        "source": "",
                                        "caption": "New England Patriots quarterback Tom Brady, right, gets set to run a drill with his back-up Jimmy Garoppolo during an NFL football training camp in Foxborough, Mass., Thursday, July 30, 2015. (AP Photo/Charles Krupa)"
                                    }, {
                                        "imageId": "201507300959359462239",
                                        "source": "",
                                        "caption": "A fan holds a sign reading \"Free Brady\" as New England Patriots quarterback Tom Brady, left, prepares to practice with his back-up Jimmy Garoppolo during an NFL football training camp in Foxborough, Mass., Thursday, July 30, 2015. (AP Photo/Charles Krupa)"
                                    }, {
                                        "imageId": "201507300959359772243",
                                        "source": "",
                                        "caption": "A football rests tangled in the netting of a practice field as the New England Patriots participate in their first NFL football training camp of the season in Foxborough, Mass., Thursday, July 30, 2015. (AP Photo/Charles Krupa)"
                                    }, {
                                        "imageId": "201507301014368642287",
                                        "source": "",
                                        "caption": "A banner towed by an airplane over the New England Patriots' practice field reads \"Cheaters Look Up!\" as it passes the lighting rack above Gillette Stadium during an NFL football training camp in Foxborough, Mass., Thursday, July 30, 2015. (AP Photo/Charles Krupa)"
                                    }, {
                                        "imageId": "201507301014368972293",
                                        "source": "",
                                        "caption": "A fan holds a sign reading \"Free Brady\" as New England Patriots quarterback Tom Brady, left, prepares to practice with his back-up Jimmy Garoppolo during an NFL football training camp in Foxborough, Mass., Thursday, July 30, 2015. (AP Photo/Charles Krupa)"
                                    }, {
                                        "imageId": "201507301019371632333",
                                        "source": "",
                                        "caption": "New England Patriots quarterback Tom Brady scrambles as he is hit by blocking arms during an NFL football training camp in Foxborough, Mass., Thursday, July 30, 2015. (AP Photo/Charles Krupa)"
                                    }, {
                                        "imageId": "201507301019371802335",
                                        "source": "",
                                        "caption": "New England Patriots fans hold signs supporting quarterback Tom Brady during an NFL football training camp in Foxborough, Mass., Thursday, July 30, 2015. (AP Photo/Charles Krupa)"
                                    }, {
                                        "imageId": "201507301219443443018",
                                        "source": "",
                                        "caption": "New England Patriots fans wait for practice to complete, while standing behind a sign supporting quarterback Tom Brady, during an NFL football training camp in Foxborough, Mass., Thursday, July 30, 2015. (AP Photo/Charles Krupa)"
                                    }, {
                                        "imageId": "201507301219443763031",
                                        "source": "",
                                        "caption": "New England Patriots owner Robert Kraft signs autographs for fans, as he passes a sign supporting quarterback Tom Brady, during an NFL football training camp in Foxborough, Mass., Thursday, July 30, 2015. (AP Photo/Charles Krupa)"
                                    }, {
                                        "imageId": "201507301220444093042",
                                        "source": "",
                                        "caption": "A New England Patriots fan, wearing a Che Guevara-like t-shirt depicting quarterback Tom Brady, waits for a chance to get an autograph during an NFL football training camp in Foxborough, Mass., Thursday, July 30, 2015. (AP Photo/Charles Krupa)"
                                    }, {
                                        "imageId": "201507301243457803123",
                                        "source": "",
                                        "caption": "New England Patriots quarterback Tom Brady wipes the sweat from his head during an NFL football training camp in Foxborough, Mass., Thursday, July 30, 2015. (AP Photo/Charles Krupa)"
                                    }, {
                                        "imageId": "201507301303470153255",
                                        "source": "",
                                        "caption": "New England Patriots fans wait for practice to complete, while standing behind a sign supporting quarterback Tom Brady, during an NFL football training camp in Foxborough, Mass., Thursday, July 30, 2015. (AP Photo/Charles Krupa)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 42,
                                "headlineText": "Keith Rivers retires instead of reporting to Cowboys' camp",
                                "storyId": "20150730174251680374108",
                                "originalStoryId": "20150730174251680374108",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 17,
                                    "minute": 42,
                                    "second": 54,
                                    "full": "2015-07-30T17:42:54",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 43,
                                "headlineText": "Bills place Williams on active/non-football injury list",
                                "storyId": "20150730170451123352108",
                                "originalStoryId": "20150730164152930339308",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 17,
                                    "minute": 4,
                                    "second": 51,
                                    "full": "2015-07-30T17:04:51",
                                    "dateType": "Eastern"
                                },
                                "version": 1,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 44,
                                "headlineText": "Brady lawsuit transferred from Minnesota to New York court",
                                "storyId": "20150730170117980350804",
                                "originalStoryId": "20150730101643589115208",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 17,
                                    "minute": 1,
                                    "second": 25,
                                    "full": "2015-07-30T17:01:25",
                                    "dateType": "Eastern"
                                },
                                "version": 7,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507281401505126885",
                                        "source": "",
                                        "caption": "FILE - In this May 7, 2015, file photo, New England Patriots quarterback Tom Brady gestures during an event at Salem State University in Salem, Mass. Brady's four-game suspension for his role in using underinflated footballs during the AFC championship game last season has been upheld by NFL Commissioner Roger Goodell. The league announced the decision Tuesday, July 28, 2015. (AP Photo/Charles Krupa, Pool)"
                                    }, {
                                        "imageId": "201507281715621217193",
                                        "source": "",
                                        "caption": "Members of the media stand along a road Tuesday, July 28, 2015 near a residence of New England Patriots football quarterback Tom Brady, in Brookline, Mass. Brady's four-game suspension for his role in using underinflated footballs during the AFC championship game has been upheld by NFL Commissioner Roger Goodell. (AP Photo/Steven Senne)"
                                    }, {
                                        "imageId": "201507300841312641973",
                                        "source": "",
                                        "caption": "New England Patriots head coach Bill Belichick listens to a question as he meets with the media before the team's first practice at an NFL football training camp Thursday, July 30, 2015, in Foxborough, Mass. Belichick is stonewalling questions about deflated footballs for the second straight day. Belichick said before the team's first practice of training camp on Thursday that he's only worried about the day's practice. (AP Photo/Charles Krupa)"
                                    }, {
                                        "imageId": "201507300958358822223",
                                        "source": "",
                                        "caption": "New England Patriots quarterback Tom Brady clutches the football during an NFL training camp in Foxborough, Mass., Thursday, July 30, 2015. (AP Photo/Charles Krupa)"
                                    }, {
                                        "imageId": "201507300958358822224",
                                        "source": "",
                                        "caption": "New England Patriots quarterback Tom Brady throws during an NFL football training camp in Foxborough, Mass., Thursday, July 30, 2015. (AP Photo/Charles Krupa)"
                                    }, {
                                        "imageId": "201507300958358922230",
                                        "source": "",
                                        "caption": "New England Patriots quarterback Tom Brady wipes the sweat from his head during an NFL football training camp in Foxborough, Mass., Thursday, July 30, 2015. (AP Photo/Charles Krupa)"
                                    }, {
                                        "imageId": "201507300958359142231",
                                        "source": "",
                                        "caption": "New England Patriots quarterback Tom Brady, right, gets set to run a drill with his back-up Jimmy Garoppolo during an NFL football training camp in Foxborough, Mass., Thursday, July 30, 2015. (AP Photo/Charles Krupa)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 45,
                                "headlineText": "Titans rookie QB tried surfing, prefers boogie board",
                                "storyId": "20150730165457188345408",
                                "originalStoryId": "20150730165457188345408",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 16,
                                    "minute": 54,
                                    "second": 58,
                                    "full": "2015-07-30T16:54:58",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507301427520553654",
                                        "source": "",
                                        "caption": "Tennessee Titans quarterback Marcus Mariota, left, waits for his turn at the microphone during a news conference Thursday, July 30, 2015, in Nashville, Tenn. The Titans, who had a 2-14 record last season, begin NFL football training camp Friday. (AP Photo/Mark Humphrey)"
                                    }, {
                                        "imageId": "201507301428520883666",
                                        "source": "",
                                        "caption": "Tennessee Titans quarterback Marcus Mariota answers questions during a news conference Thursday, July 30, 2015, in Nashville, Tenn. The Titans, who had a 2-14 record last season, begin NFL football training camp Friday. (AP Photo/Mark Humphrey)"
                                    }, {
                                        "imageId": "201507301430522123678",
                                        "source": "",
                                        "caption": "Tennessee Titans quarterback Marcus Mariota listens to a question during a news conference Thursday, July 30, 2015, in Nashville, Tenn. The Titans, who had a 2-14 record last season, begin NFL football training camp Friday. (AP Photo/Mark Humphrey)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 46,
                                "headlineText": "Gurley ahead of schedule for Rams",
                                "storyId": "20150730164048925337808",
                                "originalStoryId": "20150730144407839256208",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 16,
                                    "minute": 40,
                                    "second": 49,
                                    "full": "2015-07-30T16:40:49",
                                    "dateType": "Eastern"
                                },
                                "version": 1,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507281019371736582",
                                        "source": "",
                                        "caption": "FILE - In this June 4, 2015, file photo, St. Louis Rams running back Todd Gurley runs with the ball during an NFL football organized team activity in St. Louis. The former Georgia standout was the 10th pick of the draft even though he was coming off midseason left knee surgery. (AP Photo/Jeff Roberson, File)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 47,
                                "headlineText": "Bears' Jennings pleads guilty to reckless driving charge",
                                "storyId": "20150730163521445334808",
                                "originalStoryId": "20150730163521445334808",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 16,
                                    "minute": 35,
                                    "second": 26,
                                    "full": "2015-07-30T16:35:26",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 48,
                                "headlineText": "Pryor trying to catch on as wide receiver with Browns",
                                "storyId": "20150730163512956334608",
                                "originalStoryId": "20150730133823952222308",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 16,
                                    "minute": 35,
                                    "second": 17,
                                    "full": "2015-07-30T16:35:17",
                                    "dateType": "Eastern"
                                },
                                "version": 2,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507301213440192972",
                                        "source": "",
                                        "caption": "Cleveland Browns wide receiver Terrelle Pryor talks with the media after practice at the NFL football team's training camp Thursday, July 30, 2015, in Berea, Ohio. Pryor has been a quarterback his entire football life, but the gifted athlete is swtiching positions at the highest level, trying to win a roster spot as a wide receiver for the Cleveland Browns. He's impressive in pads, but the Browns need him to do more than look good in his uniform. (AP Photo/Tony Dejak)"
                                    }, {
                                        "imageId": "201507301213440242974",
                                        "source": "",
                                        "caption": "Cleveland Browns wide receiver Terrelle Pryor catches a pass during practice at the NFL football team's training camp Thursday, July 30, 2015, in Berea, Ohio. Pryor has been a quarterback his entire football life, but the gifted athlete is swtiching positions at the highest level, trying to win a roster spot as a wide receiver for the Cleveland Browns. He's impressive in pads, but the Browns need him to do more than look good in his uniform. (AP Photo/Tony Dejak)"
                                    }, {
                                        "imageId": "201507301214440512981",
                                        "source": "",
                                        "caption": "Cleveland Browns wide receiver Terrelle Pryor catches a pass during practice at the NFL football team's training camp Thursday, July 30, 2015, in Berea, Ohio. Pryor has been a quarterback his entire football life, but the gifted athlete is swtiching positions at the highest level, trying to win a roster spot as a wide receiver for the Cleveland Browns. He's impressive in pads, but the Browns need him to do more than look good in his uniform. (AP Photo/Tony Dejak)"
                                    }, {
                                        "imageId": "201507301242457473114",
                                        "source": "",
                                        "caption": "Cleveland Browns head coach Mike Pettine watches as the Browns practice at the NFL football team's training camp Thursday, July 30, 2015, in Berea, Ohio. (AP Photo/Tony Dejak)"
                                    }, {
                                        "imageId": "201507301242457573117",
                                        "source": "",
                                        "caption": "Cleveland Browns quarterback Johnny Manziel, right, hands a football back to Carter Atwater, 5, from Rocky River, Ohio after signing it after practice at the NFL football team's training camp Thursday, July 30, 2015, in Berea, Ohio. (AP Photo/Tony Dejak)"
                                    }, {
                                        "imageId": "201507301258467213241",
                                        "source": "",
                                        "caption": "Cleveland Browns wide receiver Vince Mayle (85) and defensive back K'Waun Williams (36) run through drills during practice at the NFL football team's training camp Thursday, July 30, 2015, in Berea, Ohio. (AP Photo/Tony Dejak)"
                                    }, {
                                        "imageId": "201507301315477483305",
                                        "source": "",
                                        "caption": "Cleveland Browns quarterback Josh McCown (13) and quarterback Johnny Manziel (2) practice at the NFL football team's training camp Thursday, July 30, 2015, in Berea, Ohio. (AP Photo/Tony Dejak)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 49,
                                "headlineText": "Titans eager to start training camp after ugly 2-14 season",
                                "storyId": "20150730163237811333308",
                                "originalStoryId": "20150730163237811333308",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 16,
                                    "minute": 32,
                                    "second": 42,
                                    "full": "2015-07-30T16:32:42",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507301428520883666",
                                        "source": "",
                                        "caption": "Tennessee Titans quarterback Marcus Mariota answers questions during a news conference Thursday, July 30, 2015, in Nashville, Tenn. The Titans, who had a 2-14 record last season, begin NFL football training camp Friday. (AP Photo/Mark Humphrey)"
                                    }, {
                                        "imageId": "201507301430522123678",
                                        "source": "",
                                        "caption": "Tennessee Titans quarterback Marcus Mariota listens to a question during a news conference Thursday, July 30, 2015, in Nashville, Tenn. The Titans, who had a 2-14 record last season, begin NFL football training camp Friday. (AP Photo/Mark Humphrey)"
                                    }, {
                                        "imageId": "201507301439527623716",
                                        "source": "",
                                        "caption": "Tennessee Titans quarterback Marcus Mariota answers a question during a news conference Thursday, July 30, 2015, in Nashville, Tenn. The Titans begin NFL football training camp Friday. (AP Photo/Mark Humphrey)"
                                    }, {
                                        "imageId": "201507301444530483730",
                                        "source": "",
                                        "caption": "Tennessee Titans quarterback Marcus Mariota answers a question during a news conference Thursday, July 30, 2015, in Nashville, Tenn. The Titans begin NFL football training camp Friday. (AP Photo/Mark Humphrey)"
                                    }, {
                                        "imageId": "201507301444530673731",
                                        "source": "",
                                        "caption": "Tennessee Titans head coach Ken Whisenhunt answers questions during a news conference Thursday, July 30, 2015, in Nashville, Tenn. The Titans begin NFL football training camp Friday. (AP Photo/Mark Humphrey)"
                                    }, {
                                        "imageId": "201507301453535833791",
                                        "source": "",
                                        "caption": "Tennessee Titans head coach Ken Whisenhunt answers questions during a news conference Thursday, July 30, 2015, in Nashville, Tenn. The Titans begin NFL football training camp Friday. (AP Photo/Mark Humphrey)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 50,
                                "headlineText": "Raiders arrive in Napa for training camp",
                                "storyId": "20150730161828202323008",
                                "originalStoryId": "20150730161828202323008",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 16,
                                    "minute": 18,
                                    "second": 32,
                                    "full": "2015-07-30T16:18:32",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 51,
                                "headlineText": "Ex-Saints pass-rusher Galette visits Redskins for physical",
                                "storyId": "20150730161354883321008",
                                "originalStoryId": "20150730153254707295908",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 16,
                                    "minute": 13,
                                    "second": 55,
                                    "full": "2015-07-30T16:13:55",
                                    "dateType": "Eastern"
                                },
                                "version": 1,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507281001360946512",
                                        "source": "",
                                        "caption": "FILE - In this Nov. 24, 2014, file photo, New Orleans Saints outside linebacker Junior Galette walks along the bench during an NFL football game against the Baltimore Ravens in New Orleans.A defense that ranked second-to-last in the NFL last season has cut ties with Galette, who led the club with 10 sacks.  (AP Photo/Jonathan Bachman, File)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 52,
                                "headlineText": "Bills owner says team in no rush to build new stadium",
                                "storyId": "20150730160318097315308",
                                "originalStoryId": "20150730155744952310708",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 16,
                                    "minute": 3,
                                    "second": 18,
                                    "full": "2015-07-30T16:03:18",
                                    "dateType": "Eastern"
                                },
                                "version": 1,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 53,
                                "headlineText": "Cowboys' McFadden starts training camp on injured list",
                                "storyId": "20150730153807286299108",
                                "originalStoryId": "20150730153807286299108",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 15,
                                    "minute": 38,
                                    "second": 11,
                                    "full": "2015-07-30T15:38:11",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 54,
                                "headlineText": "Jaguars report for training camp without veteran Clemons",
                                "storyId": "20150730151651785283808",
                                "originalStoryId": "20150730132037830214208",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 15,
                                    "minute": 16,
                                    "second": 54,
                                    "full": "2015-07-30T15:16:54",
                                    "dateType": "Eastern"
                                },
                                "version": 1,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 55,
                                "headlineText": "DE Mario Addison says Panthers are Super Bowl bound",
                                "storyId": "20150730145728014269308",
                                "originalStoryId": "20150730145728014269308",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 14,
                                    "minute": 57,
                                    "second": 30,
                                    "full": "2015-07-30T14:57:30",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507301016370182299",
                                        "source": "",
                                        "caption": "Carolina Panthers' Fozzy Whittaker, front, tries out an Oxboard scooter owned by Mike Tolbert, back, as they arrive at the NFL football team's training camp in Spartanburg, S.C., Thursday, July 30, 2015. (AP Photo/Chuck Burton)"
                                    }, {
                                        "imageId": "201507301018370802303",
                                        "source": "",
                                        "caption": "Carolina Panthers' Mike Tolbert smiles as he arrives at the NFL football team's training camp in Spartanburg, S.C., Thursday, July 30, 2015. (AP Photo/Chuck Burton)"
                                    }, {
                                        "imageId": "201507301018370932305",
                                        "source": "",
                                        "caption": "Carolina Panthers' Mario Addison rides an Oxboard scooter to the dorms as he arrives at the NFL football team's training camp in Spartanburg, S.C., Thursday, July 30, 2015. (AP Photo/Chuck Burton)"
                                    }, {
                                        "imageId": "201507301018370932306",
                                        "source": "",
                                        "caption": "Carolina Panthers' Kelvin Benjamin speaks to the media as he arrives at the NFL football team's training camp in Spartanburg, S.C., Thursday, July 30, 2015. (AP Photo/Chuck Burton)"
                                    }, {
                                        "imageId": "201507301018371262318",
                                        "source": "",
                                        "caption": "Carolina Panthers' Derek Anderson, left, arrives at the NFL football team's training camp in Spartanburg, S.C., Thursday, July 30, 2015. (AP Photo/Chuck Burton)"
                                    }, {
                                        "imageId": "201507301019371462327",
                                        "source": "",
                                        "caption": "Stephen Monroe, left, and Grayson Sandlin, right, carry a Carolina Panthers player's mattress as players arrive at the NFL football team's training camp in Spartanburg, S.C., Thursday, July 30, 2015. (AP Photo/Chuck Burton)"
                                    }, {
                                        "imageId": "201507301019371572329",
                                        "source": "",
                                        "caption": "Carolina Panthers' Greg Olsen, left, arrives at the NFL football team's training camp in Spartanburg, S.C., Thursday, July 30, 2015. (AP Photo/Chuck Burton)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 56,
                                "headlineText": "Ross gives his Dolphins a simple start-of-camp message: Win",
                                "storyId": "20150730135232594227708",
                                "originalStoryId": "20150730135232594227708",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 13,
                                    "minute": 52,
                                    "second": 35,
                                    "full": "2015-07-30T13:52:35",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507301146424022841",
                                        "source": "",
                                        "caption": "Miami Dolphins quarterback Ryan Tannehill throws a pass at the teams NFL football training camp, Thursday, July 30, 2015, in Davie, Fla. (AP Photo/Wilfredo Lee)"
                                    }, {
                                        "imageId": "201507301147424642852",
                                        "source": "",
                                        "caption": "Miami Dolphins linebacker Mike Hull (45) catches a pass as he and linebacker Neville Hewitt (46) run drills at the teams NFL football training camp, Thursday, July 30, 2015, in Davie, Fla. (AP Photo/Wilfredo Lee)"
                                    }, {
                                        "imageId": "201507301149425572864",
                                        "source": "",
                                        "caption": "Miami Dolphins Chairman of the Board/Managing General Partner Stephen Ross, left, chats with General Manager Dennis Hickey as they watch practice at the teams NFL football training camp, Thursday, July 30, 2015, in Davie, Fla. (AP Photo/Wilfredo Lee)"
                                    }, {
                                        "imageId": "201507301210438332950",
                                        "source": "",
                                        "caption": "Miami Dolphins head coach Joe Philbin gestures as he speaks to members of the media following the teams NFL football training camp, Thursday, July 30, 2015, in Davie, Fla. (AP Photo/Wilfredo Lee)"
                                    }, {
                                        "imageId": "201507301216442112997",
                                        "source": "",
                                        "caption": "Miami Dolphins Chairman of the Board/Managing General Partner Stephen Ross, foreground, smiles as he speaks with members of the media after the teams NFL football training camp, Thursday, July 30, 2015, in Davie, Fla. (AP Photo/Wilfredo Lee)"
                                    }, {
                                        "imageId": "201507301219443443019",
                                        "source": "",
                                        "caption": "Miami Dolphins defensive tackle Ndamukong Suh speaks to members of the media after the teams NFL football training camp, Thursday, July 30, 2015, in Davie, Fla. (AP Photo/Wilfredo Lee)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 57,
                                "headlineText": "Ravens launch training camp eyeing return trip to playoffs",
                                "storyId": "20150730133347607220708",
                                "originalStoryId": "20150730122204428182408",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 13,
                                    "minute": 33,
                                    "second": 52,
                                    "full": "2015-07-30T13:33:52",
                                    "dateType": "Eastern"
                                },
                                "version": 1,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507291547568759737",
                                        "source": "",
                                        "caption": "Baltimore Ravens wide receiver Steve Smith walks into the team's training facility, Wednesday, July 29, 2015, in Owings Mills, Md., to report for NFL football training camp. (AP Photo/Patrick Semansky)"
                                    }, {
                                        "imageId": "201507300855321152009",
                                        "source": "",
                                        "caption": "Baltimore Ravens head coach John Harbaugh, right, watches quarterback Joe Flacco throw a pass at the team's first day of NFL football training camp, Thursday, July 30, 2015, in Owings Mills, Md. (AP Photo/Patrick Semansky)"
                                    }, {
                                        "imageId": "201507300858323282018",
                                        "source": "",
                                        "caption": "Members of the Baltimore Ravens prepare to run drills at the team's first day of NFL football training camp, Thursday, July 30, 2015, in Owings Mills, Md. (AP Photo/Patrick Semansky)"
                                    }, {
                                        "imageId": "201507300858323282020",
                                        "source": "",
                                        "caption": "Baltimore Ravens tight ends Konrad Reuland, left, and Crockett Gillmore run a drill at the team's first day of NFL football training camp, Thursday, July 30, 2015, in Owings Mills, Md. (AP Photo/Patrick Semansky)"
                                    }, {
                                        "imageId": "201507300859323942043",
                                        "source": "",
                                        "caption": "Baltimore Ravens quarterback Joe Flacco throws a pass at the team's first day of NFL football training camp, Thursday, July 30, 2015, in Owings Mills, Md. (AP Photo/Patrick Semansky)"
                                    }, {
                                        "imageId": "201507300909329492104",
                                        "source": "",
                                        "caption": "Baltimore Ravens wide receiver Breshad Perriman makes a catch in front of spectators at the team's first day of NFL football training camp, Thursday, July 30, 2015, in Owings Mills, Md. (AP Photo/Patrick Semansky)"
                                    }, {
                                        "imageId": "201507301107400482596",
                                        "source": "",
                                        "caption": "Baltimore Ravens wide receiver Steve Smith, second from right, autographs a football for a fan after the team's first day of NFL football training camp, Thursday, July 30, 2015, in Owings Mills, Md. (AP Photo/Patrick Semansky)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 58,
                                "headlineText": "Players who need to finally show their worth in 2015",
                                "storyId": "20150730025526157980708",
                                "originalStoryId": "20150730025526157980708",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 2,
                                    "minute": 55,
                                    "second": 29,
                                    "full": "2015-07-30T02:55:29",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507300112043461496",
                                        "source": "",
                                        "caption": "FILE - In this Dec. 14, 2014, file photo, Washington Redskins quarterback Robert Griffin III (10) fumbles the ball as he is sacked by New York Giants defensive tackle Johnathan Hankins (95) during the fourth quarter of an NFL football game in East Rutherford, N.J. Injuries, inconsistency, some strange coaching decisions by the previous regime have all plagued RG3 since his 2012 Offensive Rookie of the Year honors. Is he a franchise QB? (AP Photo/Bill Kostroun, File)"
                                    }, {
                                        "imageId": "201507300113043881500",
                                        "source": "",
                                        "caption": "FILE - In this Dec. 28, 2014, file photo, Kansas City Chiefs tight end Travis Kelce (87) scores a touchdown after recovering a fumble by teammate wide receiver Dwayne Bowe (not shown) as San Diego Chargers inside linebacker Manti Te'o, center, and cornerback Brandon Flowers, left, pursue during the first half of an NFL football game in Kansas City, Mo. Te'o was a game changer in college. He's been average and injury prone in the NFL. (AP Photo/Ed Zurga, File)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 59,
                                "headlineText": "Early retirement: players call it quits in prime of careers",
                                "storyId": "20150730025154283980008",
                                "originalStoryId": "20150730025154283980008",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 30,
                                    "hour": 2,
                                    "minute": 51,
                                    "second": 57,
                                    "full": "2015-07-30T02:51:57",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507300135057021504",
                                        "source": "",
                                        "caption": "FILE - In this March 10, 2015, file photo, San Francisco 49ers linebacker Patrick Willis announces his retirement at a news conference at the 49ers' NFL football facility in Santa Clara, Calif. NFL players have brought a whole new meaning to early retirement. Players 30 and under, including 49ers star linebacker Patrick Willis and teammate Chris Borland, at 24 with only one pro season on his resume, quit the game in the offseason. So did the likes of Jake Locker, Anthony Davis and Jason Worilds. (AP Photo/Jeff Chiu, File)"
                                    }, {
                                        "imageId": "201507300135057231506",
                                        "source": "",
                                        "caption": "FILE - At left, in a Sept. 14, 2014, file photo, Tennessee Titans quarterback Jake Locker smiles before an NFL football game between the Titans and the Dallas Cowboys in Nashville, Tenn. At center, in a Dec. 29, 2014, file photo, San Francisco 49ers linebacker Patrick Willis speaks to the media inside the teams locker room in Santa Clara, Calif. At right, in a May 23, 2014, file photo, San Francisco 49ers linebacker Chris Borland walks on the practice field during the San Francisco 49ers' NFL football rookie camp in Santa Clara, Calif. NFL players have brought a whole new meaning to early retirement. Players 30 and under, including 49ers star linebacker Patrick Willis and teammate Chris Borland, at 24 with only one pro season on his resume, quit the game in the offseason. So did the likes of Jake Locker(AP Photo/File)"
                                    }, {
                                        "imageId": "201507300135057231508",
                                        "source": "",
                                        "caption": "FILE - In this Sept. 25, 2011, file photo, San Francisco 49ers offensive tackle Anthony Davis sits on the bench during the first half of an NFL football game against the Cincinnati Bengals, in Cincinnati. NFL players have brought a whole new meaning to early retirement. Players 30 and under, including 49ers star linebacker Patrick Willis and teammate Chris Borland, at 24 with only one pro season on his resume, quit the game in the offseason. So did the likes of Jake Locker, Anthony Davis and Jason Worilds. (AP Photo/Ed Reinke, File)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 60,
                                "headlineText": "Brady fights on, files lawsuit to stop suspension",
                                "storyId": "20150729220408409793604",
                                "originalStoryId": "20150729075414065502408",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 22,
                                    "minute": 4,
                                    "second": 13,
                                    "full": "2015-07-29T22:04:13",
                                    "dateType": "Eastern"
                                },
                                "version": 19,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507281020372366587",
                                        "source": "",
                                        "caption": "FILE - In this Feb. 1, 2015, file photo, New England Patriots quarterback Tom Brady (12) throws a pass during the first half of the NFL Super Bowl XLIX football game against the Seattle Seahawks in Glendale, Ariz. (AP Photo/Patrick Semansky)"
                                    }, {
                                        "imageId": "201507281352499306847",
                                        "source": "",
                                        "caption": "FILE - In this Feb. 2, 2015, file photo, New England Patriots quarterback Tom Brady, left, poses with NFL Commissioner Rodger Goodell during a news conference where Brady was presented the Super Bowl MVP  in Phoenix, Ariz. Brady's four-game suspension for his role in using underinflated footballs during the AFC championship game last season has been upheld by Commissioner Goodell. The league announced the decision Tuesday, July 28, 2015. (John Samora/The Arizona Republic via AP, File)  MARICOPA COUNTY OUT; MAGS OUT; NO SALES"
                                    }, {
                                        "imageId": "201507281354500876871",
                                        "source": "",
                                        "caption": "FILE - In this Jan. 18, 2015, file photo, New England Patriots quarterback Tom Brady has a ball tossed to him during warmups before the NFL football AFC Championship game against the Indianapolis Colts in Foxborough, Mass. Brady's four-game suspension for his role in using underinflated footballs during the AFC championship game last season has been upheld by NFL Commissioner Roger Goodell. The league announced the decision Tuesday, July 28, 2015. (AP Photo/Matt Slocum, File)"
                                    }, {
                                        "imageId": "201507281354500916873",
                                        "source": "",
                                        "caption": "FILE - In this Jan. 10, 2015, file photo,New England Patriots quarterback Tom Brady holds up the game ball after an NFL divisional playoff football game against the Baltimore Ravens in Foxborough, Mass. Brady's four-game suspension for his role in using underinflated footballs during the AFC championship game last season has been upheld by NFL Commissioner Roger Goodell. The league announced the decision Tuesday, July 28, 2015. (AP Photo/Elise Amendola, File)"
                                    }, {
                                        "imageId": "201507281401505126885",
                                        "source": "",
                                        "caption": "FILE - In this May 7, 2015, file photo, New England Patriots quarterback Tom Brady gestures during an event at Salem State University in Salem, Mass. Brady's four-game suspension for his role in using underinflated footballs during the AFC championship game last season has been upheld by NFL Commissioner Roger Goodell. The league announced the decision Tuesday, July 28, 2015. (AP Photo/Charles Krupa, Pool)"
                                    }, {
                                        "imageId": "201507291004362708826",
                                        "source": "",
                                        "caption": "New England Patriots owner Robert Kraft, left, and head coach Bill Belichick enter a room full of reporters to address NFL Commissioner Roger Goodell's action upholding New England Patriots quarterback Tom Brady's four game \"Deflategate\"suspension during an NFL football training camp media availability at the team's facility Wednesday, July 29, 2015, in Foxborough, Mass. (AP Photo/Stephan Savoia)"
                                    }, {
                                        "imageId": "201507291005363048828",
                                        "source": "",
                                        "caption": "New England Patriots owner Robert Kraft addresses a room full of reporters to make a statement condemning NFL Commissioner Roger Goodell's action upholding New England Patriots quarterback Tom Brady's four game \"Deflategate\" suspension during an NFL football training camp media availability at the team's facility Wednesday, July 29, 2015, in Foxborough, Mass. (AP Photo/Stephan Savoia)"
                                    }, {
                                        "imageId": "201507291005363458840",
                                        "source": "",
                                        "caption": "New England Patriots owner Robert Kraft addresses a room full of reporters to make a statement condemning NFL Commissioner Roger Goodell's action upholding New England Patriots quarterback Tom Brady's four game \"Deflategate\" suspension during an NFL football training camp media availability at the team's facility Wednesday, July 29, 2015, in Foxborough, Mass. (AP Photo/Stephan Savoia)"
                                    }, {
                                        "imageId": "201507291045387088928",
                                        "source": "",
                                        "caption": "New England Patriots head coach Bill Belichick refuses to answer reporter's questions concerning NFL Commissioner Roger Goodell's action upholding New England Patriots quarterback Tom Brady's four game deflated footballs suspension during an NFL football training camp media availability at the team's facility Wednesday, July 29, 2015, in Foxborough, Mass. (AP Photo/Stephan Savoia)"
                                    }, {
                                        "imageId": "201507291047388358948",
                                        "source": "",
                                        "caption": "New England Patriots head coach Bill Belichick walks past owner Robert Kraft as Belichick takes to there podium after Kraft addressed reporter's during an NFL football training camp media availability at the team's facility Wednesday, July 29, 2015, in Foxborough, Mass. (AP Photo/Stephan Savoia)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 61,
                                "headlineText": "GM Loomis: Saints equipped to overcome offseason setbacks",
                                "storyId": "20150729214100280769708",
                                "originalStoryId": "20150729214100280769708",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 21,
                                    "minute": 41,
                                    "second": 3,
                                    "full": "2015-07-29T21:41:03",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507281001360946512",
                                        "source": "",
                                        "caption": "FILE - In this Nov. 24, 2014, file photo, New Orleans Saints outside linebacker Junior Galette walks along the bench during an NFL football game against the Baltimore Ravens in New Orleans.A defense that ranked second-to-last in the NFL last season has cut ties with Galette, who led the club with 10 sacks.  (AP Photo/Jonathan Bachman, File)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 62,
                                "headlineText": "With new hip, Jerry Jones sees pep in step of his Cowboys",
                                "storyId": "20150729201300724749208",
                                "originalStoryId": "20150729184049188719708",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 20,
                                    "minute": 13,
                                    "second": 5,
                                    "full": "2015-07-29T20:13:05",
                                    "dateType": "Eastern"
                                },
                                "version": 1,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507291622589679880",
                                        "source": "",
                                        "caption": "Dallas Cowboys head coach Jason Garrett reacts to a question during the \"state of the team\" news conference at the start of NFL football training camp, Wednesday, July 29, 2015, in Oxnard, Calif. (AP Photo/Gus Ruelas)"
                                    }, {
                                        "imageId": "201507291625591419893",
                                        "source": "",
                                        "caption": "Dallas Cowboys head coach Jason Garrett, right, looks on as Stephen Jones, left, Cowboys executive vice president, answers a question during the \"state of the team\" news conference at the start of NFL football training camp, Wednesday, July 29, 2015, in Oxnard, Calif. (AP Photo/Gus Ruelas)"
                                    }, {
                                        "imageId": "201507291626592049897",
                                        "source": "",
                                        "caption": "Stephen Jones, Dallas Cowboys executive vice president, answers a question during the \"state of the team\" news conference at the start of NFL football training camp, Wednesday, July 29, 2015, in Oxnard, Calif. (AP Photo/Gus Ruelas)"
                                    }, {
                                        "imageId": "201507291628593349909",
                                        "source": "",
                                        "caption": "From background left to right, Dallas Cowboys Executive Vice President Stephen Jones, owner Jerry Jones, head coach Jason Garrett and team spokesman Rich Dalrymple attend the \"state of the team\" news conference at the start of NFL football training camp, Wednesday, July 29, 2015, in Oxnard, Calif. (AP Photo/Gus Ruelas)"
                                    }, {
                                        "imageId": "201507291629593669913",
                                        "source": "",
                                        "caption": "Dallas Cowboys owner Jerry Jones, left, and head coach Jason Garrett react during the \"state of the team\" news conference at the start of NFL football training camp, Wednesday, July 29, 2015, in Oxnard, Calif. (AP Photo/Gus Ruelas)"
                                    }, {
                                        "imageId": "201507291629593999920",
                                        "source": "",
                                        "caption": "Dallas Cowboys owner Jerry Jones, left, speaks as head coach Jason Garrett looks on during the \"state of the team\" news conference at the start of NFL football training camp, Wednesday, July 29, 2015, in Oxnard, Calif. (AP Photo/Gus Ruelas)"
                                    }, {
                                        "imageId": "201507291630594079928",
                                        "source": "",
                                        "caption": "Dallas Cowboys owner Jerry Jones listens to a reporter's question during the \"state of the team\" news conference at the start of NFL football training camp, Wednesday, July 29, 2015, in Oxnard, Calif. (AP Photo/Gus Ruelas)"
                                    }, {
                                        "imageId": "201507291630594229930",
                                        "source": "",
                                        "caption": "Dallas Cowboys owner Jerry Jones answers a question during the \"state of the team\" news conference at the start of NFL football training camp, Wednesday, July 29, 2015, in Oxnard, Calif. (AP Photo/Gus Ruelas)"
                                    }, {
                                        "imageId": "201507291631594839937",
                                        "source": "",
                                        "caption": "Dallas Cowboys owner Jerry Jones fields questions from members of the media during the \"state of the team\" news conference at the start of NFL football training camp, Wednesday, July 29, 2015, in Oxnard, Calif. (AP Photo/Gus Ruelas)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 63,
                                "headlineText": "Jake Long to visit Denver Broncos on Thursday",
                                "storyId": "20150729195852078746008",
                                "originalStoryId": "20150729195821100745808",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 19,
                                    "minute": 58,
                                    "second": 53,
                                    "full": "2015-07-29T19:58:53",
                                    "dateType": "Eastern"
                                },
                                "version": 1,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 64,
                                "headlineText": "High expectations apparent as Buffalo Bills set to open camp",
                                "storyId": "20150729192010921738908",
                                "originalStoryId": "20150729190554271734908",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 19,
                                    "minute": 20,
                                    "second": 13,
                                    "full": "2015-07-29T19:20:13",
                                    "dateType": "Eastern"
                                },
                                "version": 1,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507281022373476612",
                                        "source": "",
                                        "caption": "FILE - In this May 9, 2015, file photo, Buffalo Bills head coach Rex Ryan reacts during an NFL football rookie minicamp in Orchard Park, N.Y. (AP Photo/Bill Wippert, File)"
                                    }, {
                                        "imageId": "201507281022373686617",
                                        "source": "",
                                        "caption": "FILE - In this June 16, 2015, file photo, Buffalo Bills running back LeSean McCoy (25) takes part in drills during an NFL football minicamp in Orchard Park, N.Y. (AP Photo/Bill Wippert, File)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 65,
                                "headlineText": "Receiver Martavis Bryant eyeing bigger role for Steelers",
                                "storyId": "20150729191330417737708",
                                "originalStoryId": "20150729185950160732108",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 19,
                                    "minute": 13,
                                    "second": 35,
                                    "full": "2015-07-29T19:13:35",
                                    "dateType": "Eastern"
                                },
                                "version": 1,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507291748641110101",
                                        "source": "",
                                        "caption": "Pittsburgh Steelers wide receiver Martavis Bryant (10), right,  breaks away from strong safety Shamarko Thomas (29) after catching a pass at practice during NFL football training camp in Latrobe, Pa., Wednesday, July 29, 2015. (AP Photo/Keith Srakocic)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 66,
                                "headlineText": "Chicago Bears open first camp under Pace, Fox",
                                "storyId": "20150729190523114734308",
                                "originalStoryId": "20150729181456749711608",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 19,
                                    "minute": 5,
                                    "second": 27,
                                    "full": "2015-07-29T19:05:27",
                                    "dateType": "Eastern"
                                },
                                "version": 1,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507291745639480072",
                                        "source": "",
                                        "caption": "Chicago Bears quarterback Jay Cutler listens to a reporter's question during an NFL football training camp media availability at Olivet Nazarene University, Wednesday, July 29, 2015, in Bourbonnais, Ill. (AP Photo/Nam Y. Huh)"
                                    }, {
                                        "imageId": "201507291749641460108",
                                        "source": "",
                                        "caption": "Chicago Bears general manager Ryan Pace speaks during an NFL football training camp media availability at Olivet Nazarene University, Wednesday, July 29, 2015, in Bourbonnais, Ill. (AP Photo/Nam Y. Huh)"
                                    }, {
                                        "imageId": "201507291749641460109",
                                        "source": "",
                                        "caption": "Chicago Bears head coach John Fox, right, speaks as general manager Ryan Pace looks on during an NFL football training camp media availability at Olivet Nazarene University, Wednesday, July 29, 2015, in Bourbonnais, Ill. (AP Photo/Nam Y. Huh)"
                                    }, {
                                        "imageId": "201507291749641790117",
                                        "source": "",
                                        "caption": "Chicago Bears guard Kyle Long leaves an NFL football training camp media availability at Olivet Nazarene University, Wednesday, July 29, 2015, in Bourbonnais, Ill. (AP Photo/Nam Y. Huh)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 67,
                                "headlineText": "49ers remove RB Hyde from active/non-football injury list",
                                "storyId": "20150729185237030728708",
                                "originalStoryId": "20150729001931198313008",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 18,
                                    "minute": 52,
                                    "second": 39,
                                    "full": "2015-07-29T18:52:39",
                                    "dateType": "Eastern"
                                },
                                "version": 1,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 68,
                                "headlineText": "Redskins, LB Kerrigan agree to multi-year contract extension",
                                "storyId": "20150729184251144720408",
                                "originalStoryId": "20150729142354075632608",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 18,
                                    "minute": 42,
                                    "second": 52,
                                    "full": "2015-07-29T18:42:52",
                                    "dateType": "Eastern"
                                },
                                "version": 3,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507291503542029667",
                                        "source": "",
                                        "caption": "FILE - In this Sept. 14, 2014, file photo, Washington Redskins outside linebacker Ryan Kerrigan (91) runs off the field after an NFL football game against the Jacksonville Jaguars in Landover, Md. The Redskins agreed to a multiyear contract extension with  Kerrigan on Wednesday, July 29, 2015, a day before the first practice of training camp. The Redskins announced the deal a few hours before coach Jay Gruden was scheduled to speak to reporters at the team's camp facility. (AP Photo/Nick Wass, FIle)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 69,
                                "headlineText": "The Latest: Brady and players' union file lawsuit again NFL",
                                "storyId": "20150729182848736715804",
                                "originalStoryId": "20150729104009164540708",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 18,
                                    "minute": 28,
                                    "second": 54,
                                    "full": "2015-07-29T18:28:54",
                                    "dateType": "Eastern"
                                },
                                "version": 8,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507281020372536590",
                                        "source": "",
                                        "caption": "FILE - This June 11, 2015, file photo, shows New England Patriots football head coach Bill Belichick speaking to reporters after an NFL organized football team activity in Foxborough, Mass. (AP Photo/Elise Amendola, File)"
                                    }, {
                                        "imageId": "201507281021372706595",
                                        "source": "",
                                        "caption": "FILE - In this Feb. 1, 2015, file photo, New England Patriots quarterback Tom Brady celebrates with head coach Bill Belichick after winning NFL Super Bowl XLIX football game against the Seattle Seahawks  in Glendale, Ariz. The Patriots won 28-24. (AP Photo/Matt Slocum, File)"
                                    }, {
                                        "imageId": "201507281345495326825",
                                        "source": "",
                                        "caption": "FILE - In this June 23, 2015, file photo, New England Patriot's quarterback Tom Brady arrives for his appeal hearing at NFL headquarters in New York. Brady's 4-game suspension has been uphelp by NFL Commissioner Roger Goodell, Tuesday, July 28, 2015.  (AP Photo/Mark Lennihan, File)"
                                    }, {
                                        "imageId": "201507281353500236849",
                                        "source": "",
                                        "caption": "FILE - In this Jan. 19, 2014, file photo, New England Patriots quarterback Tom Brady reacts to question during news conference after his team's 26-16 loss to the Denver Broncos in the AFC Championship NFL football game in Denver. Brady's four-game suspension for his role in using underinflated footballs during the AFC championship game last season has been upheld by NFL Commissioner Roger Goodell. The league announced the decision Tuesday, July 28, 2015. (AP Photo/David Zalubowski, File)"
                                    }, {
                                        "imageId": "201507291004362708826",
                                        "source": "",
                                        "caption": "New England Patriots owner Robert Kraft, left, and head coach Bill Belichick enter a room full of reporters to address NFL Commissioner Roger Goodell's action upholding New England Patriots quarterback Tom Brady's four game \"Deflategate\"suspension during an NFL football training camp media availability at the team's facility Wednesday, July 29, 2015, in Foxborough, Mass. (AP Photo/Stephan Savoia)"
                                    }, {
                                        "imageId": "201507291005363048828",
                                        "source": "",
                                        "caption": "New England Patriots owner Robert Kraft addresses a room full of reporters to make a statement condemning NFL Commissioner Roger Goodell's action upholding New England Patriots quarterback Tom Brady's four game \"Deflategate\" suspension during an NFL football training camp media availability at the team's facility Wednesday, July 29, 2015, in Foxborough, Mass. (AP Photo/Stephan Savoia)"
                                    }, {
                                        "imageId": "201507291005363368836",
                                        "source": "",
                                        "caption": "New England Patriots owner Robert Kraft addresses a room full of reporters to make a statement condemning NFL Commissioner Roger Goodell's action upholding New England Patriots quarterback Tom Brady's four game \"Deflategate\" suspension during an NFL football training camp media availability at the team's facility Wednesday, July 29, 2015, in Foxborough, Mass. (AP Photo/Stephan Savoia)"
                                    }, {
                                        "imageId": "201507291045387088928",
                                        "source": "",
                                        "caption": "New England Patriots head coach Bill Belichick refuses to answer reporter's questions concerning NFL Commissioner Roger Goodell's action upholding New England Patriots quarterback Tom Brady's four game deflated footballs suspension during an NFL football training camp media availability at the team's facility Wednesday, July 29, 2015, in Foxborough, Mass. (AP Photo/Stephan Savoia)"
                                    }, {
                                        "imageId": "201507291047388358948",
                                        "source": "",
                                        "caption": "New England Patriots head coach Bill Belichick walks past owner Robert Kraft as Belichick takes to there podium after Kraft addressed reporter's during an NFL football training camp media availability at the team's facility Wednesday, July 29, 2015, in Foxborough, Mass. (AP Photo/Stephan Savoia)"
                                    }, {
                                        "imageId": "201507291154428519118",
                                        "source": "",
                                        "caption": "NFL Commissioner Roger Goodell speaks to reporters during the NFL's spring meetings in San Francisco, Wednesday, May 20, 2015. (AP Photo/Jeff Chiu)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 70,
                                "headlineText": "Dolphins' Parker, Jones on physically unable to perform list",
                                "storyId": "20150729182609200715608",
                                "originalStoryId": "20150729143624776638508",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 18,
                                    "minute": 26,
                                    "second": 12,
                                    "full": "2015-07-29T18:26:12",
                                    "dateType": "Eastern"
                                },
                                "version": 1,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 71,
                                "headlineText": "Panthers WR Hill cited for drug paraphernalia",
                                "storyId": "20150729182235398714108",
                                "originalStoryId": "20150729182235398714108",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 18,
                                    "minute": 22,
                                    "second": 37,
                                    "full": "2015-07-29T18:22:37",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 72,
                                "headlineText": "Browns motivated by lack of national respect",
                                "storyId": "20150729181832072712608",
                                "originalStoryId": "20150729164614557686408",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 18,
                                    "minute": 18,
                                    "second": 35,
                                    "full": "2015-07-29T18:18:35",
                                    "dateType": "Eastern"
                                },
                                "version": 1,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507271727628274752",
                                        "source": "",
                                        "caption": "FILE - In this May 26, 2015, file photo, Cleveland Browns quarterback Johnny Manziel looks to pass during an NFL organized training activity in Berea, Ohio. Browns coach Mike Pettine said Monday, July 27, 2015, that veteran Josh McCown will open training camp as the team's No. 1 quarterback, but that Manziel, the former Heisman Trophy winner who had a disastrous rookie season, still has a chance to win the job based on his performance. (AP Photo/David Richard, File)"
                                    }, {
                                        "imageId": "201507280729269626122",
                                        "source": "",
                                        "caption": "FILE - In this Oct. 26, 2014, file photo, Cleveland Browns head coach Mike Pettine watches an NFL football game against the Oakland Raiders in Cleveland. The Browns were 7-4 in coach Pettine's first season before the bottom fell out with five consecutive losses. (AP Photo/Tony Dejak, File)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 73,
                                "headlineText": "Jags place running back Johnson on non-football illness list",
                                "storyId": "20150729181527735711808",
                                "originalStoryId": "20150729181527735711808",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 18,
                                    "minute": 15,
                                    "second": 32,
                                    "full": "2015-07-29T18:15:32",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 74,
                                "headlineText": "Patriots sign cornerback Tarell Brown",
                                "storyId": "20150729180823247711008",
                                "originalStoryId": "20150729180823247711008",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 18,
                                    "minute": 8,
                                    "second": 25,
                                    "full": "2015-07-29T18:08:25",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 75,
                                "headlineText": "Titans agree to terms with tight end Coffman, RB Fluellen",
                                "storyId": "20150729180551855710808",
                                "originalStoryId": "20150729180551855710808",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 18,
                                    "minute": 5,
                                    "second": 54,
                                    "full": "2015-07-29T18:05:54",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 76,
                                "headlineText": "Gettleman looks to make it 3 straight playoffs Panthers",
                                "storyId": "20150729175517217707608",
                                "originalStoryId": "20150729175517217707608",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 17,
                                    "minute": 55,
                                    "second": 20,
                                    "full": "2015-07-29T17:55:20",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507280726268096115",
                                        "source": "",
                                        "caption": "FILE - In this Sept. 28, 2014, file photo, Carolina Panthers quarterback Cam Newton (1) is sacked by Baltimore Ravens outside linebacker Terrell Suggs (55) during the first half of an NFL football game in Baltimore. (AP Photo/Patrick Semansky, File)"
                                    }, {
                                        "imageId": "201507280946351796482",
                                        "source": "",
                                        "caption": "FILE - In this June 4, 2015, file photo, Carolina Panthers' Luke Kuechly, left, talks with defensive coordinator Sean McDermott during an NFL football organized team activity in Charlotte, N.C. Carolina's defense has finished in the top 10 the last three seasons and is expected to be strong again behind middle linebacker Kuechly. (AP Photo/Chuck Burton, File)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 77,
                                "headlineText": "Cowboys' Mincey, seeking new deal, no-shows at training camp",
                                "storyId": "20150729174813905706308",
                                "originalStoryId": "20150729174813905706308",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 17,
                                    "minute": 48,
                                    "second": 14,
                                    "full": "2015-07-29T17:48:14",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 78,
                                "headlineText": "Cardinals place Gresham on active/PUP list",
                                "storyId": "20150729172928891700708",
                                "originalStoryId": "20150729165852422689508",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 17,
                                    "minute": 29,
                                    "second": 29,
                                    "full": "2015-07-29T17:29:29",
                                    "dateType": "Eastern"
                                },
                                "version": 3,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 79,
                                "headlineText": "Adrian Peterson back in pads and moving forward with Vikings",
                                "storyId": "20150729171847977697708",
                                "originalStoryId": "20150729171847977697708",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 17,
                                    "minute": 18,
                                    "second": 49,
                                    "full": "2015-07-29T17:18:49",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507280941348646462",
                                        "source": "",
                                        "caption": "FILE - In this Wednesday, June 17, 2015,  file photo, Minnesota Vikings running back Adrian Peterson (28) walks across the field during NFL football minicamp in Eden Prairie, Minn. The sideshow that overshadowed last season has been dismantled, following Peterson's reinstatement from NFL suspension. (AP Photo/Ann Heisenfelt, File)"
                                    }, {
                                        "imageId": "201507281827664437241",
                                        "source": "",
                                        "caption": "Minnesota Vikings quarterback Teddy Bridgewater (5) and running back Adrian Peterson shake hands during the first practice in full pads at an NFL football training camp on the campus of Minnesota State University, Tuesday, July 28, 2015, in Mankato, Minn. (AP Photo/Charles Rex Arbogast)"
                                    }, {
                                        "imageId": "201507281839671747272",
                                        "source": "",
                                        "caption": "Minnesota Vikings running back Adrian Peterson (28) carries the ball during the first practice in full pads at an NFL football training camp on the campus of Minnesota State University Tuesday, July 28, 2015, in Mankato, Minn. (AP Photo/Charles Rex Arbogast)"
                                    }, {
                                        "imageId": "201507291235453339236",
                                        "source": "",
                                        "caption": "Minnesota Vikings running back Adrian Peterson smiles as he poses for a photograph with Josh Miller from Hastings, Minn., after the morning practice session at an NFL football training camp on the campus of Minnesota State University Wednesday, July 29, 2015, in Mankato, Minn. (AP Photo/Charles Rex Arbogast)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 80,
                                "headlineText": "Chiefs safety Eric Berry back at practice after cancer fight",
                                "storyId": "20150729171041178694208",
                                "originalStoryId": "20150729101453693531608",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 17,
                                    "minute": 10,
                                    "second": 45,
                                    "full": "2015-07-29T17:10:45",
                                    "dateType": "Eastern"
                                },
                                "version": 3,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507291020372588881",
                                        "source": "",
                                        "caption": "Kansas City Chiefs strong safety Eric Berry (29) participates in a drill at NFL football training camp Wednesday, July 29, 2015, in St. Joseph, Mo. (AP Photo/Charlie Riedel)"
                                    }, {
                                        "imageId": "201507291047388688962",
                                        "source": "",
                                        "caption": "Kansas City Chiefs strong safety Eric Berry (29) participates in a drill at NFL football training camp Wednesday, July 29, 2015, in St. Joseph, Mo. (AP Photo/Charlie Riedel)"
                                    }, {
                                        "imageId": "201507291051390828976",
                                        "source": "",
                                        "caption": "Kansas City Chiefs strong safety Eric Berry (29) participates in a drill at NFL football training camp Wednesday, July 29, 2015, in St. Joseph, Mo. (AP Photo/Charlie Riedel)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 81,
                                "headlineText": "Jets place Colon, Ridley, Vickerson on active/PUP list",
                                "storyId": "20150729170536835693408",
                                "originalStoryId": "20150729170536835693408",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 17,
                                    "minute": 5,
                                    "second": 37,
                                    "full": "2015-07-29T17:05:37",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 82,
                                "headlineText": "AP source: Offensive tackle Cherilus visits Buffalo Bills",
                                "storyId": "20150729165448526687908",
                                "originalStoryId": "20150729131038830595008",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 16,
                                    "minute": 54,
                                    "second": 49,
                                    "full": "2015-07-29T16:54:49",
                                    "dateType": "Eastern"
                                },
                                "version": 1,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 83,
                                "headlineText": "Falcons add depth for camp by signing DeMarcus Love",
                                "storyId": "20150729164031657679908",
                                "originalStoryId": "20150729164031657679908",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 16,
                                    "minute": 40,
                                    "second": 33,
                                    "full": "2015-07-29T16:40:33",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 84,
                                "headlineText": "Revis, Jets hoping to someday bring ring to hungry franchise",
                                "storyId": "20150729163501084677908",
                                "originalStoryId": "20150729163501084677908",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 16,
                                    "minute": 35,
                                    "second": 6,
                                    "full": "2015-07-29T16:35:06",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507280703253876032",
                                        "source": "",
                                        "caption": "FILE - In this May 27, 2015, file photo, New York Jets' Darrelle Revis gets ready for an NFL football organized team activity in Florham Park, N.J. After the Jets struggled with an injury-filled and inconsistent secondary, they brought back free-agent cornerbacks Darrelle Revis and Antonio Cromartie. (AP Photo/Seth Wenig, File)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 85,
                                "headlineText": "McCarthy eager to get started in 10th season leading Packers",
                                "storyId": "20150729160501754672108",
                                "originalStoryId": "20150729160501754672108",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 16,
                                    "minute": 5,
                                    "second": 3,
                                    "full": "2015-07-29T16:05:03",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507280845315456348",
                                        "source": "",
                                        "caption": "FILE - In this Sunday, Dec. 14, 2014 file photo, Green Bay Packers' Jordy Nelson (87) breaks a tackle by Buffalo Bills' Aaron Williams (23) during the second half of an NFL football game in Orchard Park, N.Y. (AP Photo/Bill Wippert, File)"
                                    }, {
                                        "imageId": "201507290210078248452",
                                        "source": "",
                                        "caption": "FILE - In this Nov. 23, 2014, file photo, Green Bay Packers defensive end Josh Boyd (93) tackles Minnesota Vikings running back Jerick McKinnon (31) during the first half of an NFL football game in Minneapolis. Green Bay is looking for a breakout pass rusher/run stopper up front, and Boyd could be the guy.(AP Photo/Ann Heisenfelt, File)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 86,
                                "headlineText": "Panthers' Rivera could miss practices after brother's death",
                                "storyId": "20150729152410235657808",
                                "originalStoryId": "20150729152410235657808",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 15,
                                    "minute": 24,
                                    "second": 10,
                                    "full": "2015-07-29T15:24:10",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507291426520039600",
                                        "source": "",
                                        "caption": "Carolina Panthers head coach Ron Rivera walks to a practice at the NFL football team's rookie minicamp in Charlotte, N.C., Friday, May 8, 2015. (AP Photo/Chuck Burton)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 87,
                                "headlineText": "Luck still ranks atop QB class that entered NFL in 2012",
                                "storyId": "20150729143453219638108",
                                "originalStoryId": "20150729143453219638108",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 14,
                                    "minute": 34,
                                    "second": 58,
                                    "full": "2015-07-29T14:34:58",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507291025375588904",
                                        "source": "",
                                        "caption": "FILE - In this  Sunday, Jan. 18, 2015 file photo, Indianapolis Colts quarterback Andrew Luck (12) passes in front of New England Patriots defensive end Chandler Jones (95) during the first half of the NFL football AFC Championship game in Foxborough, Mass. The pontificating and prognosticating that have always swirled around the quarterback class of 2012 can transform even a punter into a pundit. Luck and Ryan Tannehill were two of the five current starting QBs drafted in 2012, and this spring, when Tannehill became the first member of the group to sign a contract extension, punter Pat McAfee was quick to suggest his Colts teammate was worth a lot more. (AP Photo/Matt Slocum, File)"
                                    }, {
                                        "imageId": "201507291026375908909",
                                        "source": "",
                                        "caption": "FILE - In this Sunday, Dec. 28, 2014 file photo, Miami Dolphins quarterback Ryan Tannehill (17) warms up before an NFL football game against the New York Jets, in Miami Gardens, Fla.  The pontificating and prognosticating that have always swirled around the quarterback class of 2012 can transform even a punter into a pundit. Tannehill and Andrew Luck were two of the five current starting QBs drafted in 2012, and this spring, when Tannehill became the first member of the group to sign a contract extension, punter Pat McAfee was quick to suggest his Colts teammate was worth a lot more.(AP Photo/Wilfredo Lee)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 88,
                                "headlineText": "Steelers back Le'Veon Bell glad suspension reduced",
                                "storyId": "20150729140014313615308",
                                "originalStoryId": "20150729140014313615308",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 14,
                                    "minute": 0,
                                    "second": 18,
                                    "full": "2015-07-29T14:00:18",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP",
                                "images": [
                                    {
                                        "imageId": "201507261839671983175",
                                        "source": "",
                                        "caption": "Pittsburgh Steelers running back Le'Veon Bell, right, has a laugh with fullback Will Johnson as the two stretch during practice at NFL football training camp in Latrobe, Pa. on Sunday, July 26, 2015 . (AP Photo/Keith Srakocic)"
                                    }, {
                                        "imageId": "201507271854680544950",
                                        "source": "",
                                        "caption": "Pittsburgh Steelers running back Le'Veon Bell, right, runs the ball as inside linebacker Ryan Shazier (50) defends during practice at NFL football training camp in Latrobe, Pa., Monday, July 27, 2015. (AP Photo/Keith Srakocic)"
                                    }, {
                                        "imageId": "201507271910690394972",
                                        "source": "",
                                        "caption": "Pittsburgh Steelers running back Le'Veon Bell makes a catch during practice at NFL football training camp in Latrobe, Pa., Monday, July 27, 2015. (AP Photo/Keith Srakocic)"
                                    }
                                ]
                            }, {
                                "headlineSequence": 89,
                                "headlineText": "Chiefs release injured running back Cyrus Gray",
                                "storyId": "20150729133328383602008",
                                "originalStoryId": "20150729133328383602008",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 13,
                                    "minute": 33,
                                    "second": 32,
                                    "full": "2015-07-29T13:33:32",
                                    "dateType": "Eastern"
                                },
                                "version": 0,
                                "storySource": "AP"
                            }, {
                                "headlineSequence": 90,
                                "headlineText": "Full text of Patriots owner Kraft's statement about Brady",
                                "storyId": "20150729113017794561304",
                                "originalStoryId": "20150729112552212558508",
                                "storyPublishDate": {
                                    "year": 2015,
                                    "month": 7,
                                    "date": 29,
                                    "hour": 11,
                                    "minute": 30,
                                    "second": 23,
                                    "full": "2015-07-29T11:30:23",
                                    "dateType": "Eastern"
                                },
                                "version": 1,
                                "storySource": "AP"
                            }
                        ]
                    }
                };

                $scope.sport = attrs.activesport;
                var teamPromise;
                $scope.headlines = $scope.headlines;
                if (attrs.activeteam) {
                    teamPromise = Team.getTeam(attrs.activeteam);
                    $scope.headlines = $scope.stories.team;
                    teamPromise.then(function(response) {
                        $scope.headerLogo = response.data.teamimage;
                    });
                } else {
                    $scope.headerLogo = "https://s3-us-west-2.amazonaws.com/ekkosports/logos/" + $scope.sport + "/" + $scope.sport + "-logo.png";    
                }
                
                $scope.viewStory = false;
                $scope.closeHeadline = function () {
                    $scope.viewStory = false;
                };
                $scope.showArticle = function (articleId) {
                    $scope.viewStory = true;
                }

                $scope.showNewsActive = true;
                $scope.showStatisticsActive = false;
                $scope.showStandingsActive = false;

                $scope.showNews = function () {
                    $scope.showStatisticsActive = false;
                    $scope.showStandingsActive = false;
                    $scope.showNewsActive = true;                                        
                }

                $scope.showStatistics = function() {
                    $scope.showNewsActive = false;
                    $scope.showStandingsActive = false;
                    $scope.showStatisticsActive = true;                    
                }

                $scope.showStandings = function() {
                    $scope.showNewsActive = false;
                    $scope.showStatisticsActive = false;
                    $scope.showStandingsActive = true;
                }
            }
        }
    }]);