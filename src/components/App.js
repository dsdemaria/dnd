import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      spells: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/spells', {
    	method: 'GET',
      headers: new Headers({
        'Content-Type': 'text/plain'
      })
    }).then(response => response.json())
    .then(spells => this.setState({
      spells,
    }))
  }
  render() {
    const spellResults = this.state.spells.map((spell, idx) => {
      return <li key={idx}>{spell.name}</li>
    })
    return (
      <div className="App">
        <h1>Spellbook!</h1>

        <form>
          <input type='search' placeholder='Search Spells'></input>
          <button type='submit'>Search</button>
        </form>

        <ul>
          {spellResults}
        </ul>
      </div>
    );
  }
}

export default App;
