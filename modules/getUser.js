const { runSql } = require("../utils")
const moment = require("moment");
const jwt = require('jwt-simple');
const { redisClient, redisGetAsync } = require("../redisConnection");
const { app } = require('../app')

const getUser = function (conn, body) {
    let query = "select phone from users where username=? and password=?;";
    return runSql(conn, query, [body.username, body.password])
        .then((res) => {
            if (res.length === 0)
                throw "user not found";
            const expire = moment().add(20, "minutes").valueOf();
            var token = jwt.encode({
                iss: res[0].phone,
                exp: expire
            }, app.get("jwtTokenSecret"));
            redisClient.set(res[0].phone, token, "EX", 30)
            return token;
        })
}

exports.getUser = getUser;