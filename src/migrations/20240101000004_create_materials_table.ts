import type { Knex } from 'knex';

exports.up = async function(knex: Knex) {
  return knex.schema.createTable('materials', (table) => {
    table.increments('id').primary();
    table.string('file').notNullable();
    table.integer('courses_id').unsigned().notNullable();
    table.timestamps(true, true);
    
    table.foreign('courses_id').references('id').inTable('courses').onDelete('CASCADE');
  });
};

exports.down = async function(knex:Knex) {
  return knex.schema.dropTable('materials');
};
