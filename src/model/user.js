const mongoose = require("mongoose");

const user = mongoose.model(
    "user",
    new mongoose.Schema({

        createdAt: {
            type: Date,
            default: Date.now
        }

    })
);

module.exports = user;