import React, { Component } from 'react'
import { Accordion, Grid, Row, Col } from 'react-bootstrap'
import SpellSearch from './SpellSearch'
import SpellDetails from './SpellDetails'
import { searchHelper, classesArrayHelper } from './helpers'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      spells: [],
      filteredSpells: []
    }
    this.filteredSearchList = this.filteredSearchList.bind(this)
  }
  componentDidMount() {
    fetch('http://localhost:8080/spells')
      .then(response => {
        return response.json()
      })
      .then(spells => this.setState({
        spells,
        filteredSpells: spells
      })
    )
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.spells !== nextState.spells) {
      return true;
    }
    if (this.state.filteredSpells !== nextState.filteredSpells) {
      return true;
    }
    return false;
  }
  filteredSearchList(e) {
    e.persist();
    const filteredSpells = this.state.spells.filter(spell => {
      if (
        searchHelper(spell.name, e.target.value) ||
        classesArrayHelper(spell.classes, e.target.value) ||
        searchHelper(spell.school, e.target.value) ||
        searchHelper(spell.level, e.target.value)
      ) {
        return spell
      }
    })
    this.setState({ filteredSpells, })
  }
  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col xs={10} xsOffset={1} md={10} mdOffset={1}>
              <h1>DnD 5e Spellbook</h1>
              <SpellSearch
                filteredSearchList={this.filteredSearchList}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={10} xsOffset={1} md={10} mdOffset={1}>
              <Accordion>
                {this.state.filteredSpells.map((spell, idx) =>
                  <SpellDetails key={spell.level + spell.name + idx} spell={spell} />)}
              </Accordion>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
