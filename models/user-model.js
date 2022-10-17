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
        type:String
    },

    roles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Role"
        }
      ],

})
const user = mongoose.model('User', UserSchema);
module.exports = user