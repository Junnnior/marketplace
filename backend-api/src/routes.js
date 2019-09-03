const express = require('express');
const VendorController = require('./controllers/VendorController');
const UserController = require('./controllers/UserController');

const routes = express.Router();


// router start
routes.get('/', (req, res) => {
    return res.send("Ola");
})

// router creating new vendor
routes.post('/vendors', VendorController.store);

// router creating new user
routes.post('/newUser', UserController.store);

module.exports = routes;