import react from 'react';
import GlossaryItem from './GlossaryItem.jsx';


const GlossaryList = ({words, handleDefinitionChange, handleWordDeletion}) => {

  return(
    <div>
      {words.map( (word, i) => {
        return <GlossaryItem word={word} key={i} handleDefinitionChange={handleDefinitionChange} handleWordDeletion={handleWordDeletion} />
      })}
    </div>
  )
}

export default GlossaryList;