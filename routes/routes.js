//In here I will specify what to do with certain routes. It will call a db function from my db.js file.


const express = require('express')
const app = express()
const db = require('../db')

const router = express.Router()

// app.use(express.urlencoded({extended: false}))

app.post('/', (req, res) => {
     const data = req.body
    return db.createNewHeadsUp(data)
    .then(postId => {
        res.json(postId)
        return null
       })
console.log("Something happened")  })


module.exports = router