const express = require('express');
const ProdController = require('../controllers/ProductController');

const routes = express.Router();

// create new product
routes.post('/newProducty/:vendorId', ProdController.create);

// get all products
routes.get('/products', ProdController.allProducts);


module.exports = routes;