const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection) // Knex instance

module.exports = {
    getAll(){
      return database('users')
    }
  }