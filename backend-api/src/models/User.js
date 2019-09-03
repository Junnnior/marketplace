const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    id: {
        type: Number
    },

    email: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    password: {
        type: password,
        required: true,
    }
});