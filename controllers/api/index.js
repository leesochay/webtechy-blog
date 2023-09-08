const router = require('express').Router();

const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const blogpostRoutes = require('./blogpostRoutes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/blogposts', blogpostRoutes);

module.exports = router;
