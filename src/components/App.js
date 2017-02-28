import React, { Component } from 'react';
import { Accordion } from 'react-bootstrap';
import SpellSearch from './SpellSearch';
import SpellDetails from './SpellDetails';
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

        <SpellSearch
          spells={this.state.spells}
          filteredSpells={this.state.filteredSpells}
          filteredSpellList={this.filteredSpellList}
        />

        <Accordion>
          {
            this.state.filteredSpells.map((spell, idx) => {
              return <SpellDetails key={idx} spell={spell} />
            })
          }
        </Accordion>
      </div>
    );
  }
}

export default App;
