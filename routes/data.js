const { dataController, getDataController} = require('../controller/data')

const router=require('express').Router()

router.post('',dataController)
router.get('',getDataController)

module.exports=router