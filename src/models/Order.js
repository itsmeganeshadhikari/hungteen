const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({
    food: [mongoose.Schema.Types.ObjectId],
    dateOfOrder: {
        type: Date,
        required: true
    }
})

const Order = mongoose.model('Order', orderSchema)
module.exports = Order