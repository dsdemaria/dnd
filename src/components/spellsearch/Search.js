import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Accordion, Grid, Row, Col } from 'react-bootstrap'
import styled, { keyframes } from 'styled-components';
import SpellSearch from './SpellSearch'
import SpellDetails from './SpellDetails'
import { fetchSpells } from '../../actions'
import { fuzzySearch, splitSearchTerms } from '../helpers'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`

const Loading = styled.div`
  display: inline-block;
  font-size: 4rem;
  animation: ${rotate360} 2s linear infinite;
`;

class Search extends Component {
  componentWillMount () {
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
          { this.props.isLoading ? <Loading>⏳</Loading> : '' }
          <Col>
            <Accordion>
              {
                searchTerm ? filteredSpellsList : fullSpellList
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
    searchTerm: state.searchTerm,
    isLoading: state.isLoading
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
