const router = require("express").Router();
const { Blogpost, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// Create a new post
router.post("/", async (req, res) => {
    try {
      const newBlogpost = await Blogpost.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      res.status(200).json(newBlogpost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // Update existing blogpost
  router.put("/:id", async (req, res) => {
    try {
      const updatedBlogpost = await Blogpost.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updatedBlogpost) {
        res.status(404).json({ message: "No post found with that id!" });
        return;
      }
      res.status(200).json(updatedBlogpost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // Delete a blogpost
router.delete("/:id", async (req, res) => {
    try {
      // Delete comments associated with blogpost
      await Comment.destroy({
        where: { blogpost_id: req.params.id },
      });
      const deletedBlogpost = await Blogpost.destroy({
        where: { id: req.params.id },
      });
      if (!deletedBlogpost) {
        res.status(404).json({ message: "No post found with that id!" });
        return;
      }
      res.status(200).json(deletedBlogpost);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
 
  module.exports = router;
