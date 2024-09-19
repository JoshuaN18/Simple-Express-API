/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('orders', function (table) {
        table.increments('id').primary();
        table.integer('user_id').unsigned().references('id').inTable('users');
        table.integer('product_id').unsigned().references('id').inTable('products');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('orders');
};
