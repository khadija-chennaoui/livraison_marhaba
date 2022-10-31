//crée l'application
const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')


const route=require('./routes/auth')
const db = require('./config/db-config')

app.set('view engine', 'ejs');
app.set('views','view')
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))


var storage = require('local-storage');
const jwt = require('jsonwebtoken');
const auth = require('./middelware/auth')

// Route
app.use('/api/auth',route) 
app.get('/api/user', auth.VerfyToken, (req, res)=>{

  const token = storage('token');
  const user = jwt.verify(token, process.env.SUCRET)

  // if(user.role =='634db3d8c47f7caf754f57d5'){
  //   res.send('Ton role est ADMIN')
  //   // res.send(user.fullname
  // }

  // else if(user.role=='634db3d8c47f7caf754f57d6'){
  //   res.send('Ton role est CLIENT')
  // }

  // else(user.role=='634db3d8c47f7caf754f57d7')
  // res.send('Ton role est LIVREUR')
})



// Verify la Connection de bd
db.then(() => {
    console.log('connected');
  })
  .catch((error) => {
    console.log(error);
  });

const port = process.env.PORT
app.listen(port)