const mongoose = require('mongoose')

const order = mongoose.Schema({
    name: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    address: {
        type: String
    },
    order: {
        type: Array
    },
})

module.exports = mongoose.model('Order', order)