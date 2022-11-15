const mongoose =require('mongoose')

const db = require('../config/db-config')

const RoleSchema = mongoose.Schema({
    role:{
        type:String,
    }
})
const role = mongoose.model('role',RoleSchema);
module.exports = role