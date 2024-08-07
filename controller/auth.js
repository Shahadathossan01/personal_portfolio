const Home = require("../models/Home")
const { homeService } = require("../service/auth")
const error = require("../utils/error")

const homeController=async(req,res,next)=>{
    const {name,designation,resume,video_resume,image,tagline}=req.body
    try{
        const home=await homeService(name,designation,resume,video_resume,image,tagline)
        console.log(home)
        res.status(200).json(home)
    }catch{
        next(error)
    }
    
}

module.exports={homeController}