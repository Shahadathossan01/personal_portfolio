const { createCommentController, updateCommentController } = require('../controller/comment')

const router=require('express').Router()

router.post('/:blogId',createCommentController)
router.patch('/:id',updateCommentController)

module.exports=router