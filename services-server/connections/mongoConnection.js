const MongoClient = require('mongodb').MongoClient;
const { MONGODB_PORT } = require("../../express-server-config/config")
const url = `mongodb://localhost:${MONGODB_PORT}`;

var _db;

module.exports = {

    connectToServer: function (callback) {
        MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
            _db = client.db('Restaurant');
            console.log("Connected to mongo database");
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    }
};