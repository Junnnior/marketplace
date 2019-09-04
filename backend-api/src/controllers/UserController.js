const User = require('../models/User');

module.exports = {
    async store(req, res) {

        // get request
        const { email, name, password } = req.body;

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
        });

        return res.json(req.body);
    }
}