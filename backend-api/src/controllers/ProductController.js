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

        // add idPoroduct in list vendor
        vendor.idsProducts.push(newProduct._id);
        vendor.save()

        return res.json(newProduct);

    },

    // get all vendors
    async allProducts(req, res) {

        const products = await Product.find({});

        if (products) {
            return res.json(products);
        }

        return res.json(200);
    },

}