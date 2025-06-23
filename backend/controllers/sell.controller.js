const sellService = require("../services/sell.service");

exports.sellNuts = async (req, res) => {
  try {
    const sold = await sellService.sellTrees(req.body);

    res.status(201).send({
      message: "Sale was successful.",
      data: sold,
    });
  } catch (error) {
    console.error("Selling failed:", error);
    res.status(500).send({ message: error.message });
  }
};
