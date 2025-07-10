const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to mongoDB")
    } catch (error) {
        console.error(`Error connecting to mongoDB ${error.message}`)
        process.exit(1) // exit if connection failed
    }
}

module.exports = {connectDB}