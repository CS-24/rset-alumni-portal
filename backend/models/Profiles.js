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
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    uid: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    
});

const Profiles = mongoose.model("Profiles", profileSchema);
module.exports = Profiles;


