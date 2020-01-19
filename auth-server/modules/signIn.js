const { runSql } = require("../../services-server/utils/runSql");
const { getJWT } = require("../utils/getJWT");

const signIn = function (mysqlConn, redisClient, eventEmitter, data, constants, jwt, moment) {
    let query = "select phone from users where username=? and password=?;";
    return runSql(mysqlConn, query, [data.username, data.password])
        .then((res) => {
            if (res.length === 0) {
                eventEmitter.emit("CreateSignInLog", mysqlConn, data.username, data.password, false);
                throw "user not found";
            }
            eventEmitter.emit("CreateSignInLog", mysqlConn, data.username, data.password, true);
            var token = getJWT(redisClient, res[0].phone, constants, jwt, moment)
            return token;
        })
}

exports.signIn = signIn;