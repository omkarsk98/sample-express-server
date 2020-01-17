const { eventEmitter } = require("../connections/eventEmitter");
const { conn } = require("../connections/mysqlConnection");
const { createSignInLog } = require("../events/createSignInLog")

const signInLogs = function (username, password) {
    return createSignInLog( conn, username, password)
}

exports.signInLogs = signInLogs;