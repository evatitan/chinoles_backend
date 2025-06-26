import type { Knex } from 'knex';

exports.up = async function(knex: Knex) {
  return knex.schema.createTable('orders', (table) => {
    table.increments('id').primary();
    table.integer('user_id').unsigned().notNullable();
    table.integer('courses_id').unsigned().notNullable();
    table.timestamps(true, true);
    
    table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
    table.foreign('courses_id').references('id').inTable('courses').onDelete('CASCADE');
  });
};

exports.down = async function(knex: Knex) {
  return knex.schema.dropTable('orders');
};
