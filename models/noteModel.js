const mongoose = require('mongoose');

const noteSchem = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
    userID: { type: String },
    username: { type: String }
}, {
    versionKey: false
});


const noteModel = mongoose.model('notes', noteSchem);

module.exports = noteModel;