import { FastifyReply, FastifyRequest } from "fastify"
import { ITodoList } from '../interfaces'

const staticLists: ITodoList[] = [
  {
	id: '1',
	description: 'Bootstrap the course project',
  },
]

export async function listLists(request: FastifyRequest, reply: FastifyReply) {
  // Promise.resolve(staticLists)
  // .then((list) => {
	//   reply.send({ data: list })
  // })
  console.log('DB status', this.level.leveldb.status)
  const listsIter = this.level.leveldb.iterator()

  const result: ITodoList[] = []
  for await (const [key, value] of listsIter) {
    result.push(JSON.parse(value))
  }
  reply.send(result)
}

export async function addList(request: FastifyRequest, reply: FastifyReply) {
  const list = request.body as ITodoList
  console.log('list to save: ', list)
  const result = await this.level.leveldb.put(list.id.toString(), JSON.stringify(list))
  reply.send(result)
}
