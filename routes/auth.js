const route = require('express').Router()
const use = require('../controllers/autho_controller_user')
const db = require('../config/db-config')

route.post('/registre',use.Register)
route.post('/login',use.login)
route.post('/role',use.Role)

module.exports = route;