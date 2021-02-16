const router = require("express").Router(),
    upload = require("../utils/fileUpload")

router.get("/", (req, res, next) => {
    res.send("Nothing here...");
});

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

router.post("/", upload.uploadFiles, function (req, res) {
    res.send("File upload sucessfully.");
});

module.exports = router;
