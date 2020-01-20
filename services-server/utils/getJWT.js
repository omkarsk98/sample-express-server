const jwt = require("jwt-simple")
const { REDIS_TOKEN_EXPIRY, JWT_SECRET } = require("../../../express-server-config/config");
const { redisClient } = require("../connections/redisConnection");
const moment = require("moment")

const getJWT = function (data) {
    let token = jwt.encode({
        iss: data,
        exp: moment().add(REDIS_TOKEN_EXPIRY, "seconds").valueOf()
    }, JWT_SECRET);
    redisClient.set(data, token, "EX", REDIS_TOKEN_EXPIRY)
    return token;
}

exports.getJWT = getJWT;