import knex from 'knex';

const config = {
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306'),
    user: process.env.DB_USER || 'chinol',
    password: process.env.DB_PASSWORD || 'iamrootpass!',
    database: process.env.DB_NAME || 'chinoles',
    ssl: false,
    authPlugins: {
      mysql_native_password: () => () => Buffer.alloc(0)
    }
  },
  migrations: {
    directory: './src/migrations'
  },
  seeds: {
    directory: './src/seeds'
  }
};

export const db = knex(config);
