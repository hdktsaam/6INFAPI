const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database/voorbeeld.sqlite3", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("connected to database voorbeeld");
});

module.exports = db;
