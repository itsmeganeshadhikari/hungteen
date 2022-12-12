const mongoose = require('mongoose')
const debug = require ('debug')('connection')

const db_connect = async()=>{
    try {
        mongoose.set('strictQuery', true);
       await mongoose.connect(encodeURI(process.env.DB_CONNECT),{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("Database connected successfully!")

        const conn = mongoose.connection

        console.log(`DB connected successfully on port ${conn.port}`)
    } catch (error) {
        console.log(error.message);
    }
}

module.exports=db_connect