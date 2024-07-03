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
        email: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            required: true
        },
        edv: {
            type: Number,
            required: true
        },
        cep: {
            type: String,
            required: true,
        },
        street: {
            type: String,
            required: true
        },
        number: {
            type: Number,
            required: true
        },
        complement: {
            type: String,
            require: false
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