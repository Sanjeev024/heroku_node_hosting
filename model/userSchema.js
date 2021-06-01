let mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  tokens: [
    {
      token: { type: String },
    },
  ],
});

//Hashing the Password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

//Generating Token

userSchema.methods.generateAuthToken = async function () {
  let token = jwt.sign({ _id: this._id }, process.env.SECRET);
  this.tokens = this.tokens.concat({ token: token });
  await this.save();
  return token;
};

const User = mongoose.model("USER", userSchema);
module.exports = User;
