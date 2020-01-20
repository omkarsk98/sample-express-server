const getJWT = function (redisClient, data, constants, jwt, moment) {
    let token = jwt.encode({
        iss: data,
        exp: moment().add(constants.REDIS_TOKEN_EXPIRY,"seconds").valueOf()
    }, constants.JWT_SECRET);
    redisClient.set(data, token, "EX", constants.REDIS_TOKEN_EXPIRY)
    return token;
}

exports.getJWT = getJWT;