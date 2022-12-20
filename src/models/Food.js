const mongoose = require('mongoose')
const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, 'To short'],
        maxlength: [50, 'To long'],
        trim: true,
        required: true
    },

    type: {
        type: String,
        required: true
    },
}, { timestamps: true })

const Food = mongoose.model('Food', foodSchema)
module.exports = Food