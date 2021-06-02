const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());

var session = require("express-session");
app.use(
  session({
    secret: "1234567890QWERT",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);

const host = "0.0.0.0";
const port = process.env.PORT || 300;
require("./db/conn");
const USER = require("./model/userSchema");
app.use(express.json());
app.use(require("./routes/vendorAPI"));

app.listen(port, host, () => {
  console.log(`Server app listening at http://localhost:${port}`);
});
