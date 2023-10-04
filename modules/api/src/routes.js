const express = require('express');
const axios     = require('axios').default;

// ...

const routes = express.Router();

// ...
// TMS API.
routes.post('/content', (req, res) => {
    res.send('OK');
});

routes.get('/healthz', (req, res) => {
    res.send('OK');
});

// ...

module.exports = routes;
