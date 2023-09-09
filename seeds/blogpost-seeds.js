const { Blogpost } = require('../models');

const blogpostData = [
  {
    blogpost_title: "Object-oriented programming",
    blogpost_text: "From Wikipedia, Object-Oriented Programming (OOP) is a programming paradigm based on the concept of objects (can contain data and code). The data is in the form of fields (attributes or properties), and the code is in the form of procedures (methods).",
    user_id: 1,
  },
  {
    blogpost_title: "Session vs. Cookies",
    blogpost_text: "From javapoint.com, both session and cookies are important as they keep track of information provided by a user. The main difference is that sessions are saved on the server-side, whereas cookies are saved on the user's browser or client-side.",
    user_id: 2,
  },
  {
    blogpost_title: "Model-View-Controller (MVC)",
    blogpost_text: "From MDN Web Docs, MVC (Model-View-Controller) is used to implement user interfaces, data, and controlling logic. It emphasizes a separation of concerns between logic and display providing a division of labor and improved maintenance.",
    user_id: 3,
  }
];

const seedBlogpost = () => Blogpost.bulkCreate(blogpostData);

module.exports = seedBlogpost;
