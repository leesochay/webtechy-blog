const router = require("express").Router();

const blogpostRoutes = require("./blogpost-routes.js");

router.use("/blogpost", blogpostRoutes);

module.exports = router;
