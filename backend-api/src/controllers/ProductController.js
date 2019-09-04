const Product = require('../models/Porduct');

module.exports = {

    async create(req, res) {

        // get request params
        const { idVendor } = req.params;

        // create new product
        const newProduct = await Product.create({
            name,
            price,

            // push idProduct in vendor



        });

    }
}