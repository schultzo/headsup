//In here I will need a server.use which specifies what to do with a post that it receives. It will specify
//the routes file to use for a certain path

const path = require('path')
const express = require('express')

const headsRoutes = require('./routes/routes')


const server = express()

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use('/api/v1/heads', headsRoutes)


server.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
  }) 
//Not sure what the above is doing

module.exports = server