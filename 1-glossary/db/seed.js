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
    word: 'carpet',
    definition: 'a floor or stair covering made from thick woven fabric'
  },
  {
    word: 'plaintiff',
    definition: 'a person who brings a case against another in a court of law'
  },
  {
    word: 'illustrate',
    definition: 'explain or make something clear by using images'
  },
  {
    word: 'world',
    definition: 'the earth, together with all of its countries, peoples, and natural features'
  },
  {
    word: 'chauvinist',
    definition: 'a person displaying aggressive or exaggerated patriotism'
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

