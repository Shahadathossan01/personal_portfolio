const router=require('express').Router()
const authRoutes=require('./data')
const blogRoutes=require('./blog')
const commentRoutes=require('./comment')
const contactListRouter=require('./contactList')

router.use('/api/v1/auth',authRoutes)
router.use('/api/v1/blog',blogRoutes)
router.use('/api/v1/comment',commentRoutes)
router.use('/api/vi/contactList',contactListRouter)

module.exports=router