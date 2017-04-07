import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Accordion, Grid, Row, Col } from 'react-bootstrap'
import SpellSearch from './SpellSearch'
import SpellDetails from './SpellDetails'
import { fetchSpells } from '../../actions'
import { fuzzySearch, splitSearchTerms } from '../helpers'

class Search extends Component {
  componentDidMount () {
    if (this.props.spells.length === 0) {
      this.props.dispatchFetchSpells()
    }
  }
  filterSearchSpells = (searchTerm, spellsList) => {
    return splitSearchTerms(searchTerm)
      .reduce((filteredList, term) => fuzzySearch(filteredList, term), spellsList)
      .map(spell => <SpellDetails key={spell.level + spell.name} spell={spell} />)
  }
  render() {
    const { spells, searchTerm } = this.props
    const fullSpellList = spells.map(spell => <SpellDetails key={spell.level + spell.name} spell={spell} />)
    const filteredSpellsList = this.filterSearchSpells(searchTerm, spells)
    return (
      <Grid>
        <Row>
          <Col>
            <SpellSearch />
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion>
              {
                !searchTerm ?
                  fullSpellList
                :
                  filteredSpellsList
              }
            </Accordion>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    spells: state.spells,
    filteredSpells: state.spells,
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchFetchSpells() {
      dispatch(fetchSpells())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
