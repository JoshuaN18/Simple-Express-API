import knex from 'knex';
import knexfile from '../knexfile.js';

const connection = knexfile[process.env.NODE_ENV || 'development'];
const database = knex(connection);

export const getAll = () => {
  return database('users');
};

export const getUser = (phone_number) => {
  return database('users')
    .where({ phone_number })
    .first();
};

export const addUser = ({ first_name, last_name, phone_number }) => {
  return database('users')
    .insert({ first_name, last_name, phone_number })
    .returning('*');
}