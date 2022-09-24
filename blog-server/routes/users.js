const express = require('express')
const { getAllUsers, createNewUser } = require('../controllers/users')

const router = express.Router()

router.route('/').get(getAllUsers).post(createNewUser)

module.exports = router