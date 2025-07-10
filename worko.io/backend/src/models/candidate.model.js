const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
    userId : {type : mongoose.Schema.Types.ObjectId, ref : "user"},
    name : {type : String, required : true},
    email : {type : String, required : true, unique : true, match : [/.+\@.+\..+/, "Invalid email format"]},
    phone : {type : String, required : true, match : [/^\d{10}$/, "Phone number must be 10 digits"]},
    jobTitle : {type : String, required : true},
    status : {type : String, enum : ['Pending','Reviewed','Hired'], default : 'Pending'},
    resumeUrl : {type : String}
},{
    versionKey : false,
    timestamps : true
})

const CandidateModel = mongoose.models.candidate || mongoose.model("candidate", candidateSchema)

module.exports = {CandidateModel}