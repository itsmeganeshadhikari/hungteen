const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, 'To short'],
        maxlength: [50, 'To long'],
        trim: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User