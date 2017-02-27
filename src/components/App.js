import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      spells: [],
      filteredSpells: []
    }

    this.filteredSpellList = this.filteredSpellList.bind(this)
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
      filteredSpells: spells
    }))

  }

  filteredSpellList(e) {
    const filteredSpells = this.state.spells.filter(spell => {
      if (spell.name.toLowerCase().indexOf(e.target.value) === 0) {
        return spell
      }
    })
    setTimeout(this.setState({
      filteredSpells,
    }), 100)

  }
  render() {
    return (
      <div className="App">
        <h1>Spellbook!</h1>

        <form>
          <input
            onChange={this.filteredSpellList}
            type='search'
            placeholder='Search Spells'
          />
          <button type='submit'>Search</button>
        </form>

        <ul>
          {
            this.state.filteredSpells.map((spell, idx) => {
              return <li key={idx}>{spell.name}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
