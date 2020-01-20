const bodyParser = require("body-parser");
const { app } = require('./app');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const mongo = require("./connections/mongoConnection");
const { SERVICES_SERVER_PORT } = require("../express-server-config/config")

const getUserDetails = require("./routes/getUserDetails");
const saveToFile = require("./routes/saveToFile");
const downloadMp3 = require("./routes/downloadMp3")

mongo.connectToServer(function (err, client) {
    if (err) console.log(err);
});

app.use("/", getUserDetails)
app.use('/save-to-file', saveToFile)
app.use("/download-mp3", downloadMp3);

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});

app.listen(SERVICES_SERVER_PORT, () => {
    console.log(`App running on http://localhost:${SERVICES_SERVER_PORT}`);
});
