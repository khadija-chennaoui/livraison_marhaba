const user = require("../models/user-model");
const role = require("../models/role-model");
const bcrypt = require("bcryptjs");
const jwt= require('jsonwebtoken');
const { then } = require("../config/db-config");
 

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
                    user.create({ ...body ,role:'634db3d8c47f7caf754f57d6'}) 
                .then(() => {
                        res.send({ message: "added sccssfly" });
                    })
                .catch((e) => res.send("Not added"));
                    })
            .catch((e) => res.send("Error"));
                    }
        })
    .catch((e) => res.send("Error"))
  
};



//login khadija l9raya zwina lafana lbogossa lwa3ra li atnj7 in chaa lah

const login =(req,res) =>{

    const{body} = req

    //Checking if the email incorrect

    user.findOne({email:body.email})
    .then(e=>{
        if(!e){
            return res.status(401).send({msg:'email Invalide'})
        }
        else{ 
             //Checking if the password incorrect compare password
            
            bcrypt.compare(body.password,e.password)
            .then(valid =>{
                if(!valid){
                    return res.status(401).send({msg:'password incoorect'})
                }
                else {
                    const user=e
                    //Creat token
                        const token=jwt.sign(
                            { userId :user._id},
                            'RANDOM_TOKEN_SECRET ',
                            {expiresIn:'24h'}
                        )
                        
                        res.header('auth-token',token).send(token)
                }
            }
                
            )
            .catch(error => res.status(500).json({ error }))
        }
        
    })

    
    .catch(error => res.status(500).json({ error }))

}



const cheker =(req,res)=>{
const {body} =req

    role.find({fullname,role:'Livreure'})
    .then( e=>{
        if(e){
           return res.send(e)
        }else{
            return false
        }
    }
       
    )
    .catch(error => res.status(500).json({ error }))


}

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


module.exports = { Register, login,cheker };







//Login d'un user par un premier methode


// const login = (req, res) => {
//     const {body}=req
//      user.findOne({ email:body.email })
//         .then(e => {
//             if (!e) {
//                return  res.status(401).send({ message: 'Paire email incorrecte'});
//             }
//             bcrypt.compare(req.body.password, e.password)
//                 .then(valid => {
//                     if (!valid) {
//                       return   res.status(401).send({ message: 'Paire login/mot de passe incorrecte' });
//                     }
//                     res.status(200).json({
//                         eId :e._id,
//                         token:jwt.sign(
//                             { eId :e._id},
//                             'RANDOM_TOKEN_SECRET ',
//                             {expiresIn:'24h'}
//                         )

//                     });
//                 })
//                 .catch(error => res.status(500).json({ error }));
//         })
//         .catch(error => res.status(500).json({ error }));
//  };