'use strict';

angular.module('ekkoApp')
    .directive('ekkoPosts', ['Field', '$user', function (Field, $user) {
        
        var _internalPost = {
            PostId: 0,
            PostText: "",
            Likes: 0,
            Dislikes: 0,
            CreatedAt: new Date(),
            MediaUrl: ""
        };

        return {
            restrict: 'E', //E = element, A = attribute, C = class, M = comment         
            scope: {
                //@ reads the attribute value, = provides two-way binding, & works with functions
                username: '@',
                rootusername: '@'
            },
            templateUrl: '/app/directives/ekkoPosts/ekkoPosts.html',
            link: function ($scope, element, attrs) {
                $scope.now = new Date();
                $scope.posts = [];
  
                var fieldPromise = Field.getField();

                fieldPromise.then(function(response) {
                    $scope.posts = response.data;
                    console.log($scope.posts);
                });

                $scope.getReplies = function (post) {
                    post.ShowComments = !post.ShowComments;

                    if (post.ShowComments) {
                        var replyPromise = Field.getRepliesForPost(post.post_id);

                        replyPromise.then(function(response) {
                            post.Replies = response.data;
                        });
                    } else {
                        post.getReplies = [];
                    }
                };

            }
        }
    }]);