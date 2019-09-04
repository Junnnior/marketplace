const User = require('../models/User');

module.exports = {
    async store(req, res) {

        // get request
        const { email, name, password, address } = req.body;

        // get user exist
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.json(userExists);
        }

        // create new user
        const newUser = await User.create({
            email,
            name,
            password,
            address
        });

        return res.json(newUser);
    },

    async addAddress(req, res) {

        const { idUser } = req.params;
        const { newAddress } = req.body;

        // get user by id
        const user = await User.findById(idUser);

        // add address 
        user.address.push(newAddress);
        user.save();

        return res.json(user);

    }
}