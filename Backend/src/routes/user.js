const express = require("express");
const router = express.Router();
const UserController = require("../controller/userController")

router
    .post("/register", UserController.register)
    .post("/login", UserController.login)

module.exports = router;