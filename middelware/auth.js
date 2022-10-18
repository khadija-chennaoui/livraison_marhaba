const jwt = require('jsonwebtoken')

const VerfyToken =(req,res,next)=>{
 try{
    const token = req.authorization.split('')[1]
    const decodedToken = jwt.verify(token,'RANDOM_TOKEN_SECRET')
    userId = decodedToken.eId
    req.auth={
        userId:userId
    }
    next();
}

catch(error){
    res.status(401).json({ error });
}

}

module.exports={VerfyToken}