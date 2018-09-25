angular.module("myApplication").controller("AboutCtrl",["$scope","aboutService",function($scope,aboutService){

    function init(){

        $scope.header = "About Page";
    }

    $scope.registeredBTN = function() {

        aboutService.about().then(function (users) {


        }, function (err) {
            console.log("Problem with getting registered users list");

        })
    }
    return init();

}])
