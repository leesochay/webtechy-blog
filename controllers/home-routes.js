const router = require("express").Router();
const { Comment, Posts, User } = require("../models");

// Import the custom middleware
const withAuth = require("../utils/auth");

// GET all posts for homepage
router.get("/", async (req, res) => {
  try {
    const dbPostsData = await Posts.findAll({
      include: [
        {
          model: Posts,
          attributes: ["post_title", "post_text", "post_date"],
        },
      ],
    });

    const posts = dbPostsData.map((posts) => posts.get({ plain: true }));

    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
