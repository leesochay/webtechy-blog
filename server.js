const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

// Set up handlebars

const hbs = exphbs.create({ helpers });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Sets up the Express App
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(require("./controllers/routes"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import express-session

const SequelizeStore = require("connect-session-sequelize")(session.Store);
const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");
app.use(routes);

// Sets up session and connect to our Sequelize db
const sess = {
  secret: "Super secret secret",
  // Express session setup cookies
  cookie: {
    // maxAge sets the time where the cookie will expire.
    maxAge: 60 * 60 * 1000,
    // only store session cookies when connected to HTTP.
    httpOnly: true,
    // express-session to initialize only when connected via HTTPS, set to false.
    secure: false,
    // express-session only initializes when the referrer provided by the client matches the domain out server is hosted from.
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const PORT = process.env.PORT || 3001;

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
