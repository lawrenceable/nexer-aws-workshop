const express = require('express');
const axios     = require('axios').default;

// ...

const routes = express.Router();

// ...
// TMS API.
routes.post('/content', async (req, res) => {

    
    const response = await axios({
        method: 'POST',
        url: 'http://content/resources'
    })

    // Note:Access resource ID via 'resource.id'
    const resource = response.data

    res.send(resource.id);
    
});

routes.get('/healthz', (req, res) => {
    res.send('OK');
});

// ...

module.exports = routes;
