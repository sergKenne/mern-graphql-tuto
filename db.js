
const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL, (err) => {
        if (err) {
            console.log("connection failed");
        } else {
            console.log('Database connected successfully....');
        }
    })
}

module.exports =  connectDB;