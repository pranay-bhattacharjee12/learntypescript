# 🟦 Learn TypeScript

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

My personal notes and practice code while learning **TypeScript** — from basic types all the way to classes, generics, utility types, and using TypeScript with **React**.

Every file is small, focused on one concept, and heavily commented so it can be read like a set of notes. ☕ Most examples use a chai / tea-shop theme to keep things fun.

---

## 📚 What's Inside

### TypeScript Fundamentals

| # | File | Topic | What you'll learn |
|---|------|-------|-------------------|
| 1 | [`dataType.ts`](./dataType.ts) | Basic Types | `number`, `string`, `any`, typed function params & return types, type inference |
| 2 | [`arrays.ts`](./arrays.ts) | Arrays | Typed arrays (`string[]`), array type aliases, writing a typed `maxvalue` function |
| 3 | [`type.ts`](./type.ts) | Type Aliases | `type` keyword, union types (`number \| string`), optional props, intersection types (`&`) |
| 4 | [`interfaces.ts`](./interfaces.ts) | Interfaces | Defining object shapes, optional properties, extending interfaces |
| 5 | [`enum.ts`](./enum.ts) | Enums | String enums and using them for role-based logic |
| 6 | [`generics.ts`](./generics.ts) | Generics | Generic functions `<T>` and generic interfaces like `ApiResponse<T>` |
| 7 | [`pick.ts`](./pick.ts) | Utility Types | `Pick<T, K>` and `Omit<T, K>` — e.g. hiding a password before sending data to the frontend |
| 8 | [`record.ts`](./record.ts) | Record & Map | `Record<K, V>` for typed dictionaries, and a typed `Map<number, string>` |
| 9 | [`oop.ts`](./oop.ts) | Classes / OOP | Constructors, `public` / `private` / `protected`, `readonly`, getters & setters, `static`, parameter properties, abstract classes |

> 💡 **Suggested order:** follow the numbers above — each topic builds on the previous one.

### React + TypeScript

The [`reactwithts/tswithreact`](./reactwithts/tswithreact) folder is a small **Vite + React 19 + TypeScript** app that puts the fundamentals into practice:

| File | Concept |
|------|---------|
| `src/types.ts` | Shared `Chai` interface used across components |
| `src/components/ChaiCard.tsx` | Typing component props |
| `src/components/ChaiList.tsx` | Passing a typed array as props and rendering a list |
| `src/components/Counter.tsx` | Typing state with `useState<T>` |
| `src/hooks/seFetch.ts` | A generic custom hook `useFetch<T>()` *(work in progress)* |
| `src/App.tsx` | Putting it all together with a typed chai menu |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- npm (comes with Node.js)

### 1. Clone the repository

```bash
git clone https://github.com/pranay-bhattacharjee12/learntypescript.git
cd learntypescript
```

### 2. Run the TypeScript files

**Option A — run directly with `tsx` (fastest, no JS file generated):**

```bash
npx tsx dataType.ts
```

**Option B — compile with `tsc`, then run the JavaScript output:**

```bash
npm install -g typescript   # one-time install
tsc dataType.ts             # creates dataType.js
node dataType.js
```

> The root [`tsconfig.json`](./tsconfig.json) has `strict` mode turned on, along with extra checks like `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes`, so you'll learn to write properly type-safe code.

### 3. Run the React app

```bash
cd reactwithts/tswithreact
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

---

## 🗂️ Project Structure

```
learntypescript/
├── dataType.ts          # basic types & functions
├── arrays.ts            # typed arrays
├── type.ts              # type aliases, unions, intersections
├── interfaces.ts        # interfaces & extending them
├── enum.ts              # enums
├── generics.ts          # generics
├── pick.ts              # Pick & Omit utility types
├── record.ts            # Record & Map
├── oop.ts               # classes & OOP concepts
├── tsconfig.json        # TypeScript compiler config
└── reactwithts/
    └── tswithreact/     # Vite + React + TypeScript app
        ├── src/
        │   ├── components/
        │   │   ├── ChaiCard.tsx
        │   │   ├── ChaiList.tsx
        │   │   └── Counter.tsx
        │   ├── hooks/
        │   │   └── seFetch.ts
        │   ├── types.ts
        │   ├── App.tsx
        │   └── main.tsx
        └── package.json
```

---

## 🧠 Quick Cheat Sheet

```ts
// Basic types
let age: number = 23;
let name: string = "Pranay";

// Type alias vs interface
type Point = { x: number; y: number };
interface User { name: string; email?: string }

// Union & intersection
type Id = number | string;
type SuperAdmin = User & { role: string };

// Generics
function identity<T>(value: T): T { return value; }

// Utility types
type PublicUser = Pick<User, "name">;
type NoEmail   = Omit<User, "email">;
type Perms     = Record<"admin" | "user", string[]>;
```

---

## 📖 Useful Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [tsconfig Reference](https://aka.ms/tsconfig)

---

## 🛣️ Roadmap

- [x] Basic types, arrays, type aliases & interfaces
- [x] Enums & generics
- [x] Utility types (`Pick`, `Omit`, `Record`)
- [x] Classes & OOP
- [x] React + TypeScript basics
- [ ] Finish the `useFetch<T>` custom hook
- [ ] Type narrowing & type guards
- [ ] More utility types (`Partial`, `Required`, `Readonly`)
- [ ] Modules & declaration files

---

## 🤝 Contributing

This is a personal learning repo, but suggestions are welcome! Feel free to open an issue or a pull request if you spot a mistake or have a better example.

## 👤 Author

**Pranay Bhattacharjee** — [@pranay-bhattacharjee12](https://github.com/pranay-bhattacharjee12)

⭐ If you find these notes helpful, consider giving the repo a star!
