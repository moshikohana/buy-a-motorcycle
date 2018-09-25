'use strict';
angular.module("myApplication").service("registerService",["$http","$rootScope","$q",function($http,$rootScope,$q){

    var localUrl = '/register';
    this.register = function(firstName,password){
        var _data = {firstName:firstName, password:password};
        return $http({
            method:'post',
            url:$rootScope.url + localUrl,
            data:_data
        })
    }
}]);