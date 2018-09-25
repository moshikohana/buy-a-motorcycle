angular.module("myApplication").service("motorcyclesService",["$http","$rootScope","$q",function($http,$rootScope,$q){

    this.motorcyclesArray = [
        {motorcycleId:1, Type:"Honda CBR", Img:"https://auto.ndtvimg.com/bike-images/colors/honda/cbr-1000rr/honda-cbr-1000rr-victory-red.png?v=16",Price:"10$"},
        {motorcycleId:2, Type:"Kawasaki ZX6R", Img:"http://s-media-cache-ak0.pinimg.com/originals/02/cb/41/02cb41ec6cf4e13ee199631162259320.png",Price:"6$"},
        {motorcycleId:3, Type:"Suzuki GSXR", Img:"http://www.freeiconspng.com/uploads/motorcycle-png-24.png",Price:"7$"},
        {motorcycleId:4, Type:"Yamaha R6", Img:"http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Yamaha-YZF-R6-Sport-Motorcycle-Bike-PNG-Image.png",Price:"9$"}

    ]

    //this.cartArray = [];
    this.addMotorcycle = function(motorcycle,user){
        var localUrl = '/postMotors';
        var _data = motorcycle;
        return $http({
            method:'post',
            url:$rootScope.url + localUrl,
            data:_data
        })
        //this.cartArray.push(motorcycle);
    }

}]);
