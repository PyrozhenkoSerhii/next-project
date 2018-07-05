const express = require('express')
const next = require('next')
const axios = require('axios')
const LRUCache = require('lru-cache')
var NODE_ENV = require("node-env")

const dev = NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const ssrCache = new LRUCache({
    max: 100,
    maxAge: 1000 * 60 * 60
})

app.prepare().then(() => {
    const server = express();

    async function getProducts(callback) {
        return await axios.get('https://obscure-stream-46512.herokuapp.com/products/getAll')
            .then(response => {
                return callback(response.data.products)
            })
            .catch(error => {
                console.error('Error while fetching products', error)
            })
    }

    server.get('/product/view/:id', (req, res) => {
        const actualPage = '/post/view'
        const queryParams = { id: req.params.id }
        //app.render(req, res, actualPage, queryParams)
        renderAndCache(req, res, actualPage, queryParams)
    });

    server.get('/product/catalog', (req, res) => {
        getProducts((products) => {
            const serverData = { products: products }
            //app.render(req, res, '/product/catalog', { serverData })
            renderAndCache(req, res, '/product/catalog', { serverData })
        })
    });

    server.get('*', (req, res) => {
        return handle(req, res)
    });

    server.listen(3000, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    });
})


async function renderAndCache(req, res, pagePath, queryParams) {
    const key = getCacheKey(req)

    if (ssrCache.has(key)) {
        console.log(`cache with key: ${key} was found`)

        res.setHeader('x-cache', 'CACHE FOUND')
        res.send(ssrCache.get(key))
        return
    }

    try {
        const html = await app.renderToHTML(req, res, pagePath, queryParams)
        ssrCache.set(key, html)

        console.log(`new cache with key: ${key} was created `)

        res.setHeader('x-cache', 'CACHE MISSED')
        res.send(html)
    } catch (err) {
        app.render(err, req, res, pagePath, queryParams)
    }
}

function getCacheKey(req) {
    return `${req.url}`
}