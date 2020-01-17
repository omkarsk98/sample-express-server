const destroyJWT = function (redisClient, token, constants, jwt) {
    return new Promise((resolve, reject) => {
        try {
            var key = jwt.decode(token, constants.jwtSecret)
        } catch (error) {
            reject(error);
        }
        resolve(redisClient.del(key.iss))
    })
}

exports.destroyJWT = destroyJWT;