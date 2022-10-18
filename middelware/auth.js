const jwt = require('jsonwebtoken')
var storage = require('local-storage');


const VerfyToken =(req,res,next)=>{
    if(req,res,next){
        if(storage('token')){
            const token =jwt.verify(storage('token'),'RANDOM_TOKEN_SECRET')
            if(token){
                // res.send('token is her')
                next()
            }
        }else{
            res.send('not hier')
        }
    }

}

module.exports={VerfyToken}