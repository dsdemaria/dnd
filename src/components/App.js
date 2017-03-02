import React, { Component } from 'react';
import { Accordion, Grid, Row, Col } from 'react-bootstrap';
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
    fetch('http://localhost:8080/spells')
      .then(response => response.json())
      .then(spells => this.setState({
        spells,
        filteredSpells: spells
      })
    )
  }
  filteredSpellList(e) {
    const filteredSpells = this.state.spells.filter(spell => {
      if (spell.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1) {
        return spell
      }
    })
    this.setState({
      filteredSpells,
    })
  }
  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col xs={10} xsOffset={1} md={10} mdOffset={1}>
              <h1>DnD 5e Spellbook</h1>
              <SpellSearch
                filteredSpellList={this.filteredSpellList}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={10} xsOffset={1} md={10} mdOffset={1}>
              <Accordion>
                {this.state.filteredSpells.map((spell, idx) =>
                  <SpellDetails key={idx} spell={spell} />)}
              </Accordion>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
