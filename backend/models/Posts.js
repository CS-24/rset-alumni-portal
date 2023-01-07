const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        max:500
    },
    img: {
        type: String,
        default: ""
    },
    likes: {
        type: Array,
        default: []
    },  
},
{ timestamps: true }
);

const Posts = mongoose.model("Posts", postSchema);
module.exports = Posts;


