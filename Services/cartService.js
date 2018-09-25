'use strict';
angular.module("myApplication").service("cartService",["$http","$rootScope","$q",function($http,$rootScope,$q){

     this.cart = function(){
          var defer  = $q.defer();
          var localUrl = '/getMotors';
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

    this.remove = function($index){
        var localUrl = '/removeMotor';
        var _data = $index;
        return $http({
            method:'post',
            url:$rootScope.url + localUrl,
            data:_data
        })

    }
    this.removeAllMotors = function(){
        console.log("im here");
        var localUrl = '/removeAllMotors';
        var _data = "";
        return $http({
            method:'post',
            url:$rootScope.url + localUrl,
            data:_data
        })

    }

}]);
