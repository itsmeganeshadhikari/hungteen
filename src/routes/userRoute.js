const express = require('express')
const { create, getUser, updateUser, deleteUser } = require('../controller/userController')

const userRouter = express.Router()

userRouter.post('/create', create)
userRouter.get('/users', getUser)
userRouter.put('/update/:id', updateUser)
userRouter.delete('/delete/:id', deleteUser)

module.exports = userRouter