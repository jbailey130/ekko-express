'use strict';

angular.module('ekkoApp').factory('Field', [
    '$http', function ($http) {
        var fieldFactory = [];
        
        var _getField = function () {
            return $http.get('/api/field').then(function (response) {
                return response;
            });
        };
        
        var _getRepliesForPost = function (postId) {
            return $http.get('/api/field/replies/' + postId).then(function (response) {
                return response;
            });
        }
        
        //var _getFieldForUser = function (username) {
        //    return $http.get('/api/field/GetAllForUser/?userName=' + username).then(function (response) {
        //        return response;
        //    });
        //};
        
        //var _savePost = function (body) {
        //    return $http.post('/api/field/save', body).then(function (response) {
        //        return response;
        //    });
        //};
        
        //var _replyPost = function (body, postId) {
        //    return $http.post('/api/field/reply', { reply: body, postId: postId }).then(function (response) {
        //        return response;
        //    });
        //};
        
        //var _thumbs = function (post) {
        //    return $http.post('/api/field/Thumbs', post).then(function (response) {
        //        return response;
        //    });
        //}
        
        //var _hasPerformedAction = function (post) {
        //    return $http.post('/api/field/UserPerformedAction', post).then(function (response) {
        //        return response;
        //    });
        //};
        
        //var _deletePost = function (post) {
        //    return $http.post('/api/field/delete', post).then(function (response) {
        //        return response;
        //    });
        //}
        

        
        fieldFactory.getField = _getField;
        fieldFactory.getRepliesForPost = _getRepliesForPost;
        //fieldFactory.savePost = _savePost;
        //fieldFactory.replyPost = _replyPost;
        //fieldFactory.thumbs = _thumbs;
        //fieldFactory.hasPerformedAction = _hasPerformedAction;
        //fieldFactory.deletePost = _deletePost;
        //fieldFactory.getFieldForUser = _getFieldForUser;
        
        
        return fieldFactory;
    }
]);