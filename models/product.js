const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  emoji: String,
  cat: String
});

module.exports = mongoose.model('Product', productSchema);