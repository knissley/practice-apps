import React from 'react';
import axios from 'axios';
import GlossaryList from './GlossaryList.jsx';
import GlossaryInputField from './GlossaryInputField.jsx';
import GlossaryNavigation from './GlossaryNavigation.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      errorAddingWord: false,
      currentPage: 1,
      pageLimit: 10,
      wordTotal: 0
    }
    //should currentPage start at 1 or 0?

    //bind functions here
    this.handleWordCreation = this.handleWordCreation.bind(this);
    this.handleDefinitionChange = this.handleDefinitionChange.bind(this);
    this.handleWordDeletion = this.handleWordDeletion.bind(this);
    this.handleWordSearch = this.handleWordSearch.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    // axios('/api/words').then((res) => {
    //   this.setState({
    //     words: res.data
    //   })
    // })
    axios(`/api/words?page=${this.state.currentPage}&limit=${this.state.pageLimit}`)
    .then ((res) => {
      this.setState({
        words: res.data.words,
        wordTotal: res.data.count
      })
    })
  }

  handleWordCreation(word, definition) {
    if (word === '' || definition === '') {
      this.setState({ errorAddingWord: true});
    } else {
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

  handlePageChange(action) {
    const currentPage = this.state.currentPage;
    //have a && check to see if the action is possible (not at the start or end)
    if (action === 'increment') {
      //move the page forward and get the data for the next page, setting the state of the data and new page number
      let queryPage = currentPage + 1;
      axios(`/api/words?page=${queryPage}&limit=${this.state.pageLimit}`).then( (res) => {
        const words = res.data.words;
        const wordTotal = res.data.count;
        this.setState({
          currentPage: queryPage,
          words: words,
          wordTotal: wordTotal
        })
      })

    } else if (action === 'decrement' && currentPage !== 1) {
      //move the page backward and get the data for the next page, setting the state of the data and new page number
      let queryPage = currentPage - 1;
      axios(`/api/words?page=${queryPage}&limit=${this.state.pageLimit}`).then( (res) => {
        const words = res.data.words;
        const wordTotal = res.data.count;
        this.setState({
          currentPage: queryPage,
          words: words,
          wordTotal: wordTotal
        })
      })

    }
  }


  render() {


    return (
      <div>
        <h1>Kyle's Glossary</h1>
        <GlossaryInputField handleWordCreation={this.handleWordCreation} error={this.state.errorAddingWord} handleWordSearch={this.handleWordSearch}/>
        <GlossaryList words={this.state.words} handleDefinitionChange={this.handleDefinitionChange} handleWordDeletion={this.handleWordDeletion} />
        <GlossaryNavigation currentPage={this.state.currentPage} pageLimit={this.state.pageLimit} wordTotal={this.state.wordTotal} handlePageChange={this.handlePageChange}/>
      </div>
    )
  }
}

export default App;