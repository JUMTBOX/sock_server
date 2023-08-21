const express = require("express");
const { userLogin, userRegister } = require("../controller/userController");

const Router = express.Router();

Router.post("/login", userLogin);
Router.post("/signup", userRegister);

module.exports = Router;
