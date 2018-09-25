angular.module("myApplication").controller("LoginCtrl",["$scope","$rootScope","loginService","$state",function($scope,$rootScope,loginService,$state){

    function init(){

        $scope.firstName = "";
        $scope.password = "";
        $scope.OrangeAlert();

    }

    $scope.logInBTN = function() {

       loginService.login($scope.firstName, $scope.password).then(function (res) {
            console.log("im here", res);
            $rootScope.loggedIn = true;
            $rootScope.firstName = $scope.firstName;
            $scope.GreenAlert();
            jQuery("#OrangeAlert").remove();
            console.log($scope.firstName + " Logged in successfully");
            $state.go("Motorcycles");


       }, function (err) {

            $scope.RedAlert();
            console.log($scope.firstName + " Logged out Failed");
            })
    }

    $scope.logOutBTN = function(){

        loginService.logout().then(function (res){

            $rootScope.loggedIn = false;
            $scope.logOutAlert();
            console.log($scope.firstName + " Logged out successfully");
        },function(err){
            console.log($scope.firstName + " Logged out Failed");

        })
    }

    $scope.GreenAlert = function () {
        var newEle = angular.element('<div class="alert alert-success" role="alert" style="margin: 0px; padding: 10px"><center><strong>LogIn Succeed</strong> take care</center></div>');
        var target = document.getElementById('GreenAlert');
        angular.element(target).append(newEle);
        jQuery(target).fadeIn(1000);
        setTimeout(function(){jQuery(target).fadeOut(1000); }, 5000);
    }

    $scope.logOutAlert = function () {
        var newEle = angular.element('<div class="alert alert-success" role="alert" style="margin: 0px; padding: 10px"><center><strong>LogOut Succeed</strong> we hope you enjoy our app</center></div>');
        var target = document.getElementById('logOutAlert');
        angular.element(target).append(newEle);
        jQuery(target).fadeIn(1000);
        setTimeout(function(){jQuery(target).fadeOut(1000); }, 5000);
    }

    $scope.RedAlert = function () {
        var newEle = angular.element('<div class="alert alert-danger" role="alert" style="margin: 0px; padding: 10px"><center><strong>Wrong User Name Or Password</strong> please try again</center></div>');
        var target = document.getElementById('RedAlert');
        angular.element(target).append(newEle);
        jQuery(target).hide().fadeIn(1000);
        setTimeout(function(){jQuery(target).fadeOut(1000); }, 5000);
    }

    $scope.OrangeAlert = function () {
        var newEle = angular.element('<div class="alert alert-warning" role="alert" style="margin: 0px; padding: 10px"><center><strong>Welcome To Login Page.</strong> please register or login to continue</center></div>');
        var target = document.getElementById('OrangeAlert');
        angular.element(target).append(newEle);
        setInterval(function(){jQuery(target).fadeIn(1000);
            setTimeout(function(){jQuery(target).fadeOut(2000); }, 2000);
        }, 4000)
    }

    return init();

}])