const router = require('express').Router();
const users = require('./users');
const posts = require('./posts');
const comments = require('./comments');
const likes = require('./likes');

router.use('/users', users);
router.use('/posts', posts);
router.use('/comments', comments);
router.use('/likes', likes);

module.exports = router;