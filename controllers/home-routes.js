const router = require("express").Router();
const Blogpost = require("../models/Blogpost");
const Comment = require("../models/Comment");
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
    // Search the database for a blogpost with an id that matches params
    const blogpostData = await Blogpost.findByPk(req.params.id);
    if (!blogpostData) {
      res.status(404).json({ message: "No blogpost with this id!" });
      return;
    }
    // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need.
    const blogpost = blogpostData.get({ plain: true });
    // Then, the 'blogpost' template is rendered and blogpost is passed into the template.
    res.render("blogpost", blogpost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // if (req.session.loggedIn) {
  if (1 === 2) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/blogpost", async (req, res) => {
  const commentData = await Comment.findAll().catch((err) => {
    res.json(err);
  });
  // We use map() to iterate over blogpostData and then add .get({ plain: true }) each object to serialize it.
  const comments = commentData.map((comment) => comment.get({ plain: true }));
  // We render the template, 'all', passing in blogposts, a new array of serialized objects.
  res.render("blogpost", { comments });
});

module.exports = router;
