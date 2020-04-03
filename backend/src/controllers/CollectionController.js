const CollectionsModel = require('../models/CollectionsModel')

module.exports = {

    async index(req,res){
        return res.json(await CollectionsModel.getAllCollections())
    },

    async create(req,res){
        const data = req.body
        const user_id = req.headers.authorization
        const id = await CollectionsModel.createCollection(data,user_id)
        return res.json({id})
    },

    async delete(req,res){
        const {id} = req.params //Valor de id passado na rota
        const user_id = req.headers.authorization

        const result = await CollectionsModel.deleteCollection(id,user_id)

        if(result){
            return res.status(204).send() //padrão sem conteúdo, mas com sucesso
        }else{
            return res.status(401).json({erro:"Operation not permitted."}) //código padrão para não autorizado
        }
    }

}