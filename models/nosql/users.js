const mongoose = require('mongoose')

const userScheme = new mongoose.Schema(
     {
         name:{
            type: String
         },
         age:{
            type: Number
         },
         email:{
           type: String,
           unique: true 
         },
         password:{
            type: String
         },
         role:{
            type: ['user', 'admin']
         }
     },
     {
         timestamps: true,
         versionKey: false,
     }

);

module.exports = mongoose.model('users', userScheme)