let mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
  artist_id: { type: Number },
  artist_bio: { type: String },
  artist_type: { type: String },
});

const Artist = mongoose.model("ARTIST", artistSchema);
module.exports = Artist;
