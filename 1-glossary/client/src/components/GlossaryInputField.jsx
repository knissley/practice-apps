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


    return(
      <div>
        <form>
          <label htmlFor="word">Word:</label><br />
          <input
            type="text" id="word" name="word"
            onChange={ (e) =>  this.setState({ wordInput: e.target.value}) }>
          </input><br/>
          <label htmlFor="definition">Definition:</label><br />
          <input
            type="text" id="definition" name="definition"
            onChange={ (e) => this.setState({ definitionInput: e.target.value}) }>
          </input><br/>
          <input type="submit" onClick={this.handleSubmit}></input>
        </form>
    </div>
    )
  }
}

export default GlossaryInputField;