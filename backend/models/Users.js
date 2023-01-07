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

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        require: true,
        min: 3,
        max: 20
    
    },
    lname: {
        type: String,
        require: true,
        min: 3,
        max: 20
    },
    uid: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        max: 50,
        unique: true
       
    },
    password: {
        type: String,
        require: true,
        min: 8,
        max: 30
    },
    branch: {
        type: String,
        require: true,
       
    },
    year: {
        type: Number,
        require: true,
       
    },
    profilePicture: {
        trpe: String,
        default: ""
    },
    coverPicture: {
        trpe: String,
        default: ""
    },
    followers: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    }    
},
{ timestamps: true }
);

const Users = mongoose.model("Users", userSchema);
module.exports = Users;


