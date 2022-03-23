const mongoose = require("mongoose");
require('dotenv').config();

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

// main().catch(err => console.log(err));

//make port an env variable?
mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const wordSchema = mongoose.Schema({
  word: {type: String, unique: true},
  definition: String
});

const Words = mongoose.model('Word', wordSchema);


module.exports.Words = Words;