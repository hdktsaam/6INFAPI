const db = require("../database");

const getAllItems = (req, res) => {
  // logica om de items uit de database op te halen
  const sql = "select * from item";
  db.all(sql, [], (err, rows) => {
    if (err) return res.json({ result: "nok", message: err.message }); // opvangen van een SQL error
    res.json({ result: "ok", data: rows });
  }); //==> selects
};

const getItemByID = (req, res) => {
  const sql = "select * from item where item_id = ?";
  db.all(sql, [req.params.ID], (err, rows) => {
    if (err) return res.json({ result: "nok", message: err.message }); // opvangen van een SQL error
    res.json({ result: "ok", data: rows });
  });
};

const addItem = (req, res) => {
  const sql = "insert into item (omschrijving, zichtbaar) values (?,?)";
  db.run(sql, [req.body.itemOmschrijving, true], (err) => {
    if (err) return res.json({ result: "nok", message: err.message });
    res.json({ result: "gelukt" });
  });
};

const updateItem = (req, res) => {
  const id = req.body.item_id;
  const zichtbaar = req.body.zichtbaar;
  const params = [zichtbaar, id];
  const sql = "update item set zichtbaar = ? where item_id= ?";

  db.run(sql, params, (err) => {
    if (err) return res.json({ result: "nok", message: err.message });
    res.json({ result: "up to date" });
  });
};

module.exports = {
  getAllItems,
  getItemByID,
  addItem,
  updateItem,
};
