
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  img_url: { type: String, required: true }
});

const BlogModel = mongoose.model("blogs", blogSchema);

module.exports = BlogModel;
