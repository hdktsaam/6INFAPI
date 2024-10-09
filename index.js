require("dotenv").config();
const express = require("express");
var cors = require("cors");

const itemRoutes = require("./routes/item");
const tagRoutes = require("./routes/tag");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/item", itemRoutes);
app.use("/api/tag", tagRoutes);
// app.use("/api/itemTag", )

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server actief op poort: ${PORT}`);
});

// console.log(process.env.DATABASE_URL_SQLITE);
