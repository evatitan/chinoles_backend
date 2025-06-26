import type { Knex} from 'knex';

exports.seed = async function(knex : Knex) {
  // Deletes ALL existing entries
  await knex('users').del();

  // Inserts seed entries
  await knex('users').insert([
    {
      user_name: 'admin',
      password: '$2b$10$hashedpassword123', // Remember to hash in real app
      avatar: 'https://example.com/admin-avatar.jpg',
      role: 'admin',
      language: 'chinese',
      level: 'native',
      email: 'admin@chinoles.com'
    },
    {
      user_name: 'teacher_chen',
      password: '$2b$10$hashedpassword456',
      avatar: 'https://example.com/teacher-avatar.jpg',
      role: 'teacher',
      language: 'chinese',
      level: 'native',
      email: 'chen@chinoles.com'
    },
    {
      user_name: 'maria_garcia',
      password: '$2b$10$hashedpassword789',
      avatar: 'https://example.com/maria-avatar.jpg',
      role: 'student',
      language: 'chinese',
      level: 'beginner',
      email: 'maria@example.com'
    },
    {
      user_name: 'zhang_wei',
      password: '$2b$10$hashedpassword101',
      avatar: 'https://example.com/zhang-avatar.jpg',
      role: 'student',
      language: 'spanish',
      level: 'intermediate',
      email: 'zhang@example.com'
    }
  ]);
};
