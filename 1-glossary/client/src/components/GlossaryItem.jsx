import React from 'react';
import GlossaryItemEdit from './GlossaryItemEdit.jsx';

// const GlossaryItem = ({word}) => {


//   return(
//     <div>
//       <h2 className="word-title">{word.word}</h2>
//       <p className="word-definition">{word.definition}</p>
//       <div>
//         <button className="word-edit-btn">Edit</button>
//         <button className="word-delete-btn">Delete</button>
//       </div>
//     </div>
//   )
// };

class GlossaryItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false
    }

    this.handleDefinitionEdit = this.handleDefinitionEdit.bind(this);
  }

  handleDefinitionEdit(newDefinition) {
    this.setState({
      edit: false
    })
    this.props.handleDefinitionChange(this.props.word.word, newDefinition);
  }


  render() {

    let editBox;

    if (this.state.edit) {
      editBox = <GlossaryItemEdit word={this.props.word} handleDefinitionEdit={this.handleDefinitionEdit}/>
    }

    return(
      <div className="word-entry">
        <h2 className="word-title">{this.props.word.word}</h2>
        <p className="word-definition">{this.props.word.definition}</p>
        <div>
          <button className="word-edit-btn" onClick={ () => this.setState({edit: !this.state.edit})}>Edit</button>
          <button className="word-delete-btn" onClick={ () => this.props.handleWordDeletion(this.props.word.word)}>Delete</button>
        </div>
        {editBox}
      </div>
    )
  }
}


export default GlossaryItem;