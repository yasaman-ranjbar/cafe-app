const mongoose = require("mongoose");
require('./Product')

const schema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: () => Date.now(),
    immutable: false,
  },
  productID: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
  },
});

const model = mongoose.models.comment || mongoose.model("comment", schema);

export default model;
