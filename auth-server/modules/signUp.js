const { checkUserExist } = require("./checkUserExist");
const { runSql } = require("../utils/runSql");
const { getJWT } = require("../utils/getJWT");

const signUp = function (mysqlConn, redisClient, eventEmitter, data, constants, jwt, moment) {
    return checkUserExist(mysqlConn, data)
        .then(result => {
            let query = "insert into users value(?,?,?,?);"
            return runSql(mysqlConn, query, [data.username, data.password, data.name, data.phone])
        })
        .then(result => {
            let token = getJWT(redisClient, data.phone, constants, jwt, moment);
            return token
        })
}

exports.signUp = signUp