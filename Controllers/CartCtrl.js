angular.module("myApplication").controller("CartCtrl",["$rootScope","$scope","cartService","loginService",function($rootScope,$scope,cartService,loginService){

    function init(){
        $scope.getSum = function(total, num) {
            return total + num;
        }
        $scope.sumOfPrices = 0;
        $scope.header = "Cart Page";
        $scope.standByRemoveAlert();
        console.log($rootScope.firstName);
        var totalPrice = [];
        cartService.cart().then(function (motorcycles) {
            console.log("motors in cart: ", motorcycles);
            $scope.cartArray = motorcycles;
           
            for(var i=0; i<motorcycles.length;i++) {
                  var stam = motorcycles[i].Price;
                  var sillyString = stam.slice(0, -1);
                 // console.log(sillyString);
                totalPrice.push(parseInt(sillyString));
               $scope.sumOfPrices = totalPrice.reduce($scope.getSum);
               console.log($scope.sumOfPrices);

            }

        }, function (err) {
            console.log("Problem with getting motors from cart");
            $scope.removeFailAlert();
        })
    }

    $scope.removeFromCart = function($index) {

        cartService.remove($index);
        console.log($index);
        console.log($scope.cartArray[$index]);
      //  console.log($scope.cartArray);

        console.log($scope.sumOfPrices);
        $scope.removeSuccessAlert();
        jQuery("#standByRemoveAlert").remove();
    }

    $scope.delete = function ($index) {
        $scope.totalPrice = [];
        console.log($index);
        $scope.cartArray.splice($index, 1);
                      
        for(var i=0; i<$scope.cartArray.length;i++) {
            var stam = $scope.cartArray[i].Price;
            var sillyString = stam.slice(0, -1);
           // console.log(sillyString);
          $scope.totalPrice.push(parseInt(sillyString));
         $scope.sumOfPrices = $scope.totalPrice.reduce($scope.getSum);
        //  console.log($scope.sumOfPrices);

      }

    }

    $scope.removeSuccessAlert = function () {
        var newEle = angular.element('<div class="alert alert-success" role="alert" style="margin: 0px; padding: 10px"><center><strong>Motorcycle Removed From Cart</strong> thank you :)</center></div>');
        var target = document.getElementById('removeSuccessAlert');
        angular.element(target).append(newEle);
        jQuery(target).fadeIn(1000);
        setTimeout(function(){jQuery(target).fadeOut(1000); }, 5000);
    }

    $scope.removeFailAlert = function () {
        var newEle = angular.element('<div class="alert alert-danger" role="alert" style="margin: 0px; padding: 10px"><center><strong>Motorcycle Can NOT Remove From Cart</strong> sorry :(</center></div>');
        var target = document.getElementById('removeFailAlert');
        angular.element(target).append(newEle);
        jQuery(target).hide().fadeIn(1000);
        setTimeout(function(){jQuery(target).fadeOut(1000); }, 5000);
    }

    $scope.standByRemoveAlert = function () {
        var newEle = angular.element('<div class="alert alert-warning" role="alert" style="margin: 0px; padding: 10px"><center><strong>You Can Remove A Motorcycle From Cart</strong></center></div>');
        var target = document.getElementById('standByRemoveAlert');
        angular.element(target).append(newEle);
        setInterval(function(){jQuery(target).hide().fadeIn(1000);
            setTimeout(function(){jQuery(target).fadeOut(2000); }, 2000);
        }, 4000)
    }

    var images = [
        "https://ak8.picdn.net/shutterstock/videos/22178959/thumb/1.jpg",
        "https://ak2.picdn.net/shutterstock/videos/22178953/thumb/1.jpg",
        "https://cdn.shutterstock.com/shutterstock/videos/19584043/thumb/1.jpg",
        "https://ak8.picdn.net/shutterstock/videos/19584025/thumb/1.jpg",
        "https://cdn.shutterstock.com/shutterstock/videos/19584049/thumb/1.jpg",
        "https://ak8.picdn.net/shutterstock/videos/19584016/thumb/1.jpg"

    ]

    var imageHeadCart = document.getElementById("image-head-cart");
    var i = 0;

    setInterval(function() {
        imageHeadCart.style.backgroundImage = "url(" + images[i] + ")";
        i = i + 1;
        if (i == images.length) {
            i =  0;
        }
        jQuery(imageHeadCart).hide().fadeIn(1000);


    },15000);

    return init();

}])