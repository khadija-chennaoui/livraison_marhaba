const jwt = require('jsonwebtoken')
var storage = require('local-storage');
require('dotenv').config()


const VerfyToken =(req,res,next)=>{
    if(storage('token')){
        const token = jwt.verify(storage('token'), process.env.SUCRET)
        if(token){
            res.send('token is her')
            next()
        }
    }else{
        res.send('token not fond')
    }

}

module.exports={VerfyToken}