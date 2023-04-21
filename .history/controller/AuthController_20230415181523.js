const UserModel = require('../models/UserModel')

const register = async (req, res) => {


    res.status(200).json(req.body)
}

const login = async (req, res) => {

    res.send('login user')
}


module.exports = {
    register,
    login
}