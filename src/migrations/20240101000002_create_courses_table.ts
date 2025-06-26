import type { Knex } from 'knex';

exports.up = async function(knex:Knex) {
  return knex.schema.createTable('courses', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('description').notNullable();
    table.decimal('prices', 10, 2).notNullable();
    table.string('img').nullable();
    table.enum('category', ['chinese', 'spanish']).notNullable();
    table.integer('duration').notNullable();
    table.enum('model', ['online', 'live', 'hybrid']).notNullable();
    table.timestamps(true, true);
  });
};

exports.down = async function(knex: Knex) {
  return knex.schema.dropTable('courses');
};
