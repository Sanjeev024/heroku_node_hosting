let mongoose = require("mongoose");

const vendorMediaSchema = new mongoose.Schema({
  media_id: { type: Number },
  vendor_id: { type: Number },
  media_type: { type: String },
  media_link: { type: String },
  media_status: { type: Number },
});

const VendorMedia = mongoose.model("VENDOR_MEDIA", vendorMediaSchema);
module.exports = VendorMedia;
