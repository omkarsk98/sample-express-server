const jwt = require("jwt-simple")
const config = require("../config");
const { redisClient } = require("../redisConnection");
const moment = require("moment")

const getJWT = function (data) {
    let token = jwt.encode({
        iss: data,
        exp: moment().add(config.redisExpiry,"seconds").valueOf()
    }, config.jwtSecret);
    redisClient.set(data, token, "EX", config.redisExpiry)
    return token;
}

exports.getJWT = getJWT;