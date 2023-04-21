const UserModel = require('../models/UserModel')
const { StatusCodes } = require('http-status-codes')

const register = async (req, res) => {

    const user = await UserModel.create({ ...req.body })
    console.log(user)

    const token = user.createJWT();

    res.status(StatusCodes.CREATED).json({ user: { name: user.getName() }, token })
}

const login = async (req, res) => {


    res.send('login user')
}


module.exports = {
    register,
    login
}