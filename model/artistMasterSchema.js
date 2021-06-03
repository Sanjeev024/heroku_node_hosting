let mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
  id: { type: Number },
  artist_type: { type: String },
  plural_form: { type: String },
  description: { type: String },
  has_video: { type: Number },
  has_extrafields: { type: Number },
  is_active: { type: Number },
  timestamp: { type: Date },
});

const Artist = mongoose.model("ARTIST", artistSchema);
module.exports = Artist;
