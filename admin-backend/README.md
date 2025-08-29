# PASSTRAVEL Admin Backend

Backend service for PASSTRAVEL admin dashboard. Built with Express.js, Prisma ORM, and JWT authentication.

## Features

- JWT-based authentication
- Role-based access control (Admin only)
- Prisma ORM for database management
- Swagger API documentation
- Input validation using Joi

## Project Structure

```
/admin-backend/
├── src/
│   ├── config/             # Global configurations
│   ├── controllers/        # Route controllers
│   ├── middlewares/        # JWT auth & verifyAdmin
│   ├── routes/             # Modular routing
│   ├── services/          # Business logic
│   ├── utils/             # Helpers
│   ├── validations/       # Joi schemas
│   ├── docs/             # Swagger documentation
│   ├── app.js            # Express app setup
│   └── index.js          # Server entry point
├── prisma/
│   └── schema.prisma     # Database schema
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the values as needed

3. Set up the database:
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## API Documentation

The API documentation is available at `/api-docs` when the server is running.

## Authentication

All admin routes require a valid JWT token with admin privileges. Include the token in the Authorization header:

```
Authorization: Bearer your_jwt_token
```

## Available Scripts

- `npm start`: Start production server
- `npm run dev`: Start development server with hot reload
- `npm run prisma:generate`: Generate Prisma client
- `npm run prisma:migrate`: Run database migrations
