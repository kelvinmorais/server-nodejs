const express = require('express')

const app = express()

const router = express.Router()

//rota
const route = router.get('/', (req, res, next) => {    
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    })
})
//atribuição de rota no app
app.use('/', route)

//exportação de rota
module.exports = app