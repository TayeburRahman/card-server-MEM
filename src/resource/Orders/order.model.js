const mongoose = require('mongoose')

// model step: 1
const ordersModel = new mongoose.Schema(
        {
          submit: {
              type: Object, 
              trim: true,
              required:true
          },
          email: {
            type: Object, 
            trim: true,
            required:true
        },
        updated: { 
          type: Date, 
          default: Date.now 
        },
        status: {
          type:String,
          require:true
        },
        }
    );
     
module.exports = mongoose.model('orders', ordersModel)

 