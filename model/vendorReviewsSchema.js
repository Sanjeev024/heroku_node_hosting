let mongoose = require("mongoose");

const vendorReviewsSchema = new mongoose.Schema({
  review_id: { type: Number },
  vendor_id: { type: Number },
  vendor_rating: { type: Number },
  customer_name: { type: String },
  customer_id: { type: Number },
  review_comments: { type: String },
  rated_date: { type: Date },
  is_approved: { type: Number },
});

const VendorReviews = mongoose.model("VENDOR_REVIEWS", vendorReviewsSchema);
module.exports = VendorReviews;
