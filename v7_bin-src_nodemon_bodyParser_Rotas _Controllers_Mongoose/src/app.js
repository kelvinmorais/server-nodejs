const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const router = express.Router()

//conexão mongodb
mongoose.connect('mongodb+srv://kelvintmorais:nv4WTAJNnBINsHl9@cluster0.h900ad1.mongodb.net/test')

//Carregar os models
const Product = require('./models/product')

//Carregar as Rotas
const indexRoute = require('./routes/index-route')
const productRoute = require('./routes/product-route')

app.use(bodyParser.json()) //Conteudo é convertido para json
app.use(bodyParser.urlencoded({ extended: false})) //codficar a url, caso digite espaço ele transforma em %20

//atribuição de rota no app
app.use('/', indexRoute)
app.use('/products', productRoute)


//exportação de rota
module.exports = app