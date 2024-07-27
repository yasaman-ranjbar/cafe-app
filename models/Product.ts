const mongoose = require("mongoose");
require("./Comment");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  discount: {
    type: String,
    default: 0,
  },
  comment: {
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: "comment",
      },
    ],
  },
  tags: {
    type: [String],
    required: true,
  },
  score: {
    type: Number,
    default: 5,
  },
});

const model = mongoose.models.product || mongoose.model("product", schema);

export default model;
