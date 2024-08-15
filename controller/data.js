const Data = require("../models/Data")
const error = require("../utils/error")

const dataController=async(req,res,next)=>{
    const {basics,education,skills,otherSkills,projects,contact,testimonials,certifications}=req.body

    const {name,designation,resume,video_resume,image,tagline,description,intro_video,summary,yearsOfExperience,age,residence,city}=basics

    const {tagline:{contacTagline},email,phone,address,mapUrl,title,fbLink,linkedinLink,gitHubLink,instraLink,twitterLink,youtubeLink}=contact

    try{
        const data=await Data.create({
            basics:{
                name:name,
                designation:designation,
                resume:resume,
                video_resume:video_resume,
                image:image,
                tagline:tagline,
                description:description,
                intro_video:intro_video,
                summary:summary,
                yearsOfExperience:yearsOfExperience,
                age,
                residence,
                city
            },
            education:education,
            skills:skills,
            otherSkills:otherSkills,
            projects:projects,
            contact:{
                tagline:contacTagline,
                email:email,
                phone:phone,
                address:address,
                mapUrl:mapUrl,
                title:title,
                fbLink:fbLink,
                linkedinLink:linkedinLink,
                gitHubLink:gitHubLink,
                instraLink:instraLink,
                twitterLink:twitterLink,
                youtubeLink:youtubeLink
            },
            testimonials:testimonials,
            certifications:certifications,
        })
        res.send(data)
    }catch{
        next(error)
    }
}
const getDataController=async(req,res,next)=>{
    const data=await Data.find().populate('contactList')
    res.status(200).json(data)
}

module.exports={dataController,getDataController}