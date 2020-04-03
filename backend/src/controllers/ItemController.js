const ItensModel = require('../models/ItensModel')

module.exports = {

    async index(req,res){
        const {collection_id} = req.params

        return res.json(await ItensModel.getItens(collection_id))
    },

    async create(req,res){
        const data = req.body
        const {collection_id} = req.params
        const id = await ItensModel.createItem(data,collection_id)
        return res.json({id})
    },

    async update(req,res){
        //const {marked} = req.body
        const {item_id,collection_id} = req.params

        const resp = await ItensModel.setStateItem(item_id,collection_id)
        return res.json(resp)
    },

    async delete(req,res){
        const {item_id, collection_id} = req.params //Valor de id passado na rota

        const result = await ItensModel.deleteItem(item_id,collection_id)

        if(result){
            return res.status(204).send() //padrão sem conteúdo, mas com sucesso
        }else{
            return res.status(401).json({erro:"Operation not permitted."}) //código padrão para não autorizado
        }
    }

}