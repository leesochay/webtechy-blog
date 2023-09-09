const router = require("express").Router();
const { Blogpost, User, Comment } = require("../models");
// const withAuth = require("../utils/auth");

// render the homepage
router.get("/", async (req, res) => {
  try {
    // get all the blogposts and join with user data
    const blogpostData = await Blogpost.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ]
    });
    // serialize the data so the template can read it
    const blogposts = blogpostData.map((blogpost) => blogpost.get({ plain: true }));

    // pass the serialized data and session flag into the template
    res.render("homepage", { 
        blogposts, 
        logged_in: req.session.logged_in
        });
      } catch (err) {
      res.status(500).json(err);
      }
    });

// Route to render individual post page

router.get('/blogposts/:id', async (req, res) => {
  try {
  // Find post by ID with associated username
    const blogpostData = await Blogpost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ["comment_text", "user_id"],
        },
      ],
    });

// Convert post data to plain JavaScript object
    const blogpost = blogpostData.get({ plain: true });
	
console.log(blogpost);
    res.render('blogpost', {
      ...blogpost,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Blogpost
        },
      ],
    });

    const blogposts = userData.get({ plain: true });

    res.render('dashboard', {
      ...blogposts,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// login
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// signup
router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});


module.exports = router;
