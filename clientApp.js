
angular.module("myApplication",["ui.router"]).config(["$httpProvider","$stateProvider","$urlRouterProvider",function($httpProvider,$stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/home')
    $stateProvider
    .state(
        'Home',{
            url:'/home',
            controller:'HomeCtrl',
            templateUrl:'views/home.html',

        }
    ).state(
        'Login',{
            url:'/login',
            controller:'LoginCtrl',
            templateUrl:'views/Login.html',

        }
        ).state(
            'Logout',{
                url:'/logout',
                controller:'LogOutCtrl',
                templateUrl:'views/Logout.html',
            }  
   ).state(
        'Registration',{
            url:'/registration',
            controller:'RegistrationCtrl',
            templateUrl:'views/Registration.html',
        }
   ).state(
        'Motorcycles',{
            url:'/motorcycles',
            controller:'MotorcyclesCtrl',
            templateUrl:'views/Motorcycles.html',
        }
   ).state(
        'Cart',{
            url:'/cart',
            controller:'CartCtrl',
            templateUrl:'views/Cart.html',
        }

   ).state(
        'About',{
            url:'/about',
            controller:'AboutCtrl',
            templateUrl:'views/About.html',

        })

}]).run(["$rootScope","$state",function($rootScope,$state){

    console.log("Client side is running");

    $rootScope.productionUrl = "https://moshiko-motorcycle.herokuapp.com";
    $rootScope.devUrl = "http://localhost:5000";
    $rootScope.url = $rootScope.productionUrl;

    $rootScope.loggedIn = false;
    if ($rootScope.loggedIn == true){

    }
    // $rootScope.$on('$stateChangeStart',function(event,toState,toParams,fromState) {
    //     if (toState.name == "Home") {
    //         console.log("im here");
    //         event.url("www.google.com");
    //     }
    // });
    $rootScope.$on('$stateChangeStart',function(event,toState,toParams,fromState) {
        if (toState.name == "Logout") {
            if ($rootScope.loggedIn == false) {
                console.log($rootScope.loggedIn, "access to logout rejected");
                alert("You must Login first");
                event.preventDefault();
            }
        }
    })
    // $rootScope.$on('$stateChangeStart',function(event,toState,toParams,fromState) {
    //      if (toState.name == "About") {
    //          if ($rootScope.loggedIn == false) {
    //              console.log($rootScope.loggedIn, "access to About rejected");
    //              event.preventDefault();
    //          }
    //          else {
    //          console.log($rootScope.loggedIn, "access to About approved");
    //          }
    //      }
    //  })

     $rootScope.$on('$stateChangeStart',function(event,toState,toParams,fromState) {
         if (toState.name == "Motorcycles") {
             if ($rootScope.loggedIn == false) {
                 alert("access to Motorcycles rejected");
                 event.preventDefault();
             }
             else {
                 console.log($rootScope.loggedIn, "access to Motorcycles approved");
             }
         }
     })

    $rootScope.$on('$stateChangeStart',function(event,toState,toParams,fromState) {
        if (toState.name == "Cart") {
            if ($rootScope.loggedIn == false) {
                alert("access to Motorcycles rejected");
                event.preventDefault();
            }
            else {
                console.log($rootScope.loggedIn, "access to Cart approved");
            }
        }
    })
    $rootScope.$on('$stateChangeStart',function(event,toState,toParams,fromState) {
        if (toState.name == "Login") {
            if ($rootScope.loggedIn == true) {
                alert("You are allready Logged in");
                event.preventDefault();
            }
        }
    })
    $rootScope.$on('$stateChangeStart',function(event,toState,toParams,fromState) {
        if (toState.name == "Registration") {
            if ($rootScope.loggedIn == true) {
                alert("You are allready Logged in");
                event.preventDefault();
            }
        }
    })
}])





