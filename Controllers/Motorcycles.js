angular.module("myApplication").controller("MotorcyclesCtrl",["$rootScope","$scope","motorcyclesService",function($rootScope,$scope,motorcyclesService){

    function init(){

       $scope.header = "Motorcycles Page";
       $scope.standByAddingAlert();
/*       motorcyclesService.motorcycles().then(function (motorcyclesArray) {
        $scope.motorcyclesArray = [];
            for (var i = 0 ; i < motorcyclesArray.length ; i++){
                $scope.motorcyclesArray.push(motorcyclesArray[i]);

            }
            console.log("You can view the show room ", motorcyclesArray);
       }, function (err) {
            console.log("You can NOT view the show room. Check Server Status");
       })*/

        $scope.clientArrayMotors = motorcyclesService.motorcyclesArray;

    }

    $scope.addMotorToCart = function(id) {
        console.log($rootScope.firstName);
        for (var i=0; i < $scope.clientArrayMotors.length; i++) {
            if ($scope.clientArrayMotors[i].motorcycleId == id) {
                console.log($scope.clientArrayMotors[i]);
                motorcyclesService.addMotorcycle($scope.clientArrayMotors[i],$rootScope.firstName);
                $scope.addingSuccessAlert();

            }
/*            else {
                $scope.addingFailAlert();
            }*/
        }
    }

/*    $('#motorcycleImgs').mouseenter(function() {
        $(this).effect('bounce',500);
    });

    $('#motorcycleImgs').mouseleave(function() {
        $(this).stop(true,true);
    });*/



    $scope.standByAddingAlert = function () {
        var newEle = angular.element('<div class="alert alert-info" role="alert" style="margin: 0px; padding: 10px"><center><strong>You Can Buy A Motorcycle</strong> press the Add To Cart button</center></div>');
        var target = document.getElementById('standByAddingAlert');
        angular.element(target).append(newEle);
        setInterval(function(){jQuery(target).fadeIn(1000);
            setTimeout(function(){jQuery(target).fadeOut(2000); }, 2000);
        }, 4000)
    }

    $scope.addingSuccessAlert = function () {
        var newEle = angular.element('<div class="alert alert-success" role="alert" style="margin: 0px; padding: 10px"><center><strong>Motorcycle Added To Cart</strong> thank you :)</center></div>');
        var target = document.getElementById('addingSuccessAlert');
        angular.element(target).append(newEle);
        jQuery(target).fadeIn(1000);
        setTimeout(function(){jQuery(target).fadeOut(1000); }, 5000);
    }

    $scope.addingFailAlert = function () {
        var newEle = angular.element('<div class="alert alert-danger" role="alert" style="margin: 0px; padding: 10px"><center><strong>Motorcycle Can NOT add To Cart</strong> sorry :(</center></div>');
        var target = document.getElementById('addingFailAlert');
        angular.element(target).append(newEle);
        jQuery(target).hide().fadeIn(1000);
        setTimeout(function(){jQuery(target).fadeOut(1000); }, 5000);
    }

    var images = [
        "http://hdwallpaperbackgrounds.net/wp-content/uploads/2015/07/kawasaki-hd-motorcycle-wallpaper.jpg",
        "https://s-media-cache-ak0.pinimg.com/originals/52/5f/85/525f852c6ade56b51c8487aad58a5296.jpg",
        "http://dreamlovewallpapers.com/wp-content/uploads/2015/08/Suzuki-Motorcycle-Background-HD-Wallpaper.jpg",
        "https://s-media-cache-ak0.pinimg.com/originals/e2/09/0c/e2090cc392acee559787f985a1241b9d.jpg"
    ]

    var imageHead = document.getElementById("image-head");
    var i = 0;

    setInterval(function() {
        imageHead.style.backgroundImage = "url(" + images[i] + ")";
        i = i + 1;
        if (i == images.length) {
            i =  0;
        }
        jQuery(imageHead).hide().fadeIn(1000);

    },15000);

    return init();

}])

