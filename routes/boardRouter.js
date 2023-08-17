const express = require("express");
const Router = express.Router();
const {
  getAllArticle,
  createArticle,
} = require("../controller/boardController");

Router.get("/", getAllArticle);
Router.post("/write", createArticle);

module.exports = Router;
