/*
Fname
Lname
bio
yearOfGraduation
branch

FK
UserId
*/
const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    fname: {
        type: String,
    
    },
    lname: {
        type: String,
       
    },
    uid: {
        type: String,
       
    },
    email: {
        type: String,
       
    },
    password: {
        type: String,
       
    },
    branch: {
        type: String,
       
    },
    year: {
        type: Number,
       
    },
    
});

const Profiles = mongoose.model("Profiles", profileSchema);
module.exports = Profiles;


