const express = require("express"),
    cors = require("cors"),
    app = express(),
    PORT = 3005;

app.use(cors());
app.use("/views", express.static("views"));
app.set("view engine", "jade");

app.get(
    "/generator/:text/:textColor/:bgColor/:imageName/:imageFormat",
    (req, res) => {
        console.log(req.params);

        res.render("widgets", {
            text: req.params.text,
            textColor: req.params.textColor.replace("@", "#"),
            bgColor: req.params.bgColor.replace("@", "#"),
            imageName: req.params.imageName,
            imageFormat: req.params.imageFormat
        });
    }
);

app.listen(PORT, () => {
    console.log(`Listening port ${PORT}`);
});
