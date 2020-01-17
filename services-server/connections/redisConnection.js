const redisClient = require('redis').createClient();

redisClient.on('connect', () => {
    console.log('Connected to redis');
});

redisClient.on('error', (err) => {
    console.log('Redis error: ', err);
});

redisClient.flushdb(function (err, succeeded) {
    console.log(succeeded); // will be true if successfull
});

const redisGetAsync = function (key) {
    return new Promise((resolve, reject) => {
        redisClient.get(key, function (error, result) {
            if (error)
                return reject(error)
            return resolve(result)
        })
    })
}

exports.redisClient = redisClient;
exports.redisGetAsync = redisGetAsync;