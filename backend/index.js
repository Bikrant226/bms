const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const purchaseRouter = require("./routes/purchase.routes");
const sellRouter = require("./routes/sell.routes");

dotenv.config({ path: "../.env" });

const PORT = process.env.PORT;

connectDB();

app.use(express.json());

app.use("/api/purchase", purchaseRouter);
app.use("/api/sell", sellRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
