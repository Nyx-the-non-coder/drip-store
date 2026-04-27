const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/dripstore')
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use(express.static('public'));
app.use('/api/products', require('./routes/products'));

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});