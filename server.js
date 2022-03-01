const express = require("express");
const session = require("express-session");
const passport = require("./lib/passport");
const app = express();
const { PORT = 8000 } = process.env;

const expressLayout = require("express-ejs-layouts");
// const setDefault = (req, res, next) => {
//   res.locals.contentName = "Default";

//   next();
// };

// View Engine
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(expressLayout);
app.use((req, res, next) => {
  res.locals.contentName = "Default";

  next();
});
app.set("layout", "layouts/default");
app.use(
  session({
    secret: "Ciptowi",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const router = require("./router");
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
