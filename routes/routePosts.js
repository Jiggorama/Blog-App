const { Router } = require('express')
const con = require('../controllers/conPosts')
const router = Router()

router.get('/posts', con.getPosts)
router.get('/posts/:id', con.getPost)
router.post('/posts', con.createPost)
router.put('/posts/:id', con.updatePost)
router.delete('/posts/:id', con.deletePost)

module.exports = router