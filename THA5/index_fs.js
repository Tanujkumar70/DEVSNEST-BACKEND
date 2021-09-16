const fs = require('fs');

fs.mkdirSync("newFolder")

fs.unlinkSync("abPuranaHoGaya.js");
fs.rmdirSync("newFolder");





fs.writeFileSync("nayaFile.js", "message", function (err) {
    if (err) {
        console.log(err);
    }
});