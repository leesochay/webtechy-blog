// import all models
const Posts = require("./posts");
const User = require("./user");
const Comments = require("./comments");

// create associations
User.hasMany(Posts, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Comments, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Posts.hasMany(Comments, {
  foreignKey: "posts_id",
  onDelete: "CASCADE",
});

Posts.belongsTo(User, {
  foreignKey: "user_id",
});

Comments.belongsTo(User, {
  foreignKey: "user_id",
});

Comments.belongsTo(Posts, {
  foreignKey: "posts_id",
});

module.exports = { Posts, User, Comments };
