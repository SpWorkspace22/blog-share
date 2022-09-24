require('dotenv').config()
const express = require('express')
const { connectDB } = require('./db/connect')
const users  = require('./routes/users')

const app = express()

app.use(express.json())
app.use('/api/blog-share/users',users)

const start = async () =>{
    try{
        connectDB(process.env.MONGO_URI)
        app.listen(process.env.PORT,()=>{
            console.log(`Server Started at ${process.env.PORT}`)
        })
    }catch(error){
        console.log(error)
    }
}

start()