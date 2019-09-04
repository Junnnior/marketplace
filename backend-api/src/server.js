const express = require('express');
const mongoose = require('mongoose');
const routerProd = require('./routers/routerProduct');
const routerVendor = require('./routers/routerVendor');
const routerUser = require('./routers/routerUser');

const server = express();

// url mongodb connect
mongoose.connect('mongodb+srv://mpdv:root@cluster0-ume6o.mongodb.net/mpdv_db?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(express.json());
server.use(routerProd, routerVendor, routerUser);
server.listen(3333);