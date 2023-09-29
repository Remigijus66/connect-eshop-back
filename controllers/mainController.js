
const axios = require('axios');
require("dotenv").config()
const products = require('./localDatabase')

module.exports = {

    echo: async (req, res) => {
        console.log(req.body);
        res.json(req.body);
    },
    getProdcts: async (req, res) => {
        res.json(products);
        // try {
        //     const responseFakeApi = await axios.get("https://fakestoreapi.com/products", req.body);
        //     res.json(responseFakeApi.data);

        // } catch (error) {
        //     console.error('Error forwarding the request:', error);
        //     res.status(500).json({ error: 'Failed to forward the request' });
        // }
    },

    getSingleProdct: async (req, res) => {
        res.json(products[req.body.id-1]); 
        // try {
        //     const responseFakeApi = await axios.get("https://fakestoreapi.com/products/" + req.body.id, req.body);
        //     res.json(responseFakeApi.data);
        // } catch (error) {
        //     console.error('Error forwarding the request:', error);
        //     res.status(500).json({ error: 'Failed to forward the request' });
        // }
    },

    handle: async (req, res) => {
        const url = 'https://api.sun.boomio.com/easter2-egg-service/v3/handle/custom';
        const accessToken = process.env.BOOMIO_API_KEY;
        const data = {
            user_session: req.body.user_session,
            current_page_url: req.body.current_page_url,
        };
        const headers = {
            'x-boomio-access-token': accessToken,
            'Content-Type': 'application/json',
        };
        console.log('req.body: '.bgCyan.bold, JSON.stringify(req.body,null,2));
        console.log({ reqHeaders: req.headers });
        console.log({ reqQuery: req.query });
        try {
            const responseBoomio = await axios.post(url, data, { headers })
            // console.log('res.body:'.bgCyan.bold, res.json(responseBoomio.data.body));
            res.json(responseBoomio.data)
        }
        catch {
            (error => {
                console.error('Error:', error);
            });
        }
    },
}

