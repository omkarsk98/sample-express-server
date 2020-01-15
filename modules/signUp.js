const { checkUserExist } = require("./checkUserExist");
const { runSql } = require("../utils")

const signUp = function (conn, body) {
    return checkUserExist(conn, body)
        .then(result => {
                let query = "insert into users value(?,?,?,?);"
                return runSql(conn, query, [body.username, body.password, body.name, body.phone]).then(()=>{return 'Success'});
        })
}

exports.signUp = signUp