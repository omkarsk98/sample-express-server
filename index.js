const bodyParser = require("body-parser");
const { app } = require('./app');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const { mysqlConn } = require("./utils/mysqlConnection");
const mongo = require("./utils/mongoConnection");
const { getUser } = require("./modules/getUser");
const { signUp } = require("./modules/signUp");
const { getUserDashboard } = require("./modules/getUserDashboard");
const { authenticateUser } = require("./auth/authorization");
const { getAllPhones } = require("./modules/getAllPhones");
const { getAllUsernames } = require("./modules/getAllUsernames");

mongo.connectToServer(function (err, client) {
    if (err) console.log(err);
});

app.post("/sign-up", function (req, res) {
    let { body } = req;
    return signUp(mysqlConn, body)
        .then(result => {
            res.json({ status: 200, token: result })
        })
        .catch(error => {
            console.log(error)
            res.json({ status: 200, message: error });
        })
})

app.post("/sign-in", function (req, res) {
    let { body } = req;
    return getUser(mysqlConn, body)
        .then(result => {
            res.json({ status: 200, token: result });
        })
        .catch((err) => {
            console.log(err)
            res.json({ status: 404, message: err });
        })
})

app.get("/", function (req, res) {
    res.send("Hello World")
})

app.get("/dashboard", authenticateUser, function (req, res) {
    let { authorization } = req.headers;
    return getUserDashboard(mysqlConn, authorization.split(" ")[1])
        .then(result => {
            res.json({ status: 200, data: result })
        })
        .catch(error => {
            res.json({ status: 401, msg: error })
        })
})

app.get("/phones", authenticateUser, function (req, res) {
    // get all phones
    return getAllPhones(mysqlConn)
        .then(result => {
            res.json({ status: 200, data: result });
        })
        .catch(error => {
            res.json({ status: 500, message: error })
        })
})

app.get("/usernames", authenticateUser, function (req, res) {
    // get all usernames
    return getAllUsernames(mysqlConn)
        .then(result => {
            res.json({ status: 200, data: result });
        })
        .catch(error => {
            res.json({ status: 500, message: error })
        })
})

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});

const PORT = 3010;
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});