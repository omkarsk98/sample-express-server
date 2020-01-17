const { checkUserExist } = require("./checkUserExist");
const { runSql } = require("../utils/runSql");
const { getJWT } = require("../utils/getJWT");

const signUp = function (conn, body) {
        return checkUserExist(conn, body)
                .then(result => {
                        let query = "insert into users value(?,?,?,?);"
                        return runSql(conn, query, [body.username, body.password, body.name, body.phone])
                                .then((result) => {
                                        let token = getJWT(body.phone);
                                        return token
                                });
                })
}

exports.signUp = signUp