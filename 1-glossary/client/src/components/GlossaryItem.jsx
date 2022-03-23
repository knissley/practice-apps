import react from 'react';

const GlossaryItem = ({word}) => {


  return(
    <div>
      <h2 className="word-title">{word.word}</h2>
      <p className="word-definition">{word.definition}</p>
      <div>
        <button className="word-edit-btn">EDIT</button>
        <button className="word-delete-btn">DELETE</button>
      </div>
    </div>
  )
};


export default GlossaryItem;