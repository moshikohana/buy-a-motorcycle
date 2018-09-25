angular.module("myApplication").controller("RegistrationCtrl", ["$scope","registerService","$state",function($scope,registerService,$state){

    function init(){
        $scope.firstName = "";
        $scope.password = "";
        $scope.registrationStandBy();
    }

    $scope.regBTN = function() {

        registerService.register($scope.firstName, $scope.password).then(function (res) {
            console.log(res);
            $scope.registrationSuccess();
            jQuery("#registrationStandBy").remove();
            $state.go("Login");
            console.log($scope.firstName + " Registered successfully");
            alert($scope.firstName + " Registered successfully with password: " + $scope.password);

        }, function (err) {

            $scope.registrationNotSuccess();
            console.log($scope.firstName + " Registered failed,");
            alert("The username " + $scope.firstName + " is already excist");
        })
    }

    $scope.registrationSuccess = function () {
        var newEle = angular.element('<div class="alert alert-success" role="alert" style="margin: 0px; padding: 10px"><center><strong>Registration Succeed</strong> you can proceed to log in</center></div>');
        var target = document.getElementById('registrationSuccess');
        angular.element(target).append(newEle);
        jQuery(target).fadeIn(1000);
        setTimeout(function(){jQuery(target).fadeOut(1000); }, 5000);
    }

    $scope.registrationNotSuccess = function () {
        var newEle = angular.element('<div class="alert alert-danger" role="alert" style="margin: 0px; padding: 10px"><center><strong>Registration Did not Succeed</strong> please try again</center></div>');
        var target = document.getElementById('registrationNotSuccess');
        angular.element(target).append(newEle);
        jQuery(target).hide().fadeIn(1000);
        setTimeout(function(){jQuery(target).fadeOut(1000); }, 5000);
    }

    $scope.registrationStandBy = function () {
        var newEle = angular.element('<div class="alert alert-info" role="alert" style="margin: 0px; padding: 10px"><center><strong>Welcome To Buy-A-MotorCycle App.</strong> please register to continue</center></div>');
        var target = document.getElementById('registrationStandBy');
        angular.element(target).append(newEle);
            setInterval(function(){jQuery(target).fadeIn(1000);
            setTimeout(function(){jQuery(target).fadeOut(2000); }, 2000);
            }, 4000)
    }

    return init();

}])