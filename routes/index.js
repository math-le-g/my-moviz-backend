var express = require('express');

var router = express.Router();
const fetch = require("node-fetch");
require('dotenv').config();


const API_KEY_TMDB = process.env.API_KEY_TMDB;

router.get('/movies', (req, res) => {
fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_TMDB}`) // pourqoi il manquait le discover ?
.then(response => response.json())
.then(data => {
    res.json({ movies: data.results }) // il manquait un s à result comment on trouve cette variable ?
});
});








module.exports = router;
