var express = require("express");
var router = express.Router();
var auth = require("../authentication/autentication");
var clientCart = require("../models/motorcycles");
var counter = 0;
router.post("/register", function (req,res,next) {

    var firstName = req.body.firstName !==null ? req.body.firstName : null;
    var password = req.body.password !==null ? req.body.password : null;
    var motorcycle = [];
    var newUser = new auth.Register();
    newUser.setInfo(firstName, password, motorcycle);
    auth.userList.push(newUser);

    console.log(req.body);
    console.log("UserList: ", auth.userList);

  //  res.send("Registration Success");
    res.send(auth.userList);
});

function checkUserList(newUser){
    console.log("Im in the check func", newUser);
    return true;
}
router.post("/login",function(req,res,next){
    for (var i = 0 ; i < auth.userList.length ; i++) {
        if (req.body.firstName == auth.userList[i].firstName && req.body.password == auth.userList[i].password) {

            console.log(req.body);
            console.log("UserList: ", auth.userList);
            res.send("Authorized");
        }
    }
    res.status(401).send("UnAuthorized");
})

router.post("/logout",function(req,res,next){
    res.send("logout success");
});

router.get("/getUsers",function(req,res,next){
    var val = auth.userList;
    for (var i = 0; i < auth.userList; i++) {
        val = auth.userList[i];
        console.log(val);
    }
    res.send(val);
})

router.post("/postMotors", function (req,res,next) {
    console.log("im here ", req.body.user);
    // for(var i=0;i<auth.userList.length;i++) {
    //     if(userList[i].firstName == req.body.user){
    //         console.log("this is the user we need");
    //     }
    // }
    console.log(auth.userList)
    clientCart.push(req.body);
    console.log(clientCart);
    res.send(clientCart);

});

router.get("/getMotors",function(req,res,next){
    var val = clientCart;
    for (var i = 0; i < clientCart; i++) {
        val = clientCart[i];
        console.log(val);
    }
    res.send(val);
})

router.post("/removeMotor", function (req,res,next) {
    var index = req.body['$index'];
    console.log("The motorcycle who removed is ", clientCart[index]);
    clientCart.splice(index, 1);
    res.send(clientCart[index].Price);
});

router.post("/removeAllMotors", function (req,res,next) {
    clientCart = [];
});

module.exports = router;



