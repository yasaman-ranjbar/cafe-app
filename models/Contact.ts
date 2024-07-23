const mongoose = require("mongoose");

const schema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  comments: {
      type: String,
      required: true,
  },
  off: {
    type: Number,
    required: false,
  }
  
});

const model = mongoose.models.contact || mongoose.model("contact", schema);

export default model;
