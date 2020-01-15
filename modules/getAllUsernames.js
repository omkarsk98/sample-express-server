const { runSql } = require("../utils/runSql")

const getAllUsernames = function (conn) {
    let query = "select username from users;";
    return runSql(conn, query)
        .then(result => {
            return result
        })
}

exports.getAllUsernames = getAllUsernames