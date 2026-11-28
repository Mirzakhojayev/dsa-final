# dsa.uz

A platform for learning Data Structures & Algorithms in Uzbek: read articles, follow a roadmap, and solve coding problems in the browser, LeetCode-style.

## Tech stack

| Part   | Stack |
| ------ | ----- |
| Client | Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, Monaco Editor, Zustand |
| Server | Node.js, Express 5, MongoDB with Mongoose |

## Project structure

```
dsa-final/
├── client/                  # Next.js frontend
│   └── src/
│       ├── app/             # Pages: /, /problemset, /problem/[problemId], /read, /roadmap, /about
│       │   └── components/  # Navbar, Footer, ProblemsTable, Workspace (description + code editor), ...
│       ├── components/ui/   # shadcn/ui components (button, carousel)
│       ├── lib/api.ts       # API client
│       ├── store/           # Zustand stores (selected language)
│       └── types/           # Shared TypeScript types
└── server/                  # Express API
    ├── server.js            # Entry point
    └── src/
        ├── controllers/     # Route handlers
        ├── middleware/      # Auth (protect), 404 + error handler
        ├── model/           # Mongoose models (Question, User)
        ├── routes/          # Express routers
        ├── seed/            # Seed data + script
        └── utils/           # JWT helpers
```

## Getting started

### Prerequisites

- Node.js 20+
- A MongoDB database: run it locally or use a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster

### 1. Server

```bash
cd server
npm install
cp .env.example .env     # Windows: copy .env.example .env
# edit .env and set MONGO_URL
npm run seed             # loads the 10 starter problems
npm run dev              # http://localhost:4002
```

### 2. Client

```bash
cd client
npm install
cp .env.example .env.local   # Windows: copy .env.example .env.local
npm run dev                  # http://localhost:3000
```

### Environment variables

**`server/.env`**

| Variable     | Default                 | Description |
| ------------ | ----------------------- | ----------- |
| `PORT`       | `4002`                  | API port |
| `MONGO_URL`  | (required)              | MongoDB connection string |
| `CLIENT_URL` | `http://localhost:3000` | Origin allowed by CORS |
| `JWT_SECRET` | (required)              | Secret used to sign login tokens; use a long random string |
| `JWT_EXPIRES_IN` | `7d`                | How long a login token stays valid |

**`client/.env.local`**

| Variable              | Default                 | Description |
| --------------------- | ----------------------- | ----------- |
| `NEXT_PUBLIC_API_URL` | `http://localhost:4002` | Base URL of the API |

## Scripts

| Location | Command         | What it does |
| -------- | --------------- | ------------ |
| server   | `npm run dev`   | Start the API with auto-reload (nodemon) |
| server   | `npm start`     | Start the API |
| server   | `npm run seed`  | Insert/update the problems in `src/seed/questions.js` (safe to re-run) |
| client   | `npm run dev`   | Start the Next.js dev server |
| client   | `npm run build` | Production build |
| client   | `npm run lint`  | Run ESLint |

## API

Base URL: `http://localhost:4002`

| Method | Endpoint               | Description |
| ------ | ---------------------- | ----------- |
| GET    | `/api/questions`       | List problems (`slug`, `order`, `title`, `difficulty`, `category`, `excerpt`), sorted by `order`. Optional query: `sort=newest`, `limit=N` (max 100) |
| GET    | `/api/questions/:slug` | One problem with description, examples, constraints and **visible** test cases only |
| POST   | `/api/questions`       | Create a problem |
| PUT    | `/api/questions/:slug` | Update a problem |
| DELETE | `/api/questions/:slug` | Delete a problem |

> ⚠️ `POST`, `PUT` and `DELETE` are not protected yet. They will be restricted to admins once auth is added.

### Auth

| Method | Endpoint             | Body                                         | Description |
| ------ | -------------------- | -------------------------------------------- | ----------- |
| POST   | `/api/auth/register` | `{ firstName, lastName, email, password }`   | Create an account (password: 8–72 characters). Returns `{ token, user }` |
| POST   | `/api/auth/login`    | `{ email, password }`                        | Log in. Returns `{ token, user }` |
| GET    | `/api/auth/me`       | (none)                                       | The logged-in user. Requires `Authorization: Bearer <token>` |

New accounts always get the `user` role. To make someone an admin, set `role: "admin"` on their document in MongoDB.

### Errors

Errors are returned as JSON: `{ "message": "..." }` with status `400` (validation), `401` (not logged in / bad credentials), `404` (not found), `409` (duplicate email, `slug` or `order`) or `500`.

### Problem format

```js
{
  slug: "two-sum",            // unique, used in URLs: /problem/two-sum
  order: 1,                   // unique, display number
  title: "Two Sum",
  difficulty: "Easy",         // "Easy" | "Medium" | "Hard"
  category: "Array",
  description: "...",         // paragraphs separated by a blank line, `backticks` for inline code
  examples: [{ input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "..." }],
  constraints: ["2 ≤ nums.length ≤ 10^4"],
  testCases: [{ input: "[2,7,11,15]\n9", output: "[0,1]", hidden: false }]
}
```

**Test cases use stdin/stdout** so one code runner works for every language:

- `input`: one JSON value per line, one line per function argument
- `output`: the expected return value as JSON
- Linked lists and trees are passed as arrays (trees in level order, `null` for a missing node)
- `hidden: true` test cases are never sent to the client

To add a problem, append it to [`server/src/seed/questions.js`](server/src/seed/questions.js) and run `npm run seed`.
