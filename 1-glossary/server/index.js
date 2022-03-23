const express = require("express");
const db = require('../db');
const app = express();
require('dotenv').config();
const path = require("path");
const port = process.env.PORT || 3000;
const controllers = require('../controllers');


// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.get('/api/words', controllers.words.get);
app.post('/api/words', controllers.words.post);
app.patch('/api/words', controllers.words.patch);
app.delete('/api/words', controllers.words.delete);

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
