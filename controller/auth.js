const Data = require("../models/Data")
const error = require("../utils/error")

const dataController=async(req,res,next)=>{
    const {basics,education,skills,projects,contact,testimonials,certifications,page_not_found}=req.body

    const {name,designation,resume,video_resume,image,tagline,description,intro_video,summary,profiles,yearsOfExperience,}=basics

    const {title,description:{contactDes},tagline:{contacTagline},email,phone,address,fbLink,linkedinLink,gitHubLink,contactList}=contact

    const {name:contactName,email:contactEmail,message}=contactList

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
                gitHubLink:gitHubLink,
                contactList:contactList
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
    const data=await Data.find()
    res.status(200).json(data)
}
const addContactListController=async(req,res,next)=>{
    const id=req.params.id
    const {name,email,message}=req.body
    const updatedData={
        name:name,
        email:email,
        message:message
    }
    try{
        const data=await Data.findById(id)
        console.log(data)
        if(data){
            data.contact.contactList.push(updatedData)

            await data.save()
            res.status(200).json({message:"added new contactList"})
        }else{
            res.status(404).json({message:'not added'})
        }
        res.send(data)
    }catch{
        next(error)
    }
}

module.exports={dataController,getDataController,addContactListController}