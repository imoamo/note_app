const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.Mongo_URL)
}

module.exports = dbConnect;