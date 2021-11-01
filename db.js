//used for capturing database queries

const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)


function createNewHeadsUp(data, db = connection) {

    console.log(data)
    db('heads').insert(data)

        .then(insertComplete => {
            console.log(insertComplete)
            return insertComplete
        }
        )
}


module.exports = {
    createNewHeadsUp
}


//what to do