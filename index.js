'use strict';

const express = require('express');
const app = express();

const GetEpisodes = require('./src/handlers/GetEpisodes');
const { getPaginatedData } = require('./src/helpers/getPaginatedData');

app.get('/episodes', async (req, res) => {
    const allEpisodes = await GetEpisodes();
    const response  = await getPaginatedData(req, allEpisodes)
    res.send(response);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
