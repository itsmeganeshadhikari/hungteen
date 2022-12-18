const express = require('express')
const { getFood, create } = require('../controller/foodController')

const foodRouter = express.Router()

foodRouter.post('/create', create)
foodRouter.get('/foods', getFood)

module.exports = foodRouter