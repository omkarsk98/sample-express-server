const { mysqlConn } = require("../connections/mysqlConnection");
const { redisClient } = require("../connections/redisConnection");
const { eventEmitter } = require("../connections/eventEmitter")
const { signIn } = require("../modules/signIn");
const { signUp } = require("../modules/signUp");
const { signOut } = require("../modules/signOut")
const config = require('../../config/config');
const moment = require('moment');
const jwt = require('jwt-simple');

const signInService = function (data) {
    return signIn(mysqlConn, redisClient, eventEmitter, data, config, jwt, moment)
}

const signUpService = function (data) {
    return signUp(mysqlConn, redisClient, eventEmitter, data, config, jwt, moment)
}

const signOutService = function (token) {
    return signOut(redisClient, jwt, config, token)
}

module.exports = {
    signInService: signInService,
    signUpService: signUpService,
    signOutService: signOutService
}