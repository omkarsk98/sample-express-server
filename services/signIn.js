const { mysqlConn } = require("../connections/mysqlConnection");
const { getUser } = require("../modules/getUser");
const { eventEmitter } = require("../connections/eventEmitter")

const signInService = function (body) {
    return getUser(eventEmitter, mysqlConn, body);
}

exports.signInService = signInService;