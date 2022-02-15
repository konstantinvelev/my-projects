const express = require('express');
const router = express.Router();
const { commentController } = require('../controllers');

// middleware that is specific to this router

router.post('/create', commentController.createcomment);
router.get('/all/:id', commentController.getcomments);
router.put('/edit/:id', commentController.editcomment);
router.put('/like/:id', commentController.like);
router.get('/delete/:id', commentController.deletecomment);

module.exports = router