import React from 'react';


class GlossaryInputField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wordInput: '',
      definitionInput: '',
      searchQuery: ''
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

  handleSearch(e) {
    e.preventDefault();
    const query = this.state.searchQuery;
    this.props.handleWordSearch(query);
    this.setState({
      searchQuery: ''
    })
  }


  render() {

    let errorMsg;

    if (this.props.error) {
      errorMsg = <p className="error-msg">That word is already in the glossary.</p>
    }


    return(
      <div>
        <div className="word-input-box">
          <h2>Add A New Word:</h2>
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
            <input type="submit" onClick={this.handleSubmit} value="Add Word"></input>
          </form>
          {errorMsg}
        </div>
        <div className="word-search-box">
          <h2>Search For A Word:</h2>
          <form>
            <label htmlFor="word">
              Word:
            </label>
            <br/>
            <input type="text" id="word" name="word" value={`${this.state.searchQuery}`}
              onChange={ (e) => this.setState({searchQuery: e.target.value})}></input>
            <br/>
            <input type="submit" value="Search" onClick={ (e) => this.handleSearch(e)}></input>
            <input type="submit" value="Reset" onClick={ () => {
              this.setState({searchQuery: ''});
              this.handleSearch(e);
            }}></input>
          </form>
        </div>
    </div>
    )
  }
}

export default GlossaryInputField;