const express = require('express');
const UserController = require('../controllers/UserController');

const routes = express.Router();

// router creating new user
routes.post('/newUser', UserController.store);

routes.post('/newAddrressUser/:idUser', UserController.addNewAddress);

module.exports = routes;