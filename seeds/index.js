const sequelize = require("../config/connection");
const Blogpost = require("../models/Blogpost");
const blogpostData = require("./blogpost-seeds.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Blogpost.bulkCreate(blogpostData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
