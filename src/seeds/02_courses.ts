import type { Knex } from 'knex';
exports.seed = async function(knex: Knex) {
  await knex('courses').del();

  await knex('courses').insert([
    {
      title: 'Chinese for Beginners',
      description: 'Learn basic Chinese characters, pronunciation, and everyday conversations. Perfect for absolute beginners who want to start their Chinese language journey.',
      prices: 99.99,
      img: 'https://example.com/chinese-beginners.jpg',
      category: 'chinese',
      duration: 30,
      model: 'online'
    },
    {
      title: 'Business Chinese',
      description: 'Professional Chinese language skills for business environments, meetings, and negotiations. Ideal for professionals working with Chinese companies.',
      prices: 199.99,
      img: 'https://example.com/business-chinese.jpg',
      category: 'chinese',
      duration: 45,
      model: 'live'
    },
    {
      title: 'HSK Test Preparation',
      description: 'Comprehensive preparation for HSK levels 1-6. Includes practice tests, exam strategies, and detailed feedback.',
      prices: 149.99,
      img: 'https://example.com/hsk-prep.jpg',
      category: 'chinese',
      duration: 60,
      model: 'hybrid'
    },
    {
      title: 'Spanish for Beginners',
      description: 'Start your Spanish journey with basic grammar, vocabulary, and pronunciation. Learn essential phrases for daily communication.',
      prices: 89.99,
      img: 'https://example.com/spanish-beginners.jpg',
      category: 'spanish',
      duration: 25,
      model: 'online'
    },
    {
      title: 'Conversational Spanish',
      description: 'Improve your Spanish speaking skills through interactive conversations and real-life scenarios. Build confidence in speaking.',
      prices: 129.99,
      img: 'https://example.com/conversational-spanish.jpg',
      category: 'spanish',
      duration: 40,
      model: 'live'
    },
    {
      title: 'DELE Exam Preparation',
      description: 'Prepare for the DELE Spanish proficiency exam with targeted practice, strategies, and mock exams.',
      prices: 179.99,
      img: 'https://example.com/dele-prep.jpg',
      category: 'spanish',
      duration: 50,
      model: 'hybrid'
    }
  ]);
};

