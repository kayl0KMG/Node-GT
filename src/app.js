//IMPORTANDO O EXPRESS
const express = require('express')
//APP RECEBE O EXPRESS
const app = express()
// APP RECEBE MIDDLEWARE PARA INTERPRETAR JSON
app.use(express.json())
const animeRoutes = require('./routes/AnimeRoutes')
const loginRoutes = require('./routes/loginRoutes')
const usersRoutes = require('./routes/usersRoutes')

app.use(animeRoutes)
app.use(loginRoutes)
app.use(usersRoutes)

module.exports = app;