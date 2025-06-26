import type { Knex } from 'knex';

exports.seed = async function(knex: Knex) {
  await knex('materials').del();

  await knex('materials').insert([
    {
      file: 'chinese-basics-workbook.pdf',
      courses_id: 1
    },
    {
      file: 'chinese-pronunciation-guide.mp3',
      courses_id: 1
    },
    {
      file: 'business-chinese-vocabulary.pdf',
      courses_id: 2
    },
    {
      file: 'business-meetings-audio.mp3',
      courses_id: 2
    },
    {
      file: 'hsk-practice-test-1.pdf',
      courses_id: 3
    },
    {
      file: 'hsk-listening-exercises.mp3',
      courses_id: 3
    },
    {
      file: 'spanish-grammar-basics.pdf',
      courses_id: 4
    },
    {
      file: 'spanish-pronunciation-guide.mp3',
      courses_id: 4
    },
    {
      file: 'conversation-scenarios.pdf',
      courses_id: 5
    },
    {
      file: 'dele-exam-strategies.pdf',
      courses_id: 6
    }
  ]);
};
