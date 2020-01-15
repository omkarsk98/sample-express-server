const { runSql } = require("../utils/runSql")

const checkUserExist = function (conn, body) {
        let query = "select * from users where username=? or phone=?";
        return runSql(conn, query, [body.username, body.phone])
            .then((res) => {
                if (res.length === 0)
                    return true;
                if (res[0].username === body.username){
                    console.log(res[0].username,body.username)
                    throw "Username already exists";
                }
                throw "Phone already exists";
            })
}

exports.checkUserExist = checkUserExist;