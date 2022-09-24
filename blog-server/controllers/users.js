const User = require('../models/users')
const mongoose = require('mongoose')

const getAllUsers = async (req,res) => {
    try{
        const allUsers = await User.find({})
        res.status(200).send(allUsers)
    }catch(error){
        console.log(error)
        return
    }
}


const createNewUser = async (req,res) =>{
    try{
        const user = new User(req.body)
        user.save((err,docs)=>{
            if(!err){
                res.status(200).send(docs)
            }else{
                res.status(500).send({'msg':err.message})
            }
        })
    }catch(error){
        console.log(error)
        return
    }
}
module.exports = {
    getAllUsers, createNewUser
}