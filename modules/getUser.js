const { runSql } = require("../utils/runSql")
const { getJWT } = require("../utils/getJWT");

const getUser = function (conn, body) {
    let query = "select phone from users where username=? and password=?;";
    return runSql(conn, query, [body.username, body.password])
        .then((res) => {
            if (res.length === 0)
                throw "user not found";
            var token = getJWT(res[0].phone)
            return token;
        })
}

exports.getUser = getUser;