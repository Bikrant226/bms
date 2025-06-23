const Sell = require("../models/sell.model");
const Purchase = require("../models/purchase.model");
const mongoose = require("mongoose");

exports.sellTrees = async (sellData) => {
  const { purchaseReference, quantitySold } = sellData;

  if (!mongoose.Types.ObjectId.isValid(purchaseReference)) {
    throw new Error("Invalid purchase reference ID.");
  }

  const purchase = await Purchase.findById(purchaseReference);

  if (!purchase) {
    throw new Error("Purchase not found.");
  }

  const availableQuantity = purchase.quantity;
  if (quantitySold > availableQuantity || quantitySold < 0) {
    throw new Error(
      `Cannot sell ${quantitySold} kg of betelnuts. Only ${availableQuantity}kg is left.`
    );
  }

  const quantityLeft = availableQuantity - quantitySold;

  const remainingQuantity = await Purchase.findByIdAndUpdate(
    purchaseReference,
    { quantity: quantityLeft },
    { new: true }
  );

  const newSell = new Sell(sellData);
  return await newSell.save();
};
