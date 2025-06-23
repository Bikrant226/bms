const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dateOfBuying: {
    type: Date,
    required: true,
    default: Date.now,
  },
  quantity: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  yearFrom: {
    type: Number,
    required: true,
  },
  yearTo: {
    type: Number,
    required: true,
  },
});

const Purchase = mongoose.model("Purchase", purchaseSchema);
module.exports = Purchase;
