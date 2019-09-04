const express = require('express');
const VendorController = require('../controllers/VendorController');
const routes = express.Router();

// get all vendors
routes.get('/vendors', VendorController.allUsers);

// get vendors by cep
routes.get('/vendors/:cep', VendorController.vendorByCity);

// router creating new vendor
routes.post('/newVendor/:idUser', VendorController.store);


module.exports = routes;