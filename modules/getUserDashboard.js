const { runSql } = require("../utils/runSql")

const getUserDashboard = function (conn, phone) {
    let query = "select * from users where phone=?;";
    return runSql(conn, query, [phone])
        .then(result => {
            if (result.length === 0)
                throw "No data found"
            return result[0]
        })
}

exports.getUserDashboard = getUserDashboard