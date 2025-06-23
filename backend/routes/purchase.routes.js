const Router = require("express").Router();
const purchaseController = require("../controllers/purchase.controller");

Router.post("/buyTrees", purchaseController.buyTrees);

module.exports = Router;
