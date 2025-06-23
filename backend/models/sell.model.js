const mongoose = require("mongoose");

const sellSchema = new mongoose.Schema({
  purchaseReference: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Purchase", // reference the Buy model
    required: true,
  },
  soldTo: {
    type: String,
    required: true,
  },
  dateOfSelling: {
    type: Date,
    default: Date.now,
  },
  quantitySold: {
    type: Number,
    required: true,
  },
  sellingPrice: {
    type: Number,
    required: true,
  },
  amountReceived: {
    type: Number,
    required: true,
  },
});

const Sell = mongoose.model("Sell", sellSchema);
module.exports = Sell;
