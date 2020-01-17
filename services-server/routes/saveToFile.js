const router = require("express").Router();
const { authenticateUser } = require("../auth/authorization");
const { saveToFileService, deleteFileService } = require('../services/fileSystemService')
const stream = require('stream');

router.post('/', authenticateUser, function (req, res) {
    const { data } = req.body;
    var fileContents = Buffer.from(data, "utf8");

    var readStream = new stream.PassThrough();
    readStream.end(fileContents);

    res.set('Content-disposition', 'attachment; filename=data.txt');
    res.set('Content-Type', 'text/plain');

    readStream.pipe(res);
    // return saveToFileService(data)
    //     .then(result => {
    //         res.download(result, function (err) {
    //             if (err)
    //                 throw err
    //             return deleteFileService(result)
    //         })
    //     })
    //     .catch(error => {
    //         res.json({ status: 500, error: error })
    //     })
})

module.exports = router