const dotenv = require('dotenv');
dotenv.config();

const config = {
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306'),
    user: process.env.DB_USER || '123',
    password: process.env.DB_PASSWORD || '123',
    database: process.env.DB_NAME || '123'
  },
  migrations: {
    directory: './src/migrations',
    extension: 'ts'
  },
  seeds: {
    directory: './src/seeds',
    extension: 'ts'
  }
};

module.exports = config;
