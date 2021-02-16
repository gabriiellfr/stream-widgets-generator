const multer = require("multer"),
    fs = require("fs"),
    path = require("path"),
    filePath = path.resolve("./app/views/img");

if (!fs.existsSync(filePath))
    fs.mkdirSync(filePath, {
        recursive: true
    });

const storageContestFiles = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, filePath);
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + "." + file.originalname.split(".")[1]);
    }
});

const uploadFiles = multer({ storage: storageContestFiles }).array("InputFileUpload", 5);

module.exports.uploadFiles = (req, res, next) => {
    uploadFiles(req, res, err => {
        return next();
    });
};
