# Simple upload file locally
> This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)!

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

View `page.tsx` and `api/file/route.tsx`

If you are using vercel blob, you need to fill your `BLOB_READ_WRITE_TOKEN` in `.env` or `.env.local` file.

> recommand: copy `.env` to `.env.local`

```
STORE_PATH=upload
BLOB_READ_WRITE_TOKEN=Yours
```
