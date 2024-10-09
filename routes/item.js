const express = require("express");
const router = express.Router();
const itemController = require("../controller/itemController");

// maak connectie met mijn databank

router.get("/alleItems", itemController.getAllItems);
router.get("/getItem/:ID", itemController.getItemByID);
router.post("/addItem", itemController.addItem);
router.put("/updateItem", itemController.updateItem);

module.exports = router;
