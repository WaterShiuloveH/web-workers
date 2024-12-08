This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## worker structure

```
pages/
│
├── public/
│   ├── workers/
│       ├── dedicated.js        // Web Workers (Dedicated Workers)
│       ├── service-worker.js          // Service Workers
│       ├── shared-worker.js           // Shared Workers
│       ├── worklets.js          // Worklets
│
├── src
│   ├── app
│       ├── page.tsx/
```
## Key Components:
### Dedicated Worker (dedicated.js): 
    Handles isolated tasks for performance improvements.
### Service Worker (service-worker.js): 
    Used for background caching and offline capabilities.
### Shared Worker (shared-worker.js): 
    Used across multiple pages for shared tasks.
### Worklets (worklets.js): 
    Allows for advanced graphics operations in the browser, like drawing custom shapes on the page.