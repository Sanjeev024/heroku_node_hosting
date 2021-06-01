const express = require("express");
const router = express.Router();
require("../db/conn");
const VENDOR = require("../model/vendorSchema");
const USER = require("../model/userSchema");
const bcrypt = require("bcrypt");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    let token;
    if (!email || !password) {
      return res.status(422).json({ error: "Invalid Data" });
    }
    const userData = await USER.findOne({ email: email });

    token = await userData.generateAuthToken();
    req.session.token = token;
    req.session.userName = userData.name;
    req.session.userEmail = userData.email;
    console.log(req.session);

    if (req.session.userEmail) {
      //   console.log(await bcrypt.compare(password, userData.password));
      const isMatch = await bcrypt.compare(password, userData.password);
      if (!isMatch) {
        return res.status(400).json({ error: "Invalid Credentails" });
      } else {
        return res.status(200).json({
          message: "User Logged in Successfully !",
          token: req.session.token,
        });
      }
    } else {
      return res.status(400).json({ error: "Invalid Credentails" });
    }
  } catch (err) {
    console.log(err);
  }
});

// Promise method
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(422).json({ error: "Please Fill All the Fields!" });
  }
  USER.findOne({ email: email })
    .then((UserExists) => {
      if (UserExists) {
        return res.status(422).json({ error: "Email Id Already Exists" });
      }

      const user = new USER({ name, email, password });

      user
        .save()
        .then(() => {
          res
            .status(201)
            .json({ message: "Sucess! User Registerd Succesfully" });
        })
        .catch((err) =>
          res.status(500).json({ message: "Failed! User Registeration Failed" })
        );
    })
    .catch((err) => console.log(err));
});

// Async Await method
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(422).json({ error: "Please Fill All the Fields!" });
  }
  try {
    const UserExists = await USER.findOne({ email: email });
    if (UserExists) {
      return res.status(422).json({ error: "Email Id Already Exists" });
    }
    const user = new USER({ name, email, password });
    await user.save();
    res.status(201).json({ message: "Sucess! User Registerd Succesfully" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
