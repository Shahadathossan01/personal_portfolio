const Home = require("../models/Home")

const createHome=async(name,designation,resume,video_resume,image,tagline)=>{
    const home=await Home.create({
        name:name,
        designation:designation,
        resume:resume,
        video_resume:video_resume,
        image:image,
        tagline:tagline,
    })
    return home
}

module.exports={createHome}