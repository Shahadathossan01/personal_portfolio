const mongoose=require('mongoose')
const {Schema,model}=mongoose

const homeSchema=new Schema({
    name:String,
    designation:String,
    resume:String,
    video_resume:String,
    image:String,
    tagline:String
})

const Home=model('Home',homeSchema)

module.exports=Home;