const express = require('express')
const bodyParser = require('body-parser')


const app = express()
const router = express.Router()


app.use(bodyParser.json()) //Conteudo é convertido para json
app.use(bodyParser.urlencoded({ extended: false})) //codficar a url, caso digite espaço ele transforma em %20

//rota
const route = router.get('/', (req, res, next) => {    
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    })
})

const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body)
})

const put = router.put('/:id', (req, res, next) => { //:id é para passar parametro pela URL
    const id = req.params.id
    res.status(200).send({
        id: id,
        item: req.body
    })
})

const del = router.delete('/', (req, res, next) => {
    res.status(200).send(req.body)
})


//atribuição de rota no app
app.use('/', route)
app.use('/products', create)
app.use('/products', put)
app.use('/products', del)

//exportação de rota
module.exports = app