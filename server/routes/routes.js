//In here I will specify what to do with certain routes. It will call a db function from my db.js file.


const express = require('express')
const db = require('../db/db')

const router = express.Router()

router.post('/', (req, res) => {
     const data = req.body
     console.log('route', req.body)
    return db.createNewHeadsUp(data)
    .then(postId => {
        res.json(postId)
        return null
       })
  })


router.get('/', (req, res)=> {
     return db.displayAllHeadsUp()
     .then (
          results => {
          res.json(results)
          return null
     })



})


module.exports = router