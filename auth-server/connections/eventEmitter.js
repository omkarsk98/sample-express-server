const EventEmitter = require('events').EventEmitter
const appEventEmitter = new EventEmitter();
const { createSignInLog } = require("../events/signInLog")

appEventEmitter.on("CreateSignInLog", createSignInLog);

exports.eventEmitter = appEventEmitter;