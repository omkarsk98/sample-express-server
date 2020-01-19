const router = require("express").Router({ mergeParams: true });
const { signInService, signOutService, signUpService } = require('../services/auth');
const { authenticateUser } = require("../auth/authorization")

router.post('/sign-in', function (req, res) {
    const { body } = req;
    return signInService(body)
        .then(result => {
            res.json({ status: 200, message: result })
        })
        .catch(error => {
            res.json({ status: 500, message: error })
        })
})

router.post('/sign-up', function (req, res) {
    const { body } = req;
    return signUpService(body)
        .then(result => {
            res.json({ status: 200, message: result })
        })
        .catch(error => {
            res.json({ status: 500, message: error })
        })
})

router.get('/sign-out', authenticateUser, function (req, res) {
    const { authorization } = req.headers;
    return signOutService(authorization.split(" ")[1])
        .then(result => {
            res.json({ status: 200, message: result })
        })
        .catch(error => {
            res.json({ status: 500, message: error })
        })
})

module.exports = router;