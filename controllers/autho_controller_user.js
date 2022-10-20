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
    const { body } = req;
    user.findOne({email:body.email})
    .then(e=>
        {
            if(e){
                return  res.status(401).send({msg:'email Déja Existe'})
            }
            else{
                  //hash le password 
            bcrypt.hash(body.password, 10)
            .then((hash) => {
                    body.password = hash;
                    user.create({ ...body , role:'634db3d8c47f7caf754f57d6'})
                .then(() => {
                    // storage('email', body.email)
                    // mailer.main()
                        res.send({ message: "added sccssfly" });
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
            return res.status(401).send({msg:'email Invalide'})
        }
        else{ 
             // Checking if the password incorrect compare password
            
            bcrypt.compare(body.password,e.password)
            .then(valid =>{
                if(!valid){
                    return res.status(401).send({msg:'password incoorect'})
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
                    res.status(200).json({token: storage('token')});
                        
                        // res.header('auth-token',token).send(token)
                }
            }
                
            )
            .catch(error => res.status(500).json({ error }))
        }
        
    })

    
    .catch(error => res.status(500).json({ error }))
}


const forgetpassword = (req,res) => {
    const email = req.body.email
    user.findOne({email: email})
    .then(e=>{
       if(e){
        storage('email',email)
        mailer.main()
        res.send('User Existe')
       }else{
        res.send('User Not Existe')
       }
    })
    .catch(error=>res.send(error))
}



const verify = (req, res) => {
    const token = req.params.token
    res.json({token})
}









module.exports = {
    Register,
    login,
    verify,
    forgetpassword
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