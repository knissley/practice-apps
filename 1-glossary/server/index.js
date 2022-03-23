const express = require("express");
const app = express();
require('dotenv').config();
const path = require("path");
const port = process.env.PORT || 3000;


// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
