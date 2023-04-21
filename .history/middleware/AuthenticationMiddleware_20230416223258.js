const UserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken')
const { UnauthorizedError } = require('../errors');

const auth = (req, res, next) => {

    //check header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) throw new UnauthorizedError('Authentication Invalid!');
    next();
}