const { runSql } = require("../utils/runSql")

const createSignInLog = function (mysqlConn, username, password, status) {
    let query = 'insert into SignInLogs (username, password, success) values (?,?, ?);'
    return runSql(mysqlConn, query, [username, password, status])
}

exports.createSignInLog = createSignInLog;