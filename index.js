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


db.then(() => {
    console.log('connected');
  })
  .catch((error) => {
    console.log(error);
  });


app.listen(3000)