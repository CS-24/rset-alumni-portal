/*
commentBody

FK
PostId
UserId
*/

const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  commentText: {
    type: String,
    required: true,
  },
});

const Comments = mongoose.model("Comments", commentSchema);
module.exports = Comments;

