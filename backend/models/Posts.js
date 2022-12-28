/*
title
postText

FK
UserId
*/

const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: Buffer,
    required: false,
  },
  postText: {
    type: String,
    required: true,
  }
});

const Posts = mongoose.model("Posts", postSchema);
module.exports = Posts;