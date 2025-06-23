const Router = require("express").Router();
const sellController = require("../controllers/sell.controller");

Router.post("/sellNuts", sellController.sellNuts);

module.exports = Router;
