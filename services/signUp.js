const { mysqlConn } = require("../utils/mysqlConnection");
const { signUp } = require("../modules/signUp")

const signUpService = function (body) {
    return signUp(mysqlConn, body)
        .then(result => {
            return result
        })
}

exports.signUpService = signUpService;