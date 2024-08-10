const express=require('express')
const cors=require('cors')
const connectDB = require('./db')
const error = require('./utils/error')
const port=process.env.PORT || 3000;
const app=express()
app.use(express.json())
const routes=require('./routes')
const Blog = require('./models/Blog')
const Comment = require('./models/Comment')
const ContactList = require('./models/ContactList')
const Data = require('./models/Data')

require('dotenv').config()

app.use(cors())
app.use(routes)

app.get('/user',(req,res)=>{
    res.send('running')
})

app.use((err,req,res,next)=>{
    const message=err.message?err.message:'Server Error Occurred'
    const status=err.status?err.status:500

    res.status(status).json(message)
})

connectDB(process.env.MONGO_URL)
.then(()=>{
    console.log('Database Connected')
    app.listen(port,()=>{
        console.log('server is running')
    })
})
.catch(()=>{
    throw error()
})
