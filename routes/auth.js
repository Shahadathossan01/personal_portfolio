const { dataController, getDataController, addContactListController } = require('../controller/auth')

const router=require('express').Router()

router.post('/data',dataController)
router.get('/data',getDataController)
router.post('/data/:id',addContactListController)

module.exports=router