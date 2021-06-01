let mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  city_id: { type: Number },
  state_id: { type: Number },
  city_name: { type: String },
  city_code: { type: Number },
});

const City = mongoose.model("CITY", citySchema);
module.exports = City;
