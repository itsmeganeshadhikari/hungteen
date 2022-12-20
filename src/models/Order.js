const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({
    food: [mongoose.Schema.Types.ObjectId],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    timeOfOrder: {
        type: String
    }
}, { timestamps: true })

const Order = mongoose.model('Order', orderSchema)
module.exports = Order