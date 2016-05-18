'use strict';

angular.module('ekkoApp')
    .controller('NewsCtrl', [
        '$scope', function($scope) {
        $scope.news = [
            {
                team: "Georgia Bulldogs",
                image: "https://s3-us-west-2.amazonaws.com/ekkosports/logos/college/georgia-logo.png",
                headlines: [
                    {
                        headline: "Georgia's latest loss sure to turn up heat on Richt",
                        image: "uga-1"
                    },
                    {
                        headline: "Georgia changes quarterbacks, starts Bauta vs No. 11 Florida",
                        image: "uga-2"
                    },
                    {
                        headline: "Georgia staggered by 2 straight losses, Nick Chubb's injury",
                        image: "uga-3"
                    }
                ]
            },
            {
                team: "Portland Trail Blazers",
                image: "https://s3-us-west-2.amazonaws.com/ekkosports/logos/nba/trail blazers-logo.png",
                headlines: [
                    {
                        headline: "Bledsoe has 33 and Suns beat Blazers 101-90",
                        image: "portland-1"
                    },
                    {
                        headline: "McCollum scores 37 as Blazers down Pelicans 112-94",
                        image: "portland-2"
                    },
                    {
                        headline: "Lillard, McCollum lead Blazers' big rally to beat Jazz in OT",
                        image: "portland-3"
                    }
                ]
            },
            {
                team: "Washington Redskins",
                image: "https://s3-us-west-2.amazonaws.com/ekkosports/logos/nfl/redskins-logo.png",
                headlines: [
                    {
                        headline: "Cousins' 3rd TD pass of 2nd half lifts Skins past Bucs 31-30",
                        image: "redskins-1"
                    }
                ]
            },
            {
                team: "Vancouver Canucks",
                image: "https://s3-us-west-2.amazonaws.com/ekkosports/logos/nhl/canucks-logo.png",
                headlines: [
                    {
                        headline: "Canucks jump on Coyotes with 3 quick goals in 4-3 win",
                        image: "van-1"
                    },
                    {
                        headline: "Ryan Miller gets 36th shutout as Canucks blank LA Kings 3-0",
                        image: "van-2"
                    }
                ]
            }
        ];
    }
    ]);