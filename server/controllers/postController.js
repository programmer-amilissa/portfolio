const asyncHandler = require('express-async-handler')
const { globalAgent } = require('http')

const Post = require('../models/postModel')
const User = require('../models/userModel')

// @desc    get Posts
// @route   GET /api/posts
// @access  Private

const getPosts = asyncHandler(async (req, res) =>{

    const posts = await Post.find({author: req.user.id})

    res.status(200).json(posts)
})

// @desc    set Post
// @route   POST /api/posts
// @access  Private

const setPost = asyncHandler(async (req, res) =>{
    
    if(!req.body.title&&!req.body.author&&!req.body.desc&&!req.body.link){
        res.status(400)
        throw new Error('Please add a value')
    }

    const post = await Post.create({
        title: req.body.title,
        author:req.user.id,
        description:req.body.desc,
        link:req.body.link
    })

    res.status(200).json(post)
})

// @desc    update Post
// @route   UPDATE /api/posts/:id
// @access  Private

const updatePost =  asyncHandler(async (req, res) =>{

    const post = await Post.findById(req.params.id)

    if(!post){
        res.status(400)
        throw new Error('Post not Found')
    }

    // Check for user
    if(!req.user){
        res.status(400)
        throw new Error('User not Found')
    }

    // Make sure user posts
    if(post.author.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not Authorized')
    }


    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    })


    res.status(200).json(updatedPost)
})

// @desc    delete Posts
// @route   DELETE /api/pos/:id
// @access  Private

const deletePost =  asyncHandler(async (req, res) =>{

    const post = await Post.findById(req.params.id)

    if(!post){
        res.status(400)
        throw new Error('Post not Found')
    }

    // Check for user
    if(!req.user){
        res.status(400)
        throw new Error('User not Found')
    }

    // Make sure user posts
    if(post.author.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not Authorized')
    }


    await post.remove()


    res.status(200).json({id: req.params.id})
})


module.exports = {
    getPosts,
    setPost,
    updatePost,
    deletePost
}