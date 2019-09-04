const express = require('express');
const VendorController = require('./controllers/VendorController');
const UserController = require('./controllers/UserController');
const ProdController = require('./controllers/ProductController');

const routes = express.Router();


// router start
routes.get('/', (req, res) => {
    return res.send("Ola");
})

/* VENDORS ROUTES -------------------------------------- */
// get all vendors
routes.get('/vendors', VendorController.allUsers);

// get vendors by cep
routes.get('/vendors/:cep', VendorController.vendorByCity);

// router creating new vendor
routes.post('/newVendor/:idUser', VendorController.store);


/* USERS ROUTES ----------------------------------------- */
// router creating new user
routes.post('/newUser', UserController.store);



/* PRODUCT ROUTES ----------------------------------------- */

// create new product
routes.post('/newProducty/:vendorId', ProdController.create);

// get all products
routes.get('/products', ProdController.allProducts);


module.exports = routes;