const Blog = require("../models/Blog")
const Comment = require("../models/Comment")
const error = require("../utils/error")

const createCommentController=async(req,res,next)=>{
    const {blogId}=req.params
    const {text,date,name,email}=req.body
    try{
        const comment=await Comment.create({
            text:text,
            date:date,
            name:name,
            email:email
        })
        const blog=await Blog.findById(blogId)
        blog.comments.push(comment._id)
        await blog.save()
        res.send(comment)
    }catch{
        next(error)
    }
}
const updateCommentController=async(req,res,next)=>{
    const id=req.params.id
    const {text,date,name,email}=req.body
    try{
        const comments=await Comment.findById(id).updateOne({_id:id},{ $set: {
            text:text,
            data:date,
            name:name,
            email:email
        }})
        res.status(200).json(comments)
    }catch{
        next(error)
    }
}
const getCommentController=async(req,res,next)=>{
    try{
        const comments=await Comment.find()
        res.status(200).json(comments)
    }catch{
        next(error)
    }
}
const deleteCommentController=async(req,res,next)=>{
    const id=req.params.id
    console.log(id)
    try{
        const comment=await Comment.findById(id).deleteOne({_id: id})
        res.status(200).json(comment)
    }catch{
        next(error)
    }
}

module.exports={createCommentController,updateCommentController,getCommentController,deleteCommentController}