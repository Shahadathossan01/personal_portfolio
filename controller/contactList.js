const ContactList = require("../models/ContactList")
const Data = require("../models/Data")
const error = require("../utils/error")

const createContactListController=async(req,res,next)=>{
    const id=req.params.dataId
    const {name,email,message}=req.body
    try{
        const contact=await ContactList.create({
            name:name,
            email:email,
            message:message
        })
        console.log(contact)
        const data=await Data.findById(id)
        data.contactList.push(contact._id)
        await data.save()
        res.status(200).json(data)
    }catch{
        next(error)
    }
}
const getContactListController=async(req,res)=>{
    try{
        const contactList=await ContactList.find()
        res.status(200).json(contactList)
    }catch{
        next(error)
    }
}
module.exports={createContactListController,getContactListController}