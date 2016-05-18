'use strict';

angular.module('ekkoApp').directive('ekkoMainMenu', ['$location', '$user',
    function ($location, $user) {
        return {
            restrict: 'E',
            scope: {
                activeLink : '@'
            },
            templateUrl: '/app/directives/ekkoMainMenu/ekkoMainMenu.html',
            link: function ($scope, element, attrs) {
                
                $scope.showModal = false;
                $scope.toggleModal = function () {
                    $scope.showModal = !$scope.showModal;
                };
                
                $scope.fieldClass = "mini-nav";
                $scope.newsClass = "mini-nav";
                $scope.rivalsClass = "mini-nav";
                $scope.upsetsClass = "mini-nav";
                $scope.gamesClass = "mini-nav";
                $scope.picksClass = "mini-nav";
                $scope.fantasyClass = "mini-nav";
                
                switch (attrs.activelink) {
                    case "field":
                        $scope.fieldClass += " active";
                        break;;
                    case "news":
                        $scope.newsClass += " active";
                        break;
                    case "rivals":
                        $scope.rivalsClass += " active";
                        break;
                    case "upsets":
                        $scope.upsetsClass += " active";
                        break;
                    case "games":
                        $scope.gamesClass += " active";
                        break;
                    case "picks":
                        $scope.picksClass += " active";
                        break;
                    case "fantasy":
                        $scope.fantasyClass += " active";
                        break;
                }
                
                var data = $user.currentUser.customData;
                $scope.teams = $user.currentUser ? data.Teams : null;
                $scope.user = $user.currentUser ? data : null;
                
                $scope.selectTeam = function (league, teamid) {
                    //"#/nfl/team/{{team.TeamId}}
                    $location.path("/" + league.toLowerCase() + "/team/" + teamid);
                };
                
                $scope.logOut = function () {
                    //authService.logOut();
                }
            }
        }
    }
]);