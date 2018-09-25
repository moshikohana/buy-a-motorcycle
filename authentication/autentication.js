var auth = {};


auth.userList = [];
auth.userKeys = {};


//var initUser = { userName:"Gal" , password: "1234"};
//auth.userList.push(initUser);


auth.Register = function () {

    this.firstName = undefined;
    this.password = undefined;

    auth.Register.prototype.setInfo = function (firstName, password) {

        this.firstName = firstName;

        this.password = password;
    };
};



auth.isAuth = function(session){

    if (auth.userKeys[session] === null) return false;
    return true;
};

auth.isAuthbyUserObject = function(currentUser){
    console.log("isAuthbyUserObject func call");

    //console.log("auth.userKeys: (isAuthByUserObj)",auth.userKeys);
    console.log(("auth.userKeys: ", auth.userKeys));

    for(var entry in auth.userKeys) {

        if (auth.userKeys.hasOwnProperty(currentUser))
            console.log(entry + " -> " + auth.userKeys[currentUser]);
        return true;
    }
}

auth.addAuth = function(currentUser){
    console.log("addAuth func call");
    var key = guid();
    auth.userKeys[key] = currentUser;
    return key;
}

auth.isUserReg = function (currentUser) {
    console.log("isUserReg func call");
    console.log(auth.userList);

    for(var i = 0; i<auth.userList.length; i++) {
        console.log("auth.userList[i]: ",auth.userList[i]);
        if (auth.userList[i].firstName === currentUser.firstName &&
            //auth.userList[i].lastName === currentUser.lastName &&
            auth.userList[i].password === currentUser.password){
            return currentUser;
        }
        return false;
    }

};


auth.removeAuth = function(key){
    delete auth.userKeys[key];
}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

module.exports = auth;