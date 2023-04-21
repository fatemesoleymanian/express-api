
const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name.'],
        minlength: 3,
        maxlength: 50,
    },
    email: {
        type: String,
        required: [true, 'Please provide email.'],
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ]
    },
    password: {
        type: String,
        required: [true, 'Please password.'],
        minlength: 6,
    }
});

UserSchema.pre('save', async function (next) {

    //hash password with bcrypyjs before inserting
    const salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password, salt);

    next();
});

UserSchema.methods.getName = function () {
    return this.name;
}

UserSchema.methods.createJWT = function () {

    jwt.sign({ userId: this._id, name: this.name }, process.env.JWT_SECRET, { expiresIn: '30d' })
}


module.exports = mongoose.model('User', UserSchema)