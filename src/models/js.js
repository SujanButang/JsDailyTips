import mongoose from "mongoose";

const JSSchema = new mongoose.Schema({
  title: String,
  content: String,
});

export default mongoose.models.JS || mongoose.model("JS", JSSchema);
