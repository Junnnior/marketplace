const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

// url mongodb connect
mongoose.connect('mongodb+srv://mpdv:root@cluster0-ume6o.mongodb.net/mpdv_db?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(express.json());
server.use(routes);
server.listen(3333);