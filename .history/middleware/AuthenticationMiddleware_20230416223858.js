const UserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken')
const { UnauthorizedError } = require('../errors');

const auth = async (req, res, next) => {

    //check header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) throw new UnauthorizedError('Authentication Invalid!');

    const token = authHeader.split(' ')[1]
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = { userId: payload.userId, name: payload.name }
        next();
    } catch (error) {

    }
}


module.exports = auth;