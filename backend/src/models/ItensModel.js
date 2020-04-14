const connection = require('../database/connection')

module.exports = {
    async getItens(collection_id){
        const resp  = await connection('item')
            .where('collection_id',collection_id)
            .orderBy('id')
            .select('*')

        return resp
    },

    async createItem({text,priority,marked}, collection_id){
        const resp = connection('item').insert({
            text,
            priority,
            marked,
            collection_id
        })

        return resp
    },

    async setStateItem(id, collection_id){
        let value = await connection('item')
            .where('id',id)
            .andWhere('collection_id',collection_id)
            .select('marked')
            .first()

        const marked = !value.marked //invertendo o valor
        const resp = await connection('item')
            .where('id',id)
            .andWhere('collection_id',collection_id)
            .update('marked',marked)
        return resp
    },

    async deleteItem(id, collection_id){
        const result = {}
        result.success = true

        const item = await connection('item')
            .where('id',id)
            .select('collection_id')
            .first() //pegando o único valor onde o id é igual ao id que queremos

        if(item.collection_id != collection_id){
            return false
            //return res.status(401).json({erro:"Operation not permitted."}) //código padrão para não autorizado
        }

        //caso passe do if:

        await connection('item').where('id',id).delete()

        return true
    }
}