var express = require("express");
var router = express.Router();
var moviesRouter = require("./movies");
app.use("/api/movies", moviesRouter);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
