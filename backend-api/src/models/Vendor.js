const { Schema, model } = require('mongoose');

const VendorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    idUser: {
        type: String
    },

    idsProducts: [],

    address: {
        // type: Object,
        // required: true,
        street: {
            type: String,
        },
        city: {
            type: String,
        },

        state: {
            type: String,
        },

        cep: {
            type: String
        }

    },
}, {
    timestamps: true,
});

module.exports = model('Vendor', VendorSchema);