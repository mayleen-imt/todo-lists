import { FastifyInstance } from 'fastify'
import * as listsController from '../../controllers/lists.controller'
import { addListSchema, listListsSchema } from '../../schemas'

async function lists(fastify: FastifyInstance) {

  fastify.get('/', { schema: listListsSchema }, listsController.listLists)

  fastify.post('/', { schema: addListSchema }, listsController.addList)
}

export default lists
