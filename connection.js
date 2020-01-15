const mysql = require("mysql2");
const conn = mysql.createConnection({
  host: "localhost",
  user: "learner",
  password: "learnIt",
  database: "Tokens",
  multipleStatements: true
});

conn.connect(function(err) {
  if (err) console.warn(err);
  console.log("Connected to the database");
});


module.exports = {
  conn: conn
};
