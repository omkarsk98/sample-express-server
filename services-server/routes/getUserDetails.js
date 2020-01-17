const router = require("express").Router({ mergeParams: true });
const { authenticateUser } = require("../auth/authorization");
const { getPhonesService, getUsernamesService, getDashboardService } = require('../services/getDetails')

router.get('/phones', authenticateUser, function (req, res) {
    return getPhonesService()
        .then(result => {
            res.json({ status: 200, data: result });
        })
        .catch(error => {
            console.log(error)
            res.json({ status: 500, message: error })
        })
})

router.get('/usernames', authenticateUser, function (req, res) {
    return getUsernamesService()
        .then(result => {
            res.json({ status: 200, data: result });
        })
        .catch(error => {
            console.log(error)
            res.json({ status: 500, message: error })
        })
})

router.get('/dashboard/:phone', authenticateUser, function (req, res) {
    const { phone } = req.params;
    return getDashboardService(phone)
        .then(result => {
            res.json({ status: 200, data: result });
        })
        .catch(error => {
            console.log(error)
            res.json({ status: 500, message: error })
        })
})

module.exports = router;