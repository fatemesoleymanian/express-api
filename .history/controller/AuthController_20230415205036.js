const UserModel = require('../models/UserModel')
const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {

    const user = await UserModel.create({ ...req.body })

    const token = jwt.sign({ userId: user._id, name: user.name }, process.env.JWT_SECRET, { expiresIn: '30d' })

    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
}

const login = async (req, res) => {


    res.send('login user')
}


module.exports = {
    register,
    login
}