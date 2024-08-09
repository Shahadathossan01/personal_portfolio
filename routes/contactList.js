const { createContactListController, getContactListController } = require('../controller/contactList')

const router=require('express').Router()

router.post('/:dataId',createContactListController)
router.get('',getContactListController)

module.exports=router


