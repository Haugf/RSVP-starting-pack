require('dotenv').config()

const mongoose = require('mongoose')
const url = process.env.URL


const connectDB = async () => {
    try{
        await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
        console.log("connected to mongodb!")
    } catch (err) {
        console.log(url)
        console.error("err: "+err.message)
        process.exit(1)
    }
}

module.exports = connectDB