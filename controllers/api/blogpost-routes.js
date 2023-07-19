const router = require("express").Router();
const Blogpost = require("../../models/Blogpost");

// route to create/add a dish using async/await
router.post("/", async (req, res) => {
  try {
    const blogpostData = await Blogpost.create({
      blogpost_title: req.body.blogpost_title,
      blogpost_text: req.body.blogpost_text,
    });
    // if the blogpost is successfully created, the new response will be returned as json
    res.status(200).json(blogpostData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
