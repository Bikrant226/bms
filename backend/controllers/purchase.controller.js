const purchaseService = require("../services/purchase.service");

exports.buyTrees = async (req, res) => {
  try {
    const purchase = await purchaseService.purchaseTrees(req.body);
    res.status(201).send({
      message: "Purchase was successful.",
      data: purchase,
    });
  } catch (error) {
    console.error("Purchase failed:", error);
    res.status(500).send({ message: "Internal server error" });
  }
};
