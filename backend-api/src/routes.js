const express = require('express');
const VendorController = require('./controllers/VendorController');

const routes = express.Router();


// router start
routes.get('/', (req, res) => {
    return res.send("Ola");
})

// creating vendor
routes.post('/vendors', VendorController.store);

module.exports = routes;