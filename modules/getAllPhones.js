const { runSql } = require("../utils");

const getAllPhones = function (conn) {
    let query = "select phone from users;";
    return runSql(conn, query)
        .then(result => {
            return result
        })
}

exports.getAllPhones = getAllPhones