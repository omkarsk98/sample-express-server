const bodyParser = require("body-parser");
const { app } = require('./app');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const mongo = require("./connections/mongoConnection");

const getUserDetails = require("./routes/getUserDetails");
const saveToFile = require("./routes/saveToFile");

mongo.connectToServer(function (err, client) {
    if (err) console.log(err);
});

app.use("/", getUserDetails)
app.use('/save-to-file', saveToFile)

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});

const PORT = 3010;
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});