const connection = require('../database/connection')

module.exports = {
    
    //retornando coleções apenas do usuário específico
    async getCollections(user_id){
        let collections = []
        try{
            //connection.destroy()
            await connection.transaction(async trx=>{
                collections = await connection('collection')
                .where('user_id',user_id)
                .select('*')
                .transacting(trx)

                trx.commit()
            })

        }catch(e){
            
            console.log("ERRO on Collections: "+e)
        }
        
        return collections
    },

    async getAllCollections(){
        //retorna também  o usuário de cada uma
        const collections = await connection('collection')
            .join('user','user.id','=','collection.user_id')
            .select('collection.*', 'user.name','user.email')

        return collections
    },

    async createCollection( {title, description, color},user_id){

        const resp = await connection('collection').insert({
            title,
            description,
            color,
            user_id
        })
        return resp //retornando o json especificando o que foi criado
    },

    async deleteCollection(id, user_id){
        const result = {}
        result.success = true

        const collection = await connection('collection')
            .where('id',id)
            .select('user_id')
            .first() //pegando o único valor onde o id é igual ao id que queremos

        if(collection.user_id != user_id){
            return false
            //return res.status(401).json({erro:"Operation not permitted."}) //código padrão para não autorizado
        }

        //caso passe do if:

        await connection('collection').where('id',id).delete()

        return true
        //return res.status(204).send() //padrão sem conteúdo, mas com sucesso
    }
}