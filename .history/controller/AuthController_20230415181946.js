const UserModel = require('../models/UserModel')
const { StatusCodes } = require('http-status-codes')

const register = async (req, res) => {
    const { name, email, password } = req.body

    const user = await UserModel.create({ ...req.body })

    res.status(StatusCodes.CREATED).json({ user })
}

const login = async (req, res) => {


    res.send('login user')
}


module.exports = {
    register,
    login
}