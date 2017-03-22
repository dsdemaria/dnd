import React, { Component } from 'react'
import { Accordion, Grid, Row, Col } from 'react-bootstrap'
import SpellSearch from './SpellSearch'
import SpellDetails from './SpellDetails'
import { fuzzySearch, splitSearchTerms, getSpells } from '../helpers'

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      spells: [],
      filteredSpells: []
    }
    this.filteredSearchList = this.filteredSearchList.bind(this)
  }
  componentDidMount() {
    getSpells().then(
      spells => this.setState({
        spells,
        filteredSpells: spells
      })
    )
  }
  filteredSearchList(e) {
    e.persist();
    const splitTerms = splitSearchTerms(e.target.value)
    const filteredSpells = splitTerms.reduce((filteredList, term) => {
      return fuzzySearch(filteredList, term)
    }, this.state.spells)
    this.setState({ filteredSpells, })
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <SpellSearch filteredSearchList={this.filteredSearchList} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion>
              {this.state.filteredSpells.length === 0 ?
                this.state.spells.map(spell =>
                  <SpellDetails key={spell.level + spell.name} spell={spell} />)
                :
                this.state.filteredSpells.map(spell =>
                  <SpellDetails key={spell.level + spell.name} spell={spell} />)}
            </Accordion>
          </Col>
        </Row>
      </Grid>
    );
  }
}
