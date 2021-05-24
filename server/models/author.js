const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Name required'],
        minlength: [2, 'Name must be at least 2 characters']
    },
    quotes: [{
            type: String,
            required: [true, 'Quote is required'],
            minlength: [3, 'Quote must be at least 3 characters']
        }],
    votes: [{
        type:Number, 
        default: 0
    }]
        
}, {timestamps:true})

const Author = mongoose.model('Author', AuthorSchema)

module.exports = {
    Author: Author,
    AuthorSchema: AuthorSchema
}