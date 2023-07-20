const router = require("express").Router();
const Comment = require("../../models/Comment");

router.post("blogpost/:id}", async (req, res) => {
  try {
    const commentData = await Comment.create({
      comment_text: req.body.comment_text,
    });
    // if the blogpost is successfully created, the new response will be returned as json
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
