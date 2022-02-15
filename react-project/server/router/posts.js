const express = require('express');
const router = express.Router();
const { postController } = require('../controllers');

// middleware that is specific to this router

router.get('/all', postController.getposts);
router.post('/allByUser', postController.getpostsByUser);
router.get('/details/:id', postController.getpost);
router.post('/create', postController.createpost);
router.get('/delete/:id', postController.deletepost);
router.post('/edit/:id', postController.editpost);
router.put('/like/:id', postController.like);

module.exports = router