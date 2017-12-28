/* eslint-disable*/ 
const {User} = require('../models')

module.exports = {
    async register (req, res) {
        try {
            // Create a new user
            const user =  await User.create(req.body)
            // Send the new created user in form of json
            res.send(user.toJSON())
        } catch (e) {
            //email already exists
            res.status(500).send({error: 'Email already exists'})
        }
    }
}