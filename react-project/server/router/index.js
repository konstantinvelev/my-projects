const router = require('express').Router();
const posts = require('./posts');
const comments = require('./comments');

router.use('/posts', posts);
router.use('/comments', comments);

module.exports = router;