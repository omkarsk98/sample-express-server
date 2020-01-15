const { runSql } = require("../utils/runSql")

const getUserDashboard = function (conn, token) {
    let query = "select * from users where phone=?;";
    return runSql(conn, query, [token])
        .then(result => {
            if (result.length === 0)
                throw "No data found"
            return result[0]
        })
}

exports.getUserDashboard = getUserDashboard