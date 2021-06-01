let mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  vendor_id: { type: Number },
  vendor_name: { type: String },
  vendor_lastname: { type: String },
  vendor_email: { type: String },
  vendor_avatar: { type: String },
  vendor_coverpic: { type: String },
  artist_type: { type: String },
  vendor_city: { type: String },
});

const Vendor = mongoose.model("VENDOR", vendorSchema);
module.exports = Vendor;
