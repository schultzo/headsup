//used for capturing database queries

const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)


function createNewHeadsUp(data, db = connection) {
  return db('heads')
  .insert(data)
}


function displayAllHeadsUp(db = connection) {
   return db('heads')
}


module.exports = {
    createNewHeadsUp,
    displayAllHeadsUp
}
