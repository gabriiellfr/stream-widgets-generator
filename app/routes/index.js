const router = require("express").Router(),
    fetchFiles = require("../utils/fetchFiles"),
    upload = require("../utils/fileUpload");

router.get("/home", (req, res) => {
    res.render("home", {
        host: req.rawHeaders[1]
    });
});

router.get("/fetchImgs", (req, res) => {
    res.send(fetchFiles.getImages());
});

router.post("/", upload.uploadFiles, function (req, res) {
    res.send("File upload sucessfully.");
});

module.exports = router;
