const sequelize = require("../config/connection");

const seedBlogpost = require('./blogpost-seeds');
const seedComment = require('./comment-seeds');
const seedUser = require('./user-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedBlogpost();
  await seedComment();

  process.exit(0);
};

seedAll();

