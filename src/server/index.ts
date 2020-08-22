import fastify, { FastifyInstance } from 'fastify'
import fastifyStatic from 'fastify-static';
import path from "path"
import { Server, IncomingMessage, ServerResponse } from 'http'

const createServer = (fastify: any): FastifyInstance<Server, IncomingMessage, ServerResponse> => {
  return fastify({ logger: true });
};

const server: FastifyInstance = createServer(fastify);

server.register(fastifyStatic, {
  root: path.join(__dirname, "../client"),
  serve: false,
});

server.get('/', (req: any, reply: any) => {
  return reply.sendFile('index.html', path.join(__dirname, "../../public"));
})

server.get('/source', (req: any, reply: any) => {
  return reply.sendFile('index.js')
})

server.listen(3000, (err) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  server.log.info(`server listening on ${server.server.address()}`)
})