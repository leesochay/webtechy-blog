const sequelize = require("../config/connection");
const { Posts, User, Comments } = require("../models");

const userData = require("./UserData.json");
const postsData = require("./PostsData.json");
const commentsData = require("./CommentsData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const posts of postsData) {
    await Posts.create({
      ...posts,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const comments = await Comments.bulkCreate(commentsData);

  process.exit(0);
};

seedDatabase();
