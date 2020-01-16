const { mysqlConn } = require("../utils/mysqlConnection");
const { getUser } = require("../modules/getUser");

const signInService = function (body) {
    return getUser(mysqlConn, body)
        .then(result => {
            return result
        })
}

exports.signInService = signInService;