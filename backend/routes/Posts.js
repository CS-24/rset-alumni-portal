const express = require('express');
const router = express.Router();

const postModel = require("../models/Posts");
const userModel = require("../models/Users");

//create a post
router.post("/", async (req,res)=> {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }
    catch(err) {
        res.status(500).json(err);
    }
});

//update a post
router.put("/:id", async (req,res)=> {
    try {
        const post = await postModel.findById(req.params.id);
        if(post.userId === req.body.userId) {  
            await post.updateOne({ $set: req.body });
            res.status(200).json("the post has been updated");
        }   
        else {
            res.status(403).json("you can only update your post");
        }
    }
    catch(err) {
        res.status(500).json(err);
    }
});

//delete a post
router.delete("/:id", async (req,res)=> {
    try {
        const post = await postModel.findById(req.params.id);
        if(post.userId === req.body.userId) {  
            await post.deleteOne({ $set: req.body });
            res.status(200).json("the post has been deleted");
        }   
        else {
            res.status(403).json("you can only delete your post");
        }
    }
    catch(err) {
        res.status(500).json(err);
    }
});

//like and dislike a post
router.put("/:id/like", async(req,res)=> {
    try {
        const post = await postModel.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json("The post has been liked");
        }
        else {
            await post.updateOne({ $pull: {likes: req.body.userId} });
            res.status(200).json("The post has been disliked");
        }
    }
    catch(err) {
        res.status(500).json(err);
    }
});

//get a post
router.get("/:id", async(req,res)=> {
    try {
        const post = await postModel.findById(req.params.id);
        res.status(200).json(post);
    }
    catch(err) {
        res.status(500).json(err);
    }
});

//get timeline posts (only of the users followings)
router.get("/timeline/all", async(req,res)=> {
    try {
        const currentUser = await userModel.findById(req.body.userId);
        const userPosts = await postModel.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(          //use PROMISE when you want to loop over something. 
            currentUser.following.map((friendId)=> {
                return postModel.find({ userId: friendId });
            })
        );
        res.json(userPosts.concat(...friendPosts)); 
    }
    catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router