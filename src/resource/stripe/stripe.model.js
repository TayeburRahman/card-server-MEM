const mongoose = require('mongoose')
var mongooseStripeCustomers = require('mongoose-stripe-customers');

 

 
// model step: 1
const stripeModel = new mongoose.Schema({
     
    price:{
        type: Object,  
    }
})
module.exports = mongoose.model('stripe', stripeModel)