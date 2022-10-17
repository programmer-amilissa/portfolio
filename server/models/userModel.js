const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstname:{
        type:String,
        required: [true,"Please add a first name"]
    },
    lastname:{
        type:String,
        required: [true,"Please add a last name"]
    },
    email:{
        type:String,
        unique: true,
        required: [true,"Please add a email"]
    },
    password:{
        type:String,
        required: [true,"Please add a password"]
    },
    mobilenumber:{
        type:Number,
        required: [true,"Please add a mobile number"]
    }

},{
    timestamps: true
}

)


module.exports = mongoose.model('User', userSchema)