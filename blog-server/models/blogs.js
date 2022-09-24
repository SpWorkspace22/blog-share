const mongoose = require('mongoose')

// blog (_id, title,publish_date,publish_time,category(travel, tech ),info,image)
const BlogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'blog must have a title']
    },
    category:{
        type:String,
        required:[true,'please add a category']
    },
    info:{
        type:String,
        required:[true,'Add Details'],
    },
    image:{
        type:String
    },
    publish_dateTime:{
        type:Date,
        default:new Date()
    },
    author_id:{
        type:String,
        required:[true,'must have a author']
    }
})

module.exports = mongoose.model('Blog',BlogSchema)