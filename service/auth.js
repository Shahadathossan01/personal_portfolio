const Home = require("../models/Home")
const { createHome } = require("./Home")

const homeService=async(name,designation,resume,video_resume,image,tagline)=>{
   return await createHome(name,designation,resume,video_resume,image,tagline)
}

module.exports={homeService}