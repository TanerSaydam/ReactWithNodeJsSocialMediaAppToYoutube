const express = require("express");
const Post = require("../models/post");
const router = express.Router();
const {v4:uuidv4} = require("uuid");

//Post Add
router.post("/post", async(req,res)=>{
    try {
        const {userId, content} = req.body;
        const post = new Post({
            _id: uuidv4(),
            userId: userId,
            content: content,
            createdDate: new Date()
        });

        await post.save();
        res.json({message: "Post shared!"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//Get Posts
router.get("/posts", async (req, res)=>{
    try {
        const posts = await Post.aggregate([
            {
                $lookup:{
                    from: "users",
                    localField: "userId",
                    foreignField: "_id",
                    as: "users"
                }
            }
        ]).sort({createdDate: -1});

        res.json(posts);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;