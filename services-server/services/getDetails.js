const { mysqlConn } = require("../connections/mysqlConnection");
const { getAllPhones } = require("../modules/getAllPhones");
const { getAllUsernames } = require("../modules/getAllUsernames");
const { getUserDashboard } = require("../modules/getUserDashboard");

const getPhonesService = function () {
    return getAllPhones(mysqlConn)
        .then(result => {
            return result;
        })
}

const getUsernamesService = function () {
    return getAllUsernames(mysqlConn);
}

const getDashboardService = function (phone) {
    return getUserDashboard(mysqlConn, phone);
}

exports.getPhonesService = getPhonesService;
exports.getUsernamesService = getUsernamesService;
exports.getDashboardService = getDashboardService;