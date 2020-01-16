const signOut = function (redisClient, jwt, jwtSecret, token) {
    return new Promise((resolve, reject) => {
        try {
            var key = jwt.decode(token, jwtSecret)
        } catch (error) {
            reject(error);
        }
        resolve(redisClient.del(key.iss))
    })
}

exports.signOut = signOut