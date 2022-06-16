## Usage

If you run this app locally, needs api key of RESAS-API.

https://opendata.resas-portal.go.jp/docs/api/v1/detail/index.html

Get api key, and replace your api key at `.env` .

```bash
$ mv .env.sample .env
```

```
# .env
API_KEY=REPLACE_YOUR_API_KEY
```

## CLI

This project also needs `Vercel CLI` for development of serverless function.

https://vercel.com/docs/cli

```bash
# if you do not install Vercel CLI
$ npm i -g vercel
# lauch vite dev server and vercel function locally.
# you can access vercel function at http://localhost:3000/api/prefectures.ts
$ vercel dev
```

## License

MIT
