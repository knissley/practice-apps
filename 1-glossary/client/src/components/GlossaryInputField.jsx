import React from 'react';


class GlossaryInputField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wordInput: '',
      definitionInput: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const word = this.state.wordInput;
    const definition = this.state.definitionInput;
    this.props.handleWordCreation(word, definition);
    this.setState({
      wordInput: '',
      definitionInput: ''
    })
  }


  render() {

    let errorMsg;

    if (this.props.error) {
      errorMsg = <p className="error-msg">That word is already in the glossary.</p>
    }


    return(
      <div>
        <form>
          <label htmlFor="word">Word:</label><br />
          <input
            type="text" id="word"
            name="word" value={`${this.state.wordInput}`}
            onChange={ (e) =>  this.setState({ wordInput: e.target.value}) }>
          </input><br/>
          <label htmlFor="definition">Definition:</label><br />
          <input
            type="text" id="definition"
            name="definition" value={`${this.state.definitionInput}`}
            onChange={ (e) => this.setState({ definitionInput: e.target.value}) }>
          </input><br/>
          <input type="submit" onClick={this.handleSubmit} value="Add New Word"></input>
        </form>
        {errorMsg}
    </div>
    )
  }
}

export default GlossaryInputField;