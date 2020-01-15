const { runSql } = require("../utils");

const getUserDashboard = function (conn, token) {
    let query = "select * from users where phone=?;";
    return runSql(conn, query, [token])
        .then(result => {
            if (result.length === 0)
                throw "unauthentic"
            return result[0]
        })
}

exports.getUserDashboard = getUserDashboard