const Vendor = require('../models/Vendor');

module.exports = {

    // create vendor
    async store(req, res) {

        // get request
        const { name, address } = req.body;

        // get vendor exist
        const vendorExists = await Vendor.findOne({ name })
        if (vendorExists) {
            return res.json(userExists);
        }

        // create new vendor
        const newVendor = await Vendor.create({
            name,
            address,
        });

        return res.json(newVendor);
    },


    // get all vendors
    async allUsers(req, res) {

        const vendors = await Vendor.find({});

        if (vendors) {
            return res.json(vendors);
        }

        return res.json(200);
    },

    // get all vendors by cep
    async vendorByCity(req, res) {

        const { cep } = req.params;

        const vendors = await Vendor.find({
            $and: [
                { "address.cep": cep }
            ],
        });

        if (vendors) {
            return res.json(vendors);
        }

        return res.json(200);
    },


}