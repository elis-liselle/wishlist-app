const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const wishSchema = new Schema({
  wish: {
    type: String,
  },
});

mongoose.model("Wish", wishSchema);