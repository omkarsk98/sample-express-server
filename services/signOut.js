const { redisClient } = require("../connections/redisConnection");
const jwt = require('jwt-simple')
const { signOut } = require("../modules/signOut")
const config = require('../config');


const signOutService = function (token) {
    return signOut(redisClient, jwt, config.jwtSecret, token);
}

exports.signOutService = signOutService;