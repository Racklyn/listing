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
    },

    async createSession({id,name}){

        //try{
            //connection.destroy()
            //await connection.transaction(async trx=>{
                const user = await connection('user') 
                    .where('id',id)
                    .select('name')
                    .first() //retorna só 1 elemento, não uma array
                //.transacting(trx)

                //trx.commit()
                if(!user || user.name!== name){
                    //bad request
                    return false
                }
            /*}) 
            
            
        }catch(e){
            
            console.log("ERRO: "+e)
            return false
        }*/
       
        

        return true
    }
}