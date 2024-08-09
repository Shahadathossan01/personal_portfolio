const Blog = require("../models/Blog")
const error = require("../utils/error")

const blogCreateController=async(req,res,next)=>{
    const {title,image,description,video_content,category,comment}=req.body
    const blog=await Blog.create({
        title:title,
        image:image,
        description:description,
        video_content:video_content,
        category:category,
    })
    res.status(200).json(blog)
}
const getBlogsController=async(req,res,next)=>{
    try{
        const blogs=await Blog.find()
        res.status(200).json(blogs)
    }catch{
        next(error)
    }
}
const getBlogControllerById=async(req,res,next)=>{
    const id=req.params.id
    try{
        const blog=await Blog.findById(id).populate('comments')
        res.status(200).json(blog)
    }catch{
        next(error)
    }
}
module.exports={blogCreateController,getBlogsController,getBlogControllerById}