const express = require('express')
const hbs = require('express-handlebars')
const functions = require('./db')


const server = express()

module.exports = server


// Middleware
server.engine('hbs', hbs({
  extname: 'hbs'
}))
server.use(express.urlencoded({ extended: false }))

server.set('view engine', 'hbs')
server.use(express.static('public'))




server.get("/", (req, res) => {
  res.render("home")
})

server.post("/", (req, res) => {


  let data = {
    summary: req.body.summary,
    location: req.body.location,
    type: req.body.type
  }

  functions.createNewHeadsUp(data)

  res.render("home")
})

server.get("/create", (req, res) => {

  res.render("new-heads")
})

