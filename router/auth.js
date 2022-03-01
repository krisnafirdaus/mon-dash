const router = require("express").Router();
const { auth } = require("../controllers");

router.get("/login", auth.login);
router.post("/login", auth.api.login);
router.use((req, res, next) => {
  res.locals.layout = `layouts/auth`;
  next();
});

module.exports = router;
