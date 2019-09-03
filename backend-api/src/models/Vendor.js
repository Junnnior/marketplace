const { Schema, model } = require('mongoose');

const VendorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    address: {
        // type: Object,
        // required: true,
        rua: {
            type: String,
        },
        cidade: {
            type: String,
        },

        estado: {
            type: String,
        }

    },
}, {
    timestamps: true,
});

module.exports = model('Vendor', VendorSchema);