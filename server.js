const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const routes = require("./controllers");
const helpers = require("./utils/helpers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3002;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: "Super secret secret",
  // Express session setup cookies
  cookie: {
    // maxAge sets the time where the cookie will expire.
    maxAge: 15 * 60 * 1000,
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

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
