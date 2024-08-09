const mongoose=require('mongoose')
const {Schema,model}=mongoose

const blogSchema=new Schema({
    title:String,
    image:String,
    description:String,
    video_content:String,
    category:String,
    comments:[
        {
            type:Schema.Types.ObjectId,
            ref:"Comment"
        }
    ]
})

const Blog=model('Blog',blogSchema)

module.exports=Blog