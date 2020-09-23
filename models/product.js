const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create Schema and Model

const ProductSchema = new Schema({
  name: String,
  type: String,
  amount: Number,
  price: Number,
  id: String,
  authorName: String,
  authorId: String,
  createdAt: Date
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;
