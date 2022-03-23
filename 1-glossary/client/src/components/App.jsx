import React from 'react';
import axios from 'axios';
import GlossaryList from './GlossaryList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: []
    }

    //bind functions here
  }

  componentDidMount() {
    axios('/api/words').then((res) => {
      console.log(res.data);
      this.setState({
        words: res.data
      })
    })
  }




  render() {


    return (
      <div>
        <h1>Kyle's Glossary</h1>
        <GlossaryList words={this.state.words} />
      </div>
    )
  }
}

export default App;