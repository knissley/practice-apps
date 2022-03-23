const db = require('../db');
const models = require('../models');



module.exports = {
  get: (req, res) => {
    models.words.getAll((err, results) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(results);
      }
    })
  },

  post: (req, res) => {
    const word = req.body.word;
    const definition = req.body.definition;
    models.words.create(word, definition, (err) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(201);
      }
    })
  },

  patch: (req, res) => {
    console.log('in patch');
    const wordToChange = req.body.word;
    const newDefinition = req.body.newDefinition;
    models.words.update(wordToChange, newDefinition, (err) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    })
  }
}