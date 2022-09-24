const mongoose = require('mongoose')

const connectDB = (url) => {
    mongoose.connect(url,()=>{
        console.log("Connected")
    })
}

module.exports = {
    connectDB
}