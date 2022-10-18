//crée l'application
const express =require('express')
const app = express()

const route=require('./routes/auth')
const db = require('./config/db-config')

app.set('view engine', 'ejs');
app.set('views','view')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/user',route)
var storage = require('local-storage');
const jwt = require('jsonwebtoken');

const auth = require('./middelware/auth')

app.get('/home', auth.VerfyToken, (req, res)=>{
  const token = storage('token');
  const user = jwt.verify(token, 'RANDOM_TOKEN_SECRET')
  if(user.role =='634db3d8c47f7caf754f57d5'){
    res.send('Votre role est ADMIN')
  }else if(user.role=='634db3d8c47f7caf754f57d6'){
    res.send('Votre role est CLIENT !!!!')
  }
  else(user.role=='634db3d8c47f7caf754f57d7')
    res.send('Votre role est LIVREURE')
  
  
})


db.then(() => {
    console.log('connected');
  })
  .catch((error) => {
    console.log(error);
  });


app.listen(3000)