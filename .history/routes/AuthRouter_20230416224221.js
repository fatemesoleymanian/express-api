const express = require('express');
const router = express.Router();

const { register, login } = require('../controller/AuthController');
const AuthenticationMiddleware = require('../middleware/AuthenticationMiddleware')

router.post('/login',AuthenticationMiddleware, login);
router.post('/register', register);

module.exports = router;