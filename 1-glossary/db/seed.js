const db = require('./index.js');


const arr = [
  {
    word: 'essay',
    definition: 'a short piece of writing on a particular subject'
  },
  {
    word: 'plan',
    definition: 'a detailed proposal for doing or achieving something'
  },
  {
    word: 'unit',
    definition: 'a definite magnitude of quantity'
  },
  {
    word: 'hacker',
    definition: 'a graduate of Hack Reactor'
  },
  {
    word: 'jQuery',
    definition: 'an old, outdated library'
  },
  {
    word: 'axios',
    definition: 'greatest thing since sliced bread'
  }
]

db.Words.insertMany(arr, (err) => {
  if (err) {
    console.log('error while seeding InsertMany');
  } else {
    console.log('data seeded');
  }
})

