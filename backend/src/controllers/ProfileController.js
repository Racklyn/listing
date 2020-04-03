const CollectionsModel = require('../models/CollectionsModel')

module.exports = {
    async index(req,res){
        const user_id = req.headers.authorization
        return res.json(await CollectionsModel.getCollections(user_id))
    },

}