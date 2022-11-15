const user = require("../models/user-model");
const role = require("../models/role-model");
const bcrypt = require("bcryptjs");
const jwt= require('jsonwebtoken');
const storage = require('local-storage')
const { then } = require("../config/db-config");
const mailer = require('../middelware/mailer')
require('dotenv').config()


//Register d'un user
const Register = (req, res) => {
    const  body = req.body ;
    user.findOne({email:body.email})
    .then(e=>
        {
            if(e){
                return  res.send({message:'email Déja Existe'})
            }
            else{
                  //hash le password 
            bcrypt.hash(body.password, 10)
            .then((hash) => {
                    body.password = hash;
                    user.create({ email:body.email,password:body.password,fullname:body.fullname,role:'634db3d8c47f7caf754f57d6'})
                .then(() => {
                        storage('email', body.email)
                        mailer.main()
                            res.json( "added sccssfly" );
                        })
                .catch((e) => res.send("Not added"));
                    })
            .catch((e) => res.send("Error"));
                    }
        })
    .catch((e) => res.send("Error"))
  
};

const RegisterLivreur = (req, res) => {
    const  body = req.body ;
    user.findOne({email:body.email})
    .then(e=>
        {
            if(e){
                return  res.send({message:'email Déja Existe'})
            }
            else{
                  //hash le password 
            bcrypt.hash(body.password, 10)
            .then((hash) => {
                    body.password = hash;
                    user.create({ email:body.email,password:body.password,fullname:body.fullname,role:'634db3d8c47f7caf754f57d7'})
                .then(() => {
                        storage('email', body.email)
                        mailer.main()
                            res.json( "added sccssfly" );
                        })
                .catch((e) => res.send("Not added"));
                    })
            .catch((e) => res.send("Error"));
                    }
        })
    .catch((e) => res.send("Error"))
  
};



//Login d'un user
const login =(req,res) =>{
    const{body} = req

    //Checking if the email incorrect

    user.findOne({email:body.email})
    .then(e=>{
        if(!e){
            return res.send({message:'email incorrect'})
        }
        else{ 
             // Checking if the password incorrect compare password
            
            bcrypt.compare(body.password,e.password)
            .then(valid =>{
                if(!valid){
                    return res.send({message:'password incorrect'})
                }
                else {
                    const user=e
                    // Create token
                    const token = jwt.sign(
                        {  _id :e._id,
                         role :e.role,
                         fullname:e.fullname,
                         email:e.email,
                        },
                        process.env.SUCRET,
                        {expiresIn:'24h'}
                    )
                    storage('token', token);
                    role.findById(user.role)
                        .then(role=>{
                            res.json({token:token,
                                user:user.email,
                                fullname:user.fullname,
                                role:role.role, 
                            });
                        })
                        .catch(error => res.status(500).json({ error }))
                }
            }
                
            )
            .catch(error => res.status(500).json({ error }))
        }
        
    })

    .catch(error => res.status(500).json({ error }))
}



//forget password
const forgetpassword = (req,res) => {
    const email = req.body.email
    const password = req.body.password
    user.findOne({email: email})
    .then(e=>{
       if(e){
                bcrypt.hash(password, 10)
                .then(e=>{
                    user.findOneAndUpdate({email:email}, {password:e})            
                        .then(
                            res.send({message:'Password Updated'})
                        )
                        .catch(error=>
                            res.json(error)
                        )
                })
                .catch(error=>res.send(error))
        
        }
    })
    .catch(error=>res.send(error))
}



// resetpassword/:token
const restverify = (req, res) => {
    
    const token = storage('token');
    const user=jwt.verify(token,process.env.SUCRET)
    if(user){
        res.send(user)
    }
  
    
}



// resetpassword
const resetpassword =(req,res)=>{
    const email = req.body.email
    const password = req.body.password
    user.findOne({email: email})
    .then(e=>{
       if(e){
                bcrypt.hash(password, 10)
                .then(e=>{
                    user.findOneAndUpdate({email:email}, {password:e})            
                        .then(
                            res.send('Password Updated')
                        )
                        .catch(error=>
                            res.json(error)
                        )
                })
                .catch(error=>res.send(error))

        }
    })
    .catch(error=>res.send(error))
}


//logout
const logout=(req,res)=>{
    storage.remove('token')
    res.send({message:'User is logouted'})
}


//Get All Users 
const AllUser = (req,res)=>{
    user.find()
    .then(e=>{
        res.json(e)
    })
    .catch({msg:'Not Find Users'})
}

module.exports = {
    Register,
    login,
    restverify,
    forgetpassword,
    resetpassword,
    logout,
    RegisterLivreur,
    AllUser
    
    
};


//Ajouter les rôles

// const Role = (req, res) => {
//     role.create([
//         { role: 'Admin' },
//         { role: 'Client' },
//         { role: 'Livreure' }
//       ])
//       .then(res.send({msg:'role is added'}))
//       .catch(error => res.status(500).json({ error }))
// };