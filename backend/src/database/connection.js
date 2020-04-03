const knex = require('knex')
const configuration = require('../../knexfile')

const connection = knex(configuration.development) //aqui é passa as informações necessárias do BD

module.exports = connection