const router = require("express").Router();
const { dashboard } = require("../controllers");

// const layoutName = (req, res, next) => {
//   res.locals.layout = `layouts/${layoutName}`;
//   next();
// };

router.use((req, res, next) => {
  res.locals.layout = `layouts/dashboard`;
  next();
});
router.get("/", dashboard.home);
router.get("/post", dashboard.post.index);

module.exports = router;
