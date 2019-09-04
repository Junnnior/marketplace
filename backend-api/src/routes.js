const express = require('express');
const VendorController = require('./controllers/VendorController');
const UserController = require('./controllers/UserController');

const routes = express.Router();


// router start
routes.get('/', (req, res) => {
    return res.send("Ola");
})

// get all vendors
routes.get('/vendors', VendorController.allUsers);

// get all vendors
routes.get('/vendors/:cep', VendorController.vendorByCity);

// router creating new vendor
routes.post('/newVendor/:idUser', VendorController.store);

// router creating new user
routes.post('/newUser', UserController.store);

module.exports = routes;