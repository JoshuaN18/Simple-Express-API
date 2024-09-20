/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('orders').del()
  await knex('products').del()
  await knex('products').insert([
    {id: 1, name: 'Product 1'},
    {id: 2, name: 'Product 2'},
    {id: 3, name: 'Product 3'},
    {id: 4, name: 'Product 4'},
    {id: 5, name: 'Product 5'}
  ]);
};
