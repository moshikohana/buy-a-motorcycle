angular.module("myApplication").controller("HomeCtrl",["$scope",function($scope){

    function init(){

        $scope.header = "Home Page";
    }

    return init();

}])
