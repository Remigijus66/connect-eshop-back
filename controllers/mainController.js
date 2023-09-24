const axios = require('axios');
require("dotenv").config()

module.exports = {

    echo: async (req, res) => {
        console.log(req.body); 
        res.json(req.body); 
    },


    getProdcts:  async (req, res) => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products", req.body);
            console.log(response.data)
           res.json(response.data);
       } catch (error) {
           console.error('Error forwarding the request:', error);
           res.status(500).json({ error: 'Failed to forward the request' });
       }
           },

    getSingleProdct:  async (req, res) => {
          try {
            const response = await axios.get("https://fakestoreapi.com/products/"+ req.body.id , req.body);
           res.json(response.data);
       } catch (error) {
           console.error('Error forwarding the request:', error);
           res.status(500).json({ error: 'Failed to forward the request' });
       }
           },

    getKey:  async (req, res) => {
        const secretkey = {key: process.env.SECURITY_KEY}
          res.json(secretkey);
                 },

}
