const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
        username:{
            type:String,
        },
        email:{
            type:String,
            validate: {
                validator: function(v) {
                    return /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(v);
            },
            message: `Invalid email address!`
        },
        required:[true,'must provide the email address']
        },
        password:{
            type:String,
            required:[true,'must provide password']
        },
        createdAt:{
            type:Date,
            default: new Date()
        }
    }
)

module.exports = mongoose.model('User',UserSchema)