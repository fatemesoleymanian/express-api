const UserModel = require('../models/UserModel')
const { StatusCodes } = require('http-status-codes')

const register = async (req, res) => {

    try {
        const user = await UserModel.create({ ...req.body })
    } catch (error) {
        console.log(error)
    }
    
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