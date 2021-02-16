const fs = require("fs"),
    path = require("path"),
    imagesPath = path.resolve("./app/views/img");

module.exports.getImages = () => {
    return fs.readdirSync(imagesPath);
};
