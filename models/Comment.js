const mongoose=require('mongoose')
const {Schema,model}=mongoose

const commentSchema=new Schema({
    text:String,
    date:Date,
    name:{
        type:String,
        required:true
    },
    email:String
})

const Comment=model('Comment',commentSchema)

module.exports=Comment;