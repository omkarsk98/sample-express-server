const router = require("express").Router();
const { authenticateUser } = require("../../auth-server/auth/authorization");
const fs = require("fs")
const path = require('path')

router.get("/", authenticateUser, function (req, res) {
    res.header({
        'Content-Disposition': 'attachment; filename="download.mp3"'
    });
    fs.createReadStream(path.join(__dirname, '../userFiles/sample.mp3')).pipe(res);
})

module.exports = router