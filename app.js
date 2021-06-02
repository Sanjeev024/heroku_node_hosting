const host = "0.0.0.0";
const port = process.env.PORT || 300;
const express = require("express");

const cors = require("cors");
const app = express();
app.use(cors());

const host = "0.0.0.0";
const port = process.env.PORT || 300;
require("./db/conn");

app.use(express.json());
app.use(require("./routes/vendorAPI"));

app.listen(port, () => {
  console.log(`Server app listening at http://localhost:${port}`);
});
