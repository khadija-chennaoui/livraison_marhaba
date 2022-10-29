const mongoose =require('mongoose')

const db = require('../config/db-config')

const UserSchema = mongoose.Schema({

    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
     
    password:{
        type:String,
        require:true
    },

    role: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "role"
        }
      ],

})
const user = mongoose.model('User', UserSchema);
module.exports = user