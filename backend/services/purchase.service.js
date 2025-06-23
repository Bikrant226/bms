const Purchase = require("../models/purchase.model");

exports.purchaseTrees = async (purchaseData) => {
  const newPurchase = new Purchase(purchaseData);
  return await newPurchase.save();
};
