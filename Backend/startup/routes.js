const express = require("express");
const user = require("../src/routes/user");
const upload = require("../src/routes/upload");


module.exports = function (app) {
    app.use(express.json())
        .use("/api/user", user)
        .use("/api/upload", upload)
        
}