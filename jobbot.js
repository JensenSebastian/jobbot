const express = require("express");
const expressHandlebars = require("express-handlebars");

let app = express();

app.engine("handlebars", expressHandlebars());
app.set("view engine", "handlebars");

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/foretag", (req, res) => {
  res.render("foretag");
});
app.get("/arbetssokande", (req, res) => {
  res.render("arbetssokande");
});
app.get("/frilansare", (req, res) => {
  res.render("frilansare");
});
app.get("/kunder", (req, res) => {
  res.render("kunder");
});

app.listen(3000, () => {
  console.log("Running web server on port 3000. Press Ctrl + C to exit ...");
});
