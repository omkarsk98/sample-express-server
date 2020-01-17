const { destroyJWT } = require("../utils/destroyJWT");

const signOut = function (redisClient, jwt, constants, token) {
    return destroyJWT(redisClient, token, constants, jwt)
}

exports.signOut = signOut