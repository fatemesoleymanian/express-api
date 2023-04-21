
const mongoose = require('mongoose')


const JobSchema = new mongoose.Schema({
    position: {
        type: String,
        required: [true, 'Please provide position.'],
        maxlength: 100,
    },
    company: {
        type: String,
        required: [true, 'Please provide company.'],
        maxlength:50
       
    },
    status:{
        type:String,
        enum:['interview','declined','pending'],
        default:[true,'interview'],
       
    }
});



module.exports = mongoose.model('Job',JobSchema)