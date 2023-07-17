const router = require("express").Router();
const { Comment, Post, User } = require("../models");

// Import the custom middleware
const withAuth = require("../utils/auth");

// GET all posts for homepage
router.get("/", async (req, res) => {
  try {
    const dbPostsData = await Post.findAll({
      include: [
        {
          model: Post,
          attributes: ["post_title", "post_text", "post_date"],
        },
      ],
    });

    const post = dbPostsData.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      post,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
