const { createCommentController, updateCommentController, getCommentController, deleteCommentController } = require('../controller/comment')

const router=require('express').Router()

router.post('/:blogId',createCommentController)
router.patch('/:id',updateCommentController)
router.get('',getCommentController)
router.delete('/comment/:id',deleteCommentController)

module.exports=router