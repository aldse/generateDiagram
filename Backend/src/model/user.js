const mongoose = require("mongoose");

const user = mongoose.model(
    "user",
    new mongoose.Schema({

        name: {
            type: String,
            requerid: true
        },
        dateBirth: {
            type: Date,
            requerid: true
        },
        edv: {
            type: Number,
            required: true
        },
        cep: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }

    })
);

module.exports = user;