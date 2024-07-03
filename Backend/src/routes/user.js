const express = require("express");
const UserController = require("../controller/userController")
const route = express.Router();

route
    .post("/register", UserController.register)
    .post("/login", UserController.login)

module.exports = route;