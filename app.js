'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')

module.exports = function (fastify, opts, next) {
  // Place here your custom code!

  fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
    prefix: '/public/'
  })

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins')
  })

  // This loads all plugins defined in services
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'services')
  })

  // Make sure to call next when done
  next()
}
