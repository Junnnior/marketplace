const express = require('express');
const VendorController = require('../controllers/VendorController');
const routes = express.Router();

// get all vendors
routes.get('/vendors', VendorController.allUsers);

// get vendors by cep
routes.get('/vendors/cep/:cep', VendorController.vendorByCity);

// get vendors by id
routes.get('/vendors/:_id', VendorController.vendorById);

// router creating new vendor
routes.post('/newVendor/:idUser', VendorController.store);


module.exports = routes;