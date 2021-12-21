const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: [3, 'The title should be between 3 and 50 symbols!'],
        max: [50, 'The title should be between 3 and 50 symbols!'],
    },
    imageUrl: {
        type: String,
        required: false
    },
    keyword: {
        type: String,
        require: true,
        max: [30, 'The title should be between 3 and 50 symbols!'],
    },
    location: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        require: true,
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: ObjectId,
        ref: "User"
    },
    likes: [{
        type: ObjectId,
        ref: "User"
    }],
    comments: [{
        type: ObjectId,
        ref: "Comment"
    }]

}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Post', postSchema);