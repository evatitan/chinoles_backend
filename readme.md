# Chinoles Backend

Chinoles is an online language academy platform for Chinese and Spanish courses.

## Backend API

### Status: ✅ Database and server setup complete

- MySQL container running with the `chinoles` database
- Knex migrations and seeds ready to run
- Express server configured with TypeScript
- Route structure established

### Current Setup

- `npx tsc --noEmit src/index.ts` — Check for TypeScript errors
- `npx ts-node src/index.ts` — Start development server
- `npm run migrate:latest` — Create database tables
- `npm run seed:run` — Insert sample data
- Docker MySQL running on port 3306

### Routes Structure

- `/` — Index route (API welcome)
- `/users` — User management (list, profile, etc.)
- `/orders` — Order management
- `/courses` — Course catalog
- `/materials` — Course materials

## Development

- All backend code is in `/src`
- Environment variables are managed with `.env`
- Database connection via Knex and MySQL2
- Use Docker Compose for local MySQL database

## How to Run

1. Start MySQL: `npm run db:up`
2. Run migrations: `npm run migrate:latest`
3. Seed database: `npm run seed:run`
4. Start server: `npx ts-node src/index.ts`
5. Visit [http://localhost:3000/](http://localhost:3000/)


