const router = require("express").Router({ mergeParams: true });
const { signUpService } = require('../services/signUp');

router.post('/', function (req, res) {
    let { body } = req;
    return signUpService(body)
        .then(result => {
            res.json({ status: 200, token: result })
        })
        .catch(error => {
            console.log(error)
            res.json({ status: 200, message: error });
        })
})

module.exports = router;