const bodyParser = require("body-parser");
const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const config = require('../express-server-config/config');
const authRouter = require("./routes/auth")

app.use("/", authRouter)

app.use(function (err, req, res, next) {
    // to handle errors
    res.status(err.status || 500);
    res.send(err.message);
});

app.listen(config.AUTH_SERVER_PORT , function () {
    console.log(`App running on http://localhost:${config.AUTH_SERVER_PORT}`);
})
