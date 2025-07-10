const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true, unique : true, match : [/.+\@.+\..+/, "Invalid email format"]},
    password : {type : String, required : true}
},{
    versionKey : false,
    timestamps : true
})

const UserModel = mongoose.models.user || mongoose.model("user", userSchema);

module.exports = {UserModel}