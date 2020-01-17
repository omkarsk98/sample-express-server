const getJWT = function (redisClient, data, constants, jwt, moment) {
    let token = jwt.encode({
        iss: data,
        exp: moment().add(constants.redisExpiry,"seconds").valueOf()
    }, constants.jwtSecret);
    redisClient.set(data, token, "EX", constants.redisExpiry)
    return token;
}

exports.getJWT = getJWT;