const mongoose = require('mongoose')

const StorageScheme = new mongoose.Schema(
     {
         ulr:{
            type: String
         },
         filename:{
            type: Number
         }
         
     },
     {
         timestamps: true,
         versionKey: false,
     }

);

module.exports = mongoose.model('storages', userScheme)