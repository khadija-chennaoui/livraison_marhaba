const route = require('express').Router()
const use = require('../controllers/autho_controller_user')
const auth = require('../middelware/auth')

const db = require('../config/db-config')

route.post('/registre',use.Register)
route.post('/registrelivreur',use.RegisterLivreur)
route.post('/login',use.login)
route.post('/forgetpassword',use.forgetpassword)
route.get('/resetpassword/:token', auth.VerfyToken , use.restverify)
route.post('/resetpassword', auth.VerfyToken , use.resetpassword)
route.get('/logout',auth.VerfyToken ,use.logout)
route.get('/alluser',use.AllUser)

// route.get('/verification/:token', use.verify)

module.exports = route;