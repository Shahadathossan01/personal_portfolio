const mongoose=require('mongoose')
const {Schema,model}=mongoose

const contactListSchema=new Schema({
    name:String,
    email:String,
    message:String
})

const ContactList=model('ContactList',contactListSchema)

module.exports=ContactList;