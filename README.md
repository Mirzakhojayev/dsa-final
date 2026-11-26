# dsa.uz

A platform for learning Data Structures & Algorithms in Uzbek: read articles, follow a roadmap, and solve coding problems in the browser, LeetCode-style.

> **Status:** in active development. See [Roadmap](#roadmap) for what works today and what's next.

## Tech stack

| Part   | Stack |
| ------ | ----- |
| Client | Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, Monaco Editor, Zustand |
| Server | Node.js, Express 5, MongoDB with Mongoose |
| Code execution (planned) | [Judge0](https://judge0.com) via RapidAPI |

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
        ├── middleware/      # 404 + error handler
        ├── model/           # Mongoose models (Question, User)
        ├── routes/          # Express routers
        └── seed/            # Seed data + script
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
| GET    | `/api/questions`       | List all problems (`slug`, `order`, `title`, `difficulty`, `category`), sorted by `order` |
| GET    | `/api/questions/:slug` | One problem with description, examples, constraints and **visible** test cases only |
| POST   | `/api/questions`       | Create a problem |
| PUT    | `/api/questions/:slug` | Update a problem |
| DELETE | `/api/questions/:slug` | Delete a problem |

> ⚠️ `POST`, `PUT` and `DELETE` are not protected yet. They will be restricted to admins once auth is added.

Errors are returned as JSON: `{ "message": "..." }` with status `400` (validation), `404` (not found), `409` (duplicate `slug`/`order`) or `500`.

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

**Test cases use stdin/stdout** so one runner (Judge0) works for every language:

- `input`: one JSON value per line, one line per function argument
- `output`: the expected return value as JSON
- Linked lists and trees are passed as arrays (trees in level order, `null` for a missing node)
- `hidden: true` test cases are only used on Submit and are never sent to the client

To add a problem, append it to [`server/src/seed/questions.js`](server/src/seed/questions.js) and run `npm run seed`.

## Roadmap

- [x] **1. Problems API:** question model, CRUD routes, seed data
- [ ] **2. Client uses real data**
  - [x] 2.1 API client and shared types
  - [x] 2.2 Problem set table loads from the API
  - [ ] 2.3 Home page "recent problems" loads from the API
  - [ ] 2.4 Problem page loads its problem by slug
  - [ ] 2.5 Problem description renders the loaded problem
  - [ ] 2.6 Editor keeps separate code per language
  - [ ] 2.7 Remove mock problem data
- [ ] **3. Auth:** register / login (bcrypt + JWT), login & signup pages, admin-only problem editing
- [ ] **4. Run & Submit:** Judge0 integration, output panel, submissions, solved status
- [ ] **5. Remaining pages:** prev/next problem, search, editorial & solution tabs, About, Roadmap, Learn
