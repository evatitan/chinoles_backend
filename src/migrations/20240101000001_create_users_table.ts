import type { Knex } from 'knex';

exports.up = async function(knex:Knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('user_name').notNullable().unique();
    table.string('password').notNullable();
    table.string('avatar').nullable();
    table.enum('role', ['admin', 'teacher', 'student']).defaultTo('student');
    table.enum('language', ['chinese', 'spanish']).notNullable();
    table.enum('level', ['beginner', 'intermediate', 'advanced', 'native']).notNullable();
    table.string('email').notNullable().unique();
    table.timestamps(true, true);
  });
};

exports.down = async function(knex:Knex) {
  return knex.schema.dropTable('users');
};
