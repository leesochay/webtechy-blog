const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

const userData = require("./UserData.json");
const postsData = require("./PostsData.json");
const commentsData = require("./CommentsData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postsData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const comment = await Comment.bulkCreate(commentsData);

  process.exit(0);
};

seedDatabase();
