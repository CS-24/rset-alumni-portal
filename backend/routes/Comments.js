const express = require('express');
const router = express.router();

const { Comments } = require('../models');

//do Middleware: AccessToken
router.get("/:postId", async (req,res) => {
    const PostId = req.params.PostId;
    const comments = await Comments.findAll({where: {PostId: PostId}});
    res.json(Comments);
});

req.post("/", async (req,res) => {
    const comment = req.body;
    
    await Comments.create(comment);
    res.json(comment);
    // User.findbyPk({where: {userId: userId}});
});

module.exports = router;