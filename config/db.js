const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect('mongodb://localhost:27017/Full_Stack')
}

module.exports = dbConnect;