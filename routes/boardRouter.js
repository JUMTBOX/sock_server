const express = require("express");
const Router = express.Router();
const {
  getAllArticle,
  createArticle,
  getOneArticle,
  modifyArticle,
  deleteArticle,
} = require("../controller/boardController");

Router.get("/", getAllArticle);
Router.get("/:id", getOneArticle);
Router.post("/write", createArticle);
Router.put("/modify/:id", modifyArticle);
Router.delete("/delete/:id", deleteArticle);

module.exports = Router;
