let mongoose = require("mongoose");

const vendorReviewsSchema = new mongoose.Schema({
  review_id: { type: Number },
  customer_id: { type: Number },
  vendor_id: { type: Number },
  category_of_service: { type: String },
  date_of_service_taken: { type: String },
  photography_skill_rating: { type: String },
  professionalisum_rating: { type: String },
  quality_rating: { type: String },
  creativity_rating: { type: String },
  value_of_money_rating: { type: String },
  recommend_photographer: { type: Number },
  customer_name: { type: String },
  customer_email_id: { type: String },
  customer_mobile_num: { type: String },
  review_comments: { type: String },
  rated_by: { type: String },
  rated_date: { type: Date },
  ip_address: { type: String },
  is_approved: { type: Number },
});

const VendorReviews = mongoose.model("VENDOR_REVIEWS", vendorReviewsSchema);
module.exports = VendorReviews;
