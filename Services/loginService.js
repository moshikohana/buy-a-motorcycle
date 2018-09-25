'use strict';
angular.module("myApplication").service("loginService",["$http","$rootScope","$q",function($http,$rootScope,$q){
    this.login = function(firstName,password){
        var localUrl = '/login';
        
        var _data = {firstName:firstName, password:password};
        console.log("im in the loginService", _data);
        return $http({
            method:'post',
            url:$rootScope.url + localUrl,
            data:_data
        })

    }

    this.logout = function () {
        var localUrl = '/logout';
        return $http({
            method: 'post',
            url: $rootScope.url + localUrl
        })
    }

}]);