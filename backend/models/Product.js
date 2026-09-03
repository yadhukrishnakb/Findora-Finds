const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image_url: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true, uppercase: true },
  product_link: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);
