const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/alletags", (req, res) => {
  // logica om de items uit de database op te halen
  const sql = "select * from tag";
  db.all(sql, [], (err, rows) => {
    if (err) return res.json({ result: "nok", message: err.message }); // opvangen van een SQL error
    res.json({ result: "ok", data: rows });
  }); //==> selects
});

router.get("/getTag/:ID", (req, res) => {
  const sql = "select * from tag where tag_id = ?";
  db.all(sql, [req.params.ID], (err, rows) => {
    if (err) return res.json({ result: "nok", message: err.message }); // opvangen van een SQL error
    res.json({ result: "ok", data: rows });
  });
});

router.post("/addTag", (req, res) => {
  const sql = "insert into tag (omschrijving) values (?)";
  db.run(sql, [req.body.omschrijving], (err) => {
    if (err) return res.json({ result: "nok", message: err.message });
    res.json({ result: "gelukt" });
  });
});

router.put("/updateTag", (req, res) => {
  const id = req.body.id;
  const omschrijving = req.body.omschrijving;
  const params = [omschrijving, id];
  const sql = "update item set omschrijving = ? where tag_id= ?";

  db.run(sql, params, (err) => {
    if (err) return res.json({ result: "nok", message: err.message });
    res.json({ result: "up to date" });
  });
});

module.exports = router;
