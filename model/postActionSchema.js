let mongoose = require("mongoose");

const postActionSchema = new mongoose.Schema({
  post_action_id: { type: Number },
  post_id: { type: Number },
  actor_id: { type: Number },
  post_user_id: { type: Number },
  post_action_type: { type: String },
  post_action_desc: { type: String },
  post_action_status: { type: String },
});

const PostAction = mongoose.model("POSTACTION", postActionSchema);
module.exports = PostAction;
