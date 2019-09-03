const { Schema, model } = require('mongoose');

const StoreSchema = new Schema({
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
    timesTamps: true,
});

module.exports = model('Store', StoreSchema);