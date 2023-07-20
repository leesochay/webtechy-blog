const sequelize = require("../config/connection");
const User = require("../models/User");
const Blogpost = require("../models/Blogpost");
const Comment = require("../models/Comment");

const userData = require("./user-seeds.json");
const blogpostData = require("./blogpost-seeds.json");
const commentData = require("./comment-seeds.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blog of blogpostData) {
    await Blogpost.create({
      ...blog,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const comments = await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDatabase();
