const router = require("express").Router(),
    fetchFiles = require("../utils/fetchFiles");

router.get("/", (req, res) => {
    res.redirect("/home");
});

router.get("/home", (req, res) => {
    res.render("home", {
        host: req.rawHeaders[1]
    });
});

router.get("/fetchImgs", (req, res) => {
    res.send(fetchFiles.getImages());
});

module.exports = router;
