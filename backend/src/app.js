const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.json()) //o servidor vai esperar receber dados JSON

app.use(routes) //acessando todas as rotas

app.listen(3333)