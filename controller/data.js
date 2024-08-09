const Data = require("../models/Data")
const error = require("../utils/error")

const dataController=async(req,res,next)=>{
    const {basics,education,skills,projects,contact,testimonials,certifications,page_not_found}=req.body

    const {name,designation,resume,video_resume,image,tagline,description,intro_video,summary,profiles,yearsOfExperience,}=basics

    const {title,description:{contactDes},tagline:{contacTagline},email,phone,address,fbLink,linkedinLink,gitHubLink}=contact

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
                profiles:profiles
            },
            education:education,
            skills:skills,
            projects:projects,
            contact:{
                title:title,
                description:contactDes,
                tagline:contacTagline,
                email:email,
                phone:phone,
                address:address,
                fbLink:fbLink,
                linkedinLink:linkedinLink,
                gitHubLink:gitHubLink
            },
            testimonials:testimonials,
            certifications:certifications,
            page_not_found:page_not_found

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