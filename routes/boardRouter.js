const express = require("express");
const Router = express.Router();
const {
  getAllArticle,
  createArticle,
  getOneArticle,
} = require("../controller/boardController");

Router.get("/", getAllArticle);
Router.get("/:id", getOneArticle);
Router.post("/write", createArticle);

module.exports = Router;
