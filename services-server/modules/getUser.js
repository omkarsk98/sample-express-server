const { runSql } = require("../utils/runSql")
const { getJWT } = require("../utils/getJWT");

const getUser = function (eventEmitter, conn, body) {
    let query = "select phone from users where username=? and password=?;";
    return runSql(conn, query, [body.username, body.password])
        .then((res) => {
            if (res.length === 0) {
                eventEmitter.emit("CreateSignInLog", conn, body.username, body.password, false);
                throw "user not found";
            }
            eventEmitter.emit("CreateSignInLog", conn, body.username, body.password, true);
            var token = getJWT(res[0].phone)
            return token;
        })
}

exports.getUser = getUser;