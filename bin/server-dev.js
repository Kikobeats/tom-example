'use strict'

const { createRoutes } = require('tom-microservice')
const tomConfig = require('../tom.config.js')

module.exports = createRoutes(tomConfig)
