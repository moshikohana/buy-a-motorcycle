var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    Name: String,
    UserName: String,
    Password:Number
})

module.exports = mongoose.model("User",UserSchema);