const express = require("express");
const app = express();
const { PORT = 8000 } = process.env;

const expressLayout = require("express-ejs-layouts");
const setDefault = (req, res, next) => {
  res.locals.contentName = "Default";

  next();
};

// View Engine
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(expressLayout);
app.set("layout", "layouts/default");

// parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const router = require("./router");
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
