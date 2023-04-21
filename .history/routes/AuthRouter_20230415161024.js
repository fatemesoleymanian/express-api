const express = require('express');
const router = express.Router();

const { register, login } = require('../controller/AuthController');


router.post('/login', login);
router.post('/register', register);

module.exports = router;