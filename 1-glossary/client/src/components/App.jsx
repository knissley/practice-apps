import React from 'react';
import axios from 'axios';
import GlossaryList from './GlossaryList.jsx';
import GlossaryInputField from './GlossaryInputField.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: []
    }

    //bind functions here
    this.handleWordCreation = this.handleWordCreation.bind(this);
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
          words: res.data
        })
      })
    })
  }




  render() {


    return (
      <div>
        <h1>Kyle's Glossary</h1>
        <GlossaryInputField handleWordCreation={this.handleWordCreation}/>
        <GlossaryList words={this.state.words} />
      </div>
    )
  }
}

export default App;