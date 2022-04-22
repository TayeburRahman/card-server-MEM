const mongoose = require('mongoose')

// model step: 1
const userModel = new mongoose.Schema(
        {
            displayName: {
                type: String, 
                trim: true,
            },
            email: {
                type: String,
                trim: true,
                lowercase: true,
                unique: true,
            },
            userName:{
                type: String,
                trim: true,
                
            },
            phone: {
                type: String, 
            },
            addres:{
                type: String, 
                trim: true,
            },
            role: {
                type: String,
                default: 'user',
                enum: ['admin', 'merchant', 'user'],
            },
            img: String,
            password: {
                type: String, 
            },
        }
    );
     
module.exports = mongoose.model('users', userModel)

 