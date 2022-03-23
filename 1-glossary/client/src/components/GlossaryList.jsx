import react from 'react';
import GlossaryItem from './GlossaryItem.jsx';


const GlossaryList = ({words}) => {

  return(
    <div>
      {words.map( (word, i) => {
        return <GlossaryItem word={word} key={i} />
      })}
    </div>
  )
}

export default GlossaryList;