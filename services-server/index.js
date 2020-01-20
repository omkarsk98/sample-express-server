const bodyParser = require("body-parser");
const { app } = require('./app');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const mongo = require("./connections/mongoConnection");
const { SERVICES_SERVER_PORT } = require("../config/config")

const getUserDetails = require("./routes/getUserDetails");
const saveToFile = require("./routes/saveToFile");
const playMp3 = require("./routes/playMp3")

mongo.connectToServer(function (err, client) {
    if (err) console.log(err);
});

app.use("/", getUserDetails)
app.use('/save-to-file', saveToFile)
app.use("/play-mp3", playMp3);

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});

app.listen(SERVICES_SERVER_PORT, () => {
    console.log(`App running on http://localhost:${SERVICES_SERVER_PORT}`);
});

const AUTH_SERVER_PORT = 3010;
const SERVICES_SERVER_PORT = 3005;
const JWT_SECRET = 'jwtSecret';
const REDIS_TOKEN_EXPIRY = 3600 // in seconds
const MONGODB_PORT = 27017
