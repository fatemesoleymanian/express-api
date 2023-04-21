const UserModel = require('../models/UserModel')
const { StatusCodes } = require('http-status-codes');
const { BadRequest, UnauthorizedError } = require('../errors');

const register = async (req, res) => {

    const user = await UserModel.create({ ...req.body })

    const token = user.createJWT();

    res.status(StatusCodes.CREATED).json({ user: { name: user.getName() }, token })
}

const login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        throw new BadRequest('Please provide email and password!')
    }

    const user = await UserModel.findOne({ email })

    
    if (!user) throw new UnauthorizedError('There no user with such email!')

    const token = user.createJWT();



    res.status(StatusCodes.OK).json({ user: { name: user.getName() }, token })
}


module.exports = {
    register,
    login
}