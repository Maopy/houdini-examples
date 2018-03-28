'use strict'

module.exports = async function (fastify, opts, next) {
  fastify.get('/example', async function (request, reply) {
    return 'this is an example'
  })
}
