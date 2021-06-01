let mongoose = require("mongoose");

const postMasterSchema = new mongoose.Schema({
  post_id: { type: Number },
  post_requirement_id: { type: Number },
  post_update_id: { type: String },
  post_user_id: { type: Number },
  parent_post_id: { type: Number },
  post_type: { type: String },
  post_user_type: { type: String },
  post_status: { type: String },
});

const PostMaster = mongoose.model("POST_MASTER", postMasterSchema);
module.exports = PostMaster;
