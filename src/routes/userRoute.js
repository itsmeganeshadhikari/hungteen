const express = require('express')
const { create } = require('../controller/userController')

const userRouter = express.Router()

userRouter.post('/create', create)

module.exports = userRouter