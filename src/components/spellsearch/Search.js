import React, { Component } from 'react'
import { Accordion, Grid, Row, Col } from 'react-bootstrap'
import SpellSearch from './SpellSearch'
import SpellDetails from './SpellDetails'
import { fetchSpells } from '../../actions'
import { fuzzySearch, splitSearchTerms } from '../helpers'

export default class Search extends Component {
  componentDidMount() {
    fetchSpells()
  }
  // filteredSearchList(e) {
  //   e.persist();
  //   const splitTerms = splitSearchTerms(e.target.value)
  //   const filteredSpells = splitTerms.reduce((filteredList, term) => {
  //     return fuzzySearch(filteredList, term)
  //   }, this.state.spells)
  //   this.setState({ filteredSpells, })
  // }
  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <SpellSearch filteredSearchList={this.props.filteredSearchList} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion>
              {this.props.filteredSpells.length === 0 ?
                this.props.spells.map(spell =>
                  <SpellDetails key={spell.level + spell.name} spell={spell} />)
                :
                this.props.filteredSpells.map(spell =>
                  <SpellDetails key={spell.level + spell.name} spell={spell} />)}
            </Accordion>
          </Col>
        </Row>
      </Grid>
    );
  }
}
