const UserModel = require('../models/UserModel')
const { StatusCodes } = require('http-status-codes')
const { BadRequest } = require('../errors')
const bcryptjs = require('bcryptjs')

const register = async (req, res) => {

    const { name, email, password } = req.body

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password,salt)

    const tmpUser = {name,email,password:hashedPassword}
    // if (!name || !email || !password) {
    //     throw new BadRequest('Please provide name, email and password.')
    // }

    
    const user = await UserModel.create({ ...tmpUser })

    res.status(StatusCodes.CREATED).json({ user })
}

const login = async (req, res) => {


    res.send('login user')
}


module.exports = {
    register,
    login
}