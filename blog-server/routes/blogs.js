const express = require('express')
const { getAllBlogs, createNewBlog } = require('../controllers/blogs')

const router = express.Router()

router.route('/').get(getAllBlogs).post(createNewBlog)

module.exports = router