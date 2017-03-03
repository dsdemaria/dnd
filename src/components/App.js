import React, { Component } from 'react';
import { Accordion, Grid, Row, Col } from 'react-bootstrap';
import SpellSearch from './SpellSearch';
import SpellDetails from './SpellDetails';
import { searchHelper } from './helpers'
import debounce from 'lodash/debounce'
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
      .then(response => response.json())
      .then(spells => this.setState({
        spells,
        filteredSpells: spells
      })
    )
  }
  filteredSearchList(e) {
    e.persist();
    const filteredSpells = this.state.spells.filter(spell => {
      if (searchHelper(spell.name, e) > - 1 || searchHelper(spell.class, e) > - 1) {
        return spell
      }
    })
    this.setState({ filteredSpells, })
  }
  debouncedSearch(...args) {
    const debounced = debounce(...args)
    return (e) => {
      e.persist()
      return debounced(e)
    }
  }
  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col xs={10} xsOffset={1} md={10} mdOffset={1}>
              <h1>DnD 5e Spellbook</h1>
              <SpellSearch
                filteredSearchList={this.debouncedSearch(this.filteredSearchList, 100)}
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
