const mongoose = require('mongoose')

// model step: 1
const productModel = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    }
})
module.exports = mongoose.model('product', productModel)