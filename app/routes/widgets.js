const router = require("express").Router();

router.get("/:text/:textColor/:bgColor/:imageName?/:imageFormat?", (req, res) => {
    res.render("widgets", {
        title: "Widgets",
        text: req.params.text,
        textColor: req.params.textColor.replace("@", "#"),
        bgColor: req.params.bgColor.replace("@", "#"),
        imageName: req.params.imageName,
        imageFormat: req.params.imageFormat
    });
});

module.exports = router;
