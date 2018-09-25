'use strict';
angular.module("myApplication").service("aboutService",["$http","$rootScope","$q",function($http,$rootScope,$q){

    this.about = function(){
        var defer  = $q.defer();
        var localUrl = '/getUsers';
        var myPromise =  $http({
            method:'GET',
            url: $rootScope.url + localUrl,
        });

        myPromise.then(function(success){
            defer.resolve(success.data);
        },function(err){
            defer.reject(err);
        })

        return defer.promise;
    }

}]);

