const router = require("express").Router();
const Blogpost = require("../models/Blogpost");

// route to get all blogposts
router.get("/", async (req, res) => {
  const blogpostData = await Blogpost.findAll().catch((err) => {
    res.json(err);
  });
  // We use map() to iterate over blogpostData and then add .get({ plain: true }) each object to serialize it.
  const blogposts = blogpostData.map((blogpost) =>
    blogpost.get({ plain: true })
  );
  // We render the template, 'all', passing in blogposts, a new array of serialized objects.
  res.render("homepage", { blogposts });
});

// get one blogpost with serialized data
router.get("/blogpost/:id", async (req, res) => {
  try {
    // Search the database for a dish with an id that matches params
    const blogpostData = await Blogpost.findByPk(req.params.id);
    if (!blogpostData) {
      res.status(404).json({ message: "No blogpost with this id!" });
      return;
    }
    // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need.
    const blogpost = blogpostData.get({ plain: true });
    // Then, the 'blogpost' template is rendered and dish is passed into the template.
    res.render("blogpost", blogpost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
