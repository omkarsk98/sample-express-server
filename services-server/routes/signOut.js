const router = require("express").Router();
const { authenticateUser } = require("../auth/authorization")
const { signOutService } = require("../services/signOut")

router.get("/", authenticateUser, function (req, res) {
    let { authorization } = req.headers
    let token = authorization.split(" ")[1]
    return signOutService(token)
        .then(result => {
            res.json({ status: 200, msg: result })
        })
        .catch(err => {
            console.log(err);
            res.json({ status: 401, msg: err })
        })

})

module.exports = router;