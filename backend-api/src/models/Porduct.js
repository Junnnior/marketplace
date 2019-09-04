const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({

    vendorId: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    category: [],

}, {
    timestamps: true,
});

module.exports = model("Product", ProductSchema);