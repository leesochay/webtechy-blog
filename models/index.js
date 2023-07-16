// import all models
const Post = require("./posts");
const User = require("./user");
const Comment = require("./comments");

// create associations
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Post.hasMany(Comment, {
  foreignKey: "posts_id",
  onDelete: "SET NULL",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(Post, {
  foreignKey: "posts_id",
  onDelete: "SET NULL",
});

module.exports = { Post, User, Comment };
