import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Accordion, Grid, Row, Col } from 'react-bootstrap'
import SpellSearch from './SpellSearch'
import SpellDetails from './SpellDetails'
import { fetchSpells } from '../../actions'
import { fuzzySearch, splitSearchTerms } from '../helpers'

class Search extends Component {
  constructor(props) {
    super(props)
    this.filteredSearchList = this.filteredSearchList.bind(this)
  }
  componentDidMount() {
    this.props.dispatchFetchSpells()
  }
  filteredSearchList(e) {
    e.persist();
    const splitTerms = splitSearchTerms(e.target.value)
    return splitTerms.reduce((filteredList, term) => {
      return fuzzySearch(filteredList, term)
    }, this.props.spells)
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

const mapStateToProps = state => {
  return {
    spells: state.spells,
    filteredSpells: state.spells
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
