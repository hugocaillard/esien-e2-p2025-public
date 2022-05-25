/** @type { import("fastify").RouteHandlerMethod } */
export function home(req, reply) {
  reply.send('hello')
}

/** @type { import('fastify').FastifyPluginCallback } */
export async function routes(app) {
  app.get('/', home)
}
