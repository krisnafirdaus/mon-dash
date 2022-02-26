const moment = require("moment");
const posts = [
  { id: 1, title: "Pertama", body: "Dolor ipsum deler", createdAt: Date() },
  { id: 2, title: "Kedua", body: "Dolor ipsum deler", createdAt: Date() },
];

module.exports = {
  index: (req, res) => {
    const locals = {
      data: {
        posts: posts.map((i) => {
          i.fromNow = moment(i.createdAt).fromNow();
          return i;
        }),
      },
      contentName: "Post",
    };
    res.render("pages/dashboard/post", locals);
  },
};
