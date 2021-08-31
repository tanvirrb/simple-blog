const express = require('express');
const router = express.Router();
const postController = require('../posts/posts.controller');
const postMiddleware = require('../posts/posts.middleware')

router.post('/posts', postController.createPosts);
router.get('/posts', postController.getPosts);
router.get('/posts/:id', postController.getPostById);
router.put('/posts/:id', postController.updatePostById);
router.delete('/posts/:id', postController.deletePostById);



module.exports = router;
