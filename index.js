const bodyParser = require("body-parser");
const { app } = require('./app');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const mongo = require("./connections/mongoConnection");

const signUp = require("./routes/signUp");
const signIn = require("./routes/signIn");
const getUserDetails = require("./routes/getUserDetails");
const saveToFile = require("./routes/saveToFile");
const signOut = require("./routes/signOut");

mongo.connectToServer(function (err, client) {
    if (err) console.log(err);
});

app.use("/sign-up", signUp)
app.use("/sign-in", signIn)
app.use("/", getUserDetails)
app.use('/save-to-file', saveToFile)
app.use('/sign-out', signOut)

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});

const PORT = 3010;
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});