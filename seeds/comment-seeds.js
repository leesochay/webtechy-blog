const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Nunc rhoncus dui vel sem.",
    user_id: 1,
    blogpost_id: 1,
  },
  {
    comment_text: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    user_id: 2,
    blogpost_id: 1,
  },
  {
    comment_text: "Aliquam erat volutpat. In congue.",
    user_id: 3,
    blogpost_id: 2,
  }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;