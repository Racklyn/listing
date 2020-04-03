const express = require('express')
const routes = express.Router()

const ProfileController =  require('./controllers/ProfileController')
const UserController =  require('./controllers/UserController')
const CollectionController =  require('./controllers/CollectionController')
const ItemController =  require('./controllers/ItemController')


routes.get('/users', UserController.index)
routes.post('/users/new', UserController.create)


routes.get('/profile', ProfileController.index) //return collections of a specifc user

routes.post('/collections', CollectionController.create)
routes.get('/collections', CollectionController.index)
routes.delete('/collections/:id', CollectionController.delete)


routes.get('/collections/list/:collection_id', ItemController.index)
routes.post('/collections/list/:collection_id', ItemController.create)
routes.put('/collections/list/:collection_id/item/:item_id', ItemController.update)
routes.delete('/collections/list/:collection_id/item/:item_id', ItemController.delete)


module.exports = routes;