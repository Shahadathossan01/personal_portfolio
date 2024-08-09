const { dataController, getDataController} = require('../controller/data')
const { blogCreateController } = require('../controller/blog')

const router=require('express').Router()

router.post('/data',dataController)
router.get('/data',getDataController)
router.post('/blog',blogCreateController)

module.exports=router