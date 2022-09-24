const Blog = require('../models/blogs')
const User = require('../models/users')
const mongoose = require('mongoose')

const getAllBlogs = async (req,res) => {
    try{
        const allBlogs = await Blog.find({})
        res.status(200).send(allBlogs)
    }catch(error){
        console.log(error)
        return
    }
}


const createNewBlog = async (req,res) =>{
    try{
       User.find({_id:req.body.author_id}).exec((err,userDocs)=>{
        if(!err){
            if(userDocs){
                const blog = new Blog(req.body)
                blog.save((err,docs)=>{
                    if(!err){
                        res.status(200).send(docs)
                    }else{
                        res.status(500).send("Server Error")
                    }
                })
            }else{
                res.status(404).send("User not found")
            }
        }else{
            res.status(500).send("Server Error")
        }
       })

    }catch(error){
        console.log(error)
        return
    }
}
module.exports = {
    getAllBlogs, createNewBlog
}