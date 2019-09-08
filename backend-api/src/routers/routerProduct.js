const express = require('express');
const ProdController = require('../controllers/ProductController');

const routes = express.Router();

// create new product
routes.post('/newProducty/:vendorId', ProdController.create);

// get all products
routes.get('/products', ProdController.allProducts);

// get products by Id
routes.get('/products/:vendorId', ProdController.productById);


module.exports = routes;