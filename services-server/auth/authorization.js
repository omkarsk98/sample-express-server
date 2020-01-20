const { redisGetAsync } = require("../connections/redisConnection");
const jwt = require('jwt-simple');
const { JWT_SECRET } = require('../../express-server-config/config')

const authenticateUser = function (req, res, next) {
    const err = new Error("Not authorized! Go back!");
    err.status = 401;
    const { authorization } = req.headers;
    let token = authorization && authorization.split(" ")[1];
    if (token === undefined) {
        return next(err);
    }
    try {

        var key = jwt.decode(token, JWT_SECRET)
    } catch (error) {
        // console.log("Decode error", error)
        return next(err);
    }
    return redisGetAsync(key.iss)
        .then(result => {
            if (result === null || result != token) {
                return next(err);
            }
            return next();
        })
}
exports.authenticateUser = authenticateUser;