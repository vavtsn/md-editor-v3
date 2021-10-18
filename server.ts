/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
// @ts-check
const fs = require('fs');
const path = require('path');
// @ts-ignore
const express = require('express');

const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD;

async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production'
) {
  const resolve = (p: any) => path.resolve(__dirname, p);

  const indexProd = isProd
    ? fs.readFileSync(resolve('dist/client/index.html'), 'utf-8')
    : '';

  const manifest = isProd
    ? // @ts-ignore
      require('./dist/client/ssr-manifest.json')
    : {};

  const app = express();

  /**
   * @type {import('vite').ViteDevServer}
   */
  let vite: any = {};
  if (!isProd) {
    vite = await require('vite').createServer({
      root,
      logLevel: isTest ? 'error' : 'info',
      server: {
        middlewareMode: 'ssr',
        watch: {
          // During tests we edit the files too fast and sometimes chokidar
          // misses change events, so enforce polling for consistency
          usePolling: true,
          interval: 100
        }
      }
    });
    // use vite's connect instance as middleware
    // @ts-ignore
    app.use(vite.middlewares);
  } else {
    // @ts-ignore
    app.use(require('compression')());
    // @ts-ignore
    app.use(
      // @ts-ignore
      require('serve-static')(resolve('dist/client'), {
        index: false
      })
    );
  }

  // @ts-ignore
  app.use('*', async (req: any, res: any) => {
    try {
      const url = req.originalUrl;

      let template: any, render: any;
      if (!isProd) {
        // always read fresh template in dev
        template = fs.readFileSync(resolve('index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/dev/entry-server.ts')).render;
      } else {
        template = indexProd;
        // @ts-ignore
        render = require('./dist/server/entry-server.ts').render;
      }

      const [appHtml, preloadLinks] = await render(url, manifest);

      const html = template
        .replace(`<!--preload-links-->`, preloadLinks)
        .replace(`<!--app-html-->`, appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e: any) {
      vite && vite.ssrFixStacktrace(e);
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });

  return { app, vite };
}

if (!isTest) {
  createServer().then(({ app }) =>
    // @ts-ignore
    app.listen(3000, () => {
      console.log('http://localhost:3000');
    })
  );
}

// for test use
exports.createServer = createServer;
