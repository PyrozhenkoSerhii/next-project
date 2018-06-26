const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.get('/product/view/:id', (req, res) => {
            console.log('product view');
            const actualPage = '/post/view';
            const queryParams = { id: req.params.id };
            app.render(req, res, actualPage, queryParams)
        });

        server.get('*', (req, res) => {
            console.log('tick');
            return handle(req, res)
        });

        server.listen(3000, (err) => {
            if (err) throw err;
            console.log('> Ready on http://localhost:8080')
        })
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1)
    });


// const { createServer } = require('http');
// const { parse } = require('url');
// const next = require('next');
//
// const port = parseInt(process.env.PORT, 10) || 3000;
// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();
//
// app.prepare()
//     .then(() => {
//         createServer((req, res) => {
//             const parsedUrl = parse(req.url, true);
//             const { pathname, query } = parsedUrl;
//
//             if (pathname === '/product/catalog') {
//                 console.log('server catalog');
//                 app.render(req, res, '/product/catalog', query);
//             }else{
//                 app.render(req,res, parsedUrl);
//             }
//         })
//             .listen(port, (err) => {
//                 if (err) throw err;
//                 console.log(`> Ready on http://localhost:${port}`)
//             })
//     });