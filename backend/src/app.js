const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()


app.use(cors()) //dando acesso à aplicação
app.use(express.json()) //o servidor vai esperar receber dados JSON

app.use(routes) //acessando todas as rotas

app.listen(3333)