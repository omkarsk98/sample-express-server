const EventEmitter = require('events').EventEmitter
const { sayHelloEvent } = require('../events/sayHello');
const { createSignInLog } = require("../events/createSignInLogs");

const appEventEmitter = new EventEmitter();

appEventEmitter.on("hello", sayHelloEvent);
appEventEmitter.on("CreateSignInLog", createSignInLog);


exports.eventEmitter = appEventEmitter;