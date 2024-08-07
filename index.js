const express=require('express')
const cors=require('cors')
const connectDB = require('./db')
const error = require('./utils/error')
const mongoose = require('mongoose')
const port=3000
const app=express()

app.get('/',(req,res)=>{
    res.json('Welcome to my server!!!')
})

app.use((err,req,res,next)=>{
    const message=err.message?err.message:'Server Error Occurred'
    const status=err.status?err.status:500

    res.status(status).json(message)
})

connectDB('mongodb+srv://shahadat:shahadat1234@portfolio.d8fxm.mongodb.net/')
.then(()=>{
    console.log('Database Connected')

    app.listen(port,()=>{
        console.log('server is running')
    })
})
.catch(()=>{
    throw error()
})


// shahadat1234