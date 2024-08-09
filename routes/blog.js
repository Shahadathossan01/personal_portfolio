
const { blogCreateController, getBlogsController, getBlogControllerById, createCommentController } = require('../controller/blog')

const router=require('express').Router()

router.post('',blogCreateController)
router.get('',getBlogsController)
router.get('/:id',getBlogControllerById)
// router.post('/:id/comment',createCommentController)
module.exports=router