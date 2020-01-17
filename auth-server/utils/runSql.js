const runSql = function (conn, query, paramsArr) {
    return new Promise((resolve, reject) => {
        conn.query(query, paramsArr, function (error, result) {
            if (error) {
                return reject(error);
            }
            return resolve(result);
        })
    })
}

exports.runSql = runSql;