const express = require('express')
const { getOrder, create } = require('../controller/orderController')

const orderRouter = express.Router()

orderRouter.post('/create', create)
orderRouter.get('/orders', getOrder)

module.exports = orderRouter