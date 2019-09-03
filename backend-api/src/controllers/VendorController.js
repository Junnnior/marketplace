const Vendor = require('../models/Vendor');

module.exports = {
    async store(req, res) {

        // get request
        const { name, address } = req.body;

        // get user exist
        const userExists = await Vendor.findOne({ name })
        if (userExists) {
            return res.json(userExists);
        }

        // create new vendor
        const newVendor = await Vendor.create({
            name,
            address,
        });

        return res.json(newVendor);
    }
}