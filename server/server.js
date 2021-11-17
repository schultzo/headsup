//In here I will need a server.use which specifies what to do with a post that it receives. It will specify
//the routes file to use for a certain path

const headsRoutes = require('../routes/routes')
const path = require('path')
const express = require('express')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use('/api/v1/heads', headsRoutes)

module.exports = server