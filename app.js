const express = require('express');
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser');
const db_connect = require('./src/db/connection');
const userRouter = require('./src/routes/userRoute');
const foodRouter = require('./src/routes/foodRoute');
const orderRouter = require('./src/routes/orderRoute');
const debug = require('debug')('app')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
db_connect()
app.use('/user', userRouter)
app.use('/food', foodRouter)
app.use('/order', orderRouter)
app.get('/', () => console.log(`Main page`))
app.get('/home', (req, res) => res.send('Hello to home page'))

module.exports = app
