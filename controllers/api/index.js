const router = require("express").Router();

// const blogpostRoutes = require("./blogpost-routes.js");
const commentRoutes = require("./comment-routes.js");
// router.use("/blogpost", blogpostRoutes);
router.use("/blogpost", commentRoutes);
module.exports = router;
