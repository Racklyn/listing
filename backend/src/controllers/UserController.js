const UsersModel = require('../models/UsersModel')

module.exports = {

    async index(req,res){
        return res.json(await UsersModel.getAllUsers())
    },

    async create(req,res){
        const data = req.body //pegando name e email criados
        const id = await UsersModel.createUser(data)
        return res.json({id})
    }
}