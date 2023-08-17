const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { PORT } = process.env;

app.use(cors({ origin: "*" }));

const boardRouter = require("./routes/boardRouter");

app.use("/board", boardRouter);

app.listen(PORT, () => {
  console.log(`THE SERVER OPENED AT PORT : ${PORT}`);
});
