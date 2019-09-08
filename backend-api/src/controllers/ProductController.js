const Product = require('../models/Porduct');
const Vendor = require('../models/Vendor');

module.exports = {

    async create(req, res) {

        // get request params
        const { vendorId } = req.params;
        const { name, price } = req.body;

        // create new product
        const newProduct = await Product.create({
            name,
            price,
            vendorId
        });

        // push idProduct in vendor
        const vendor = await Vendor.findById(vendorId);

        // add id poroduct in list vendor
        vendor.idsProducts.push(newProduct._id);
        vendor.save()

        return res.json(newProduct);
    },

    // get all products
    async allProducts(req, res) {
        const products = await Product.find({});

        if (products) {
            return res.json(products);
        }

        return res.json(200);
    },

    // get all products
    async productById(req, res) {
        const { vendorId } = req.params;
        const products = await Product.find({
            $and: [
                { "vendorId": vendorId }
            ],
        });

        if (products) {
            return res.json(products);
        }

        return res.json(200);
    },

}