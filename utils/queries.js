import knex from 'knex';
import knexfile from '../knexfile.js';

const connection = knexfile[process.env.NODE_ENV || 'development'];
const database = knex(connection);

export const getUser = (phone_number) => {
  return database('users')
    .where({ phone_number })
    .first();
};

export const getProduct = (product_id) => {
  return database('products')
    .where({ id: product_id })
    .first();
}

export const addUser = ({ first_name, last_name, phone_number }) => {
  return database('users')
    .insert({ first_name, last_name, phone_number })
    .returning('*');
}

export const addOrder = (user_id, product_id) => {
  return database('orders')
    .insert({ user_id, product_id })
    .returning('*')
}