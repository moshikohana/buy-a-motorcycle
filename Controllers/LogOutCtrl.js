angular.module("myApplication").controller("LogOutCtrl",["$scope","$rootScope","loginService","cartService","$state",function($scope,$rootScope,loginService,cartService,$state){

    function init(){

        $scope.firstName = "";
        $scope.password = "";
        $scope.OrangeAlert();

    }

    $scope.logOutBTN = function(){
        console.log("IM HERE");
        loginService.logout().then(function (res){
           
            $rootScope.loggedIn = false;
            $scope.logOutAlert();
            alert($scope.firstName + " Logged out successfully");
            $state.go("Registration");
            
        },function(err){
            console.log($scope.firstName + " Logged out Failed");

        })
        console.log("im entering the cartService");
        cartService.removeAllMotors().then(function () {
            console.log("DELETED ALL MOTORS FROM CART DUE TO LOGOUT");
         
        }, function (err) {
            console.log("Problem with deleting all motors from cart");
            $scope.removeFailAlert();
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
        var newEle = angular.element('<div class="alert alert-warning" role="alert" style="margin: 0px; padding: 10px"><center><strong>Welcome To LogOut Page</strong></center></div>');
        var target = document.getElementById('OrangeAlert');
        angular.element(target).append(newEle);
        setInterval(function(){jQuery(target).fadeIn(1000);
            setTimeout(function(){jQuery(target).fadeOut(2000); }, 2000);
        }, 4000)
    }

    return init();

}])