const express=require('express')
const cors=require('cors')
const port=3000
const app=express()

app.get('/',(req,res)=>{
    res.json('Welcome to my server!!!')
})

app.listen(port,()=>{
    console.log('server is running')
})
