const express = require("express"),
    cors = require("cors"),
    logger = require("morgan"),
    bodyParser = require("body-parser"),
    path = require("path");

const index = require("./app/routes/index"),
    widgets = require("./app/routes/widgets");

const app = express(),
    port = 3000;

// view engine setup
app.set("views", path.join(__dirname, "app", "views"));
app.set("view engine", "pug");

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());

app.use("/", index);
app.use("/widgets", widgets);

app.use("/views", express.static(path.join(__dirname, "app", "views")));
app.use("/views/uploads", express.static(path.join(__dirname, "app", "uploads")));

app.get("*", (req, res) => {
    res.status(404).redirect("/home");
});

app.listen(port, () => {
    console.log("Listening port", port);
});
