import React from 'react';

class GlossaryItemEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newDefinition: this.props.word.definition
    }

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(e) {
    e.preventDefault();
    const editedDefinition = this.state.newDefinition;
    this.props.handleDefinitionEdit(editedDefinition);
  }


  render() {

    return(
      <div className="item-edit-box">
        <form>
          <label htmlFor="definition">Definition:</label><br/>
          <input className="item-edit-box-field" type="text"
            value={`${this.state.newDefinition}`}
            onChange={ (e) => this.setState({newDefinition: e.target.value})}>
          </input><br/>
          <input type="submit" onClick={this.handleEdit}></input>
        </form>
      </div>
    )
  }
}


export default GlossaryItemEdit;