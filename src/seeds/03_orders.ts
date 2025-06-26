import type { Knex } from 'knex';
exports.seed = async function (knex:Knex) {
  await knex('orders').del();

  await knex('orders').insert([
    {
      user_id: 3, // maria_garcia
      courses_id: 1 // Chinese for Beginners
    },
    {
      user_id: 4, // zhang_wei
      courses_id: 4 // Spanish for Beginners
    },
    {
      user_id: 3, // maria_garcia
      courses_id: 3 // HSK Test Preparation
    },
    {
      user_id: 4, // zhang_wei
      courses_id: 5 // Conversational Spanish
    }
  ]);
};

