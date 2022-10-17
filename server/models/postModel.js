const { Timestamp } = require('bson')
const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title:{
        type: String,
        require: [true, 'Please add a text value']
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: [true, 'Please add a text value']
    },
    description:{
        type: String,
        require: [true, 'Please add a text value']
    },
    link:{
        type: String,
        require: [true, 'Please add a text value']
    }
},{
    timestamps: true
}
)

module.exports = mongoose.model('Post', postSchema)