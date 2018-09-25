angular.module("myApplication").directive("motorcycleItem",function(){

  return {

        restrict:'E',
        templateUrl:'Directives/motorcycleItem.html',
        scope:{
            id:'=',
            motorcycleType:'=',
            motorcyclePrice:'=',
            motorcycleImg:'=',
            addToCart:'&'
        },
        link: function(scope,element,attribute){
        },

  }

})