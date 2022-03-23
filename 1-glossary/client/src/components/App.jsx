import React from 'react';
import axios from 'axios';
import GlossaryList from './GlossaryList.jsx';
import GlossaryInputField from './GlossaryInputField.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      errorAddingWord: false
    }

    //bind functions here
    this.handleWordCreation = this.handleWordCreation.bind(this);
    this.handleDefinitionChange = this.handleDefinitionChange.bind(this);
    this.handleWordDeletion = this.handleWordDeletion.bind(this);
    this.handleWordSearch = this.handleWordSearch.bind(this);
  }

  componentDidMount() {
    axios('/api/words').then((res) => {
      this.setState({
        words: res.data
      })
    })
  }

  handleWordCreation(word, definition) {
    const newWord = {
      word: word,
      definition: definition
    };

    axios.post('/api/words', newWord).then( () => {
      axios('/api/words').then( (res) => {
        this.setState({
          words: res.data,
          errorAddingWord: false
        })
      })
    }).catch( (res) => {
      this.setState({
        errorAddingWord: true
      })
    })
  }

  handleDefinitionChange(wordToEdit, newDefinition) {
    axios.patch('/api/words', {word: wordToEdit, newDefinition: newDefinition}).then( () => {
      axios.get('/api/words').then((res) => {
        this.setState({
          words: res.data
        })
      })
    })
  }

  handleWordDeletion(wordToDelete) {
    axios.delete('/api/words', { data: {word: wordToDelete}}).then( () => {
      axios.get('/api/words').then((res) => {
        this.setState({
          words: res.data
        })
      })
    })
  }

  handleWordSearch(query) {
    axios.get(`/api/words/search?query=${query}`).then( (res) => {
      this.setState({
        words: res.data
      })
    })
  }


  render() {


    return (
      <div>
        <h1>Kyle's Glossary</h1>
        <GlossaryInputField handleWordCreation={this.handleWordCreation} error={this.state.errorAddingWord} handleWordSearch={this.handleWordSearch}/>
        <GlossaryList words={this.state.words} handleDefinitionChange={this.handleDefinitionChange} handleWordDeletion={this.handleWordDeletion} />
      </div>
    )
  }
}

export default App;