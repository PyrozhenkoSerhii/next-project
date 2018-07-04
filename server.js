const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const axios = require('axios');

app.prepare().then(() => {
    const server = express();

    async function getProducts(){
        return await axios.get('https://obscure-stream-46512.herokuapp.com/products/getAll')
            .then(response => {
                return response.data.products;
            })
            .catch(error => {
                console.error('Error while fetching products', error);
            })
    }

    server.get('/product/view/:id', (req, res) => {
        console.log('product view');
        const actualPage = '/post/view';
        const queryParams = { id: req.params.id };
        app.render(req, res, actualPage, queryParams)
    });

    server.get('/product/catalog', (req, res) => {
        console.log('catalog data...')
        console.log(getProducts());
        const serverData = { products: getProducts() };
        app.render(req, res, '/product/catalog', { serverData });
    });

    server.get('*', (req, res) => {
        return handle(req, res)
    });

    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000')
    });
})
