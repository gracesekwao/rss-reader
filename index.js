'use strict';

const express = require('express');
const app = express();

const GetEpisodes = require('./src/handlers/GetEpisodes');
const { getPaginatedData } = require('./src/helpers/getPaginatedData');
const { checkSumGenerator } = require('./src/helpers/checkSumGenerator');
const { getFeed } = require('./src/requests/acastRequest');

app.get('/episodes', async (req, res) => {
    const allEpisodes = await GetEpisodes();
    //const response  = await getPaginatedData(req, allEpisodes)
    const response = await getFeed();
    res.send(response);
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
