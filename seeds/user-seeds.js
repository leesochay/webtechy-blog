const { User } = require('../models');

const userData = [
  {
    username: "Bono",
    password: "withorwithoutyou",
  },
  {
    username: "Pele",
    password: "footballlegend",
  },
  {
    username: "Winter",
    password: "coffeeroaster",
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;