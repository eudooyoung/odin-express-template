# express template

## About

This template has 4 branches:

- `template/base`:  
  A base template for express projects including basic package like express, prisma, typescript, supertest, etc...
- `template/session-ssr`:
  A template for express projects that use passport-session for the authentication and server-side rendering for the view. This template includes express-session, passport, passport-local, ejs and etc...
- `template/jwt-api`:
  A template for express projects that use passport-jwt for the authentication and are used as backend api. This template includes express-session, passport, passport-jwt, jsonwebtoken and etc..
- `main`: same as `template/base`

## How to use it

After clone this repo, switch to the branch you need. Then run `npm run install && npx prisma generate`.

## Packages

```
├── express
├── @types/express
├── express-validator

├── eslint
├── @eslint/js
├── typescript-eslint

├── passport
├── @types/passport

├── prisma
├── @prisma/adapter-pg
├── @prisma/client
├── pg
├── @types/pg

├── typescript
├── @types/node
├── tsx

├── supertest
├── @types/supertest
├── vitest

└── dotenv
```
