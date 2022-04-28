const mongoose = require('mongoose')

// model step: 1
const submitModel = new mongoose.Schema(
        {
          service: {
              type: Object, 
              trim: true,
              required:true
          }, 
          email: {
              type: String, 
              trim: true,
              required:true
          },
          cards: {
              type: Object,
              trim: true, 
          },
          shipping:{
              type: Object,
              trim: true,
              
          },
          payment: {
              type: Object, 
          },
           price: {
              type: Number,
              trim: true, 
           },
           promo: {
            type: Boolean,
            trim: true, 
         }
        }
    );
     
module.exports = mongoose.model('submit', submitModel)

 