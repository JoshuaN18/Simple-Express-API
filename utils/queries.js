import knex from 'knex';
import knexfile from '../knexfile.js';

const connection = knexfile[process.env.NODE_ENV || 'development'];
const database = knex(connection);

export const getAll = () => {
  return database('users');
};