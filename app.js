const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { PORT } = process.env;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const boardRouter = require("./routes/boardRouter");
const userRouter = require("./routes/userRouter");

app.use("/board", boardRouter);
app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`THE SERVER OPENED AT PORT : ${PORT}`);
});
