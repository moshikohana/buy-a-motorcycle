angular.module("myApplication").directive("cartItem",function(){

    return {

        restrict:'E',
        templateUrl:'Directives/cartItem.html',
        scope:{
            id:'=',
            motorcycleType:'=',
            motorcyclePrice:'=',
            motorcycleImg:'=',
            removeFromCart:'&'
        },
        link: function(scope,element,attribute){
        },

    }

})
