# Chinoles Backend

Chinoles is an online language academy platform for Chinese and Spanish courses.  
This repository contains the backend API, built with Node.js, Express, TypeScript, and MySQL.

## Why this project?

To provide a robust backend for managing users, courses, orders, and materials for a multilingual learning platform.

## Backend API

### Status: ✅ Database and server setup complete

- MySQL container running with the `chinoles` database
- Knex migrations and seeds ready to run
- Express server configured with TypeScript
- Route structure established

### Prerequisites

- Node.js (v16+ recommended)
- npm
- Docker & Docker Compose (for local MySQL)
- MySQL client (optional, for manual DB inspection)

### Current Setup

- `npx tsc --noEmit src/index.ts` — Check for TypeScript errors
- `npx ts-node src/index.ts` — Start development server
- `npm run migrate:latest` — Create database tables
- `npm run seed:run` — Insert sample data
- Docker MySQL running on port 3306

### Routes Structure

- `/` — API welcome and health check
- `/users` — User registration, authentication, profile, and management
- `/orders` — Manage course orders and payment status
- `/courses` — Browse, create, update, and delete courses
- `/materials` — Access and manage course materials (documents, videos, etc.)
- `/instructors` — Instructor profiles and management
- `/sessions` — Schedule and manage class sessions
- `/reviews` — Course and instructor reviews
- `/categories` — Course categories and filtering

> **Note:**  
> The backend is organized in a modular folder structure under `/src/routes`, making it easy to add new features and endpoints. Each main resource (users, courses, orders, etc.) has its own folder and route handler for scalability and maintainability.

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

## License

MIT


