const { homeController } = require('../controller/auth')

const router=require('express').Router()

router.post('/home',homeController)

module.exports=router