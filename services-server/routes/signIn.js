const router = require("express").Router({ mergeParams: true });
const { signInService } = require('../services/signIn');

router.post('/', function (req, res) {
    let { body } = req;
    return signInService(body)
        .then(result => {
            res.json({ status: 200, token: result });
        })
        .catch((err) => {
            console.log(err)
            res.json({ status: 404, message: err });
        })
})

module.exports = router;