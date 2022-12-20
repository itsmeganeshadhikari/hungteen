const Order = require("../models/Order")

exports.create = async (req, res) => {
    const order = await new Order(req.body)
    await order.save()
    res.status(200).send({ message: "Data save successfully", data: order })
}

exports.getOrder = async (req, res) => {
    const orderList = await Order.find().populate("food user")
    res.send({ data: orderList })
}