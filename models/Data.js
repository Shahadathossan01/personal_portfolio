const mongoose=require('mongoose')
const {Schema,model}=mongoose

const dataSchema=new Schema({
    basics:{
        name:String,
        designation:String,
        resume:String,
        video_resume:String,
        image:String,
        tagline:String,
        description:String,
        intro_video:String,
        summary:String,
        yearsOfExperience:Number,
        profiles:[],
        

    },
    education:[
        {
            institution:String,
            studyType:String,
            startDate:String,
            endDate:String
        }
    ],
    skills:[
        {
            name:String,
            logo:String,
            category:String
        }
    ],
    projects:[
        {
            name:String,
            description:String,
            image:String,
            liveUrl:String,
            gitHubLink:String,
            duration:Number
        }
    ],
    contact:{
        title:String,
        description:String,
        tagline:String,
        email:String,
        phone:Number,
        address:String,
        fbLink:String,
        linkedinLink:String,
        gitHubLink:String,
        contactList:[{
            name:String,
            email:String,
            message:String
        }]
    },
    testimonials:[],
    certifications:[],
    page_not_found:{
        title:String,
        short:String,
        description:String,
        image:String
    }

})

const Data=model('Data',dataSchema)
module.exports=Data