const connection = require('../database/connection')
const crypto = require('crypto') //já vem por padrão instalado

module.exports = {

    async getAllUsers(){

        const users = await connection('user').select('*')

        return users
    },

    async createUser({name,email}){
        
        const id = crypto.randomBytes(3).toString('HEX') //criando id daquele user random

        await connection('user').insert({
            id,
            name,
            email
        })

        return id
    }
}