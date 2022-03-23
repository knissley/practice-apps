import react from 'react';

const GlossaryItem = ({word}) => {
  console.log('word within glossaryItem: ', word);


  return(
    <div>
      <h2>{word.word}</h2>
      <p>{word.definition}</p>
    </div>
  )
};


export default GlossaryItem;