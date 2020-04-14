const UsersModel = require('../models/UsersModel')

module.exports = {

    async create(req,res){
        const data = req.body //pegando name e email criados

        const resp = await UsersModel.createSession(data)

        if(resp){
            return res.json(data.name) //nome do usuário logado
        }else{
            return res.status(400).json({error: 'Falha no LOGIN!'})
        }
        
    }
}