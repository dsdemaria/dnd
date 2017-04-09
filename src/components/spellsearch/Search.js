import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Accordion, Grid, Row, Col, Panel } from 'react-bootstrap'
import LazyLoad from 'react-lazyload';
import styled, { keyframes } from 'styled-components';
import SpellSearch from './SpellSearch'
import SpellDetails from './SpellDetails'
import { fetchSpells, filterSearchList } from '../../actions'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
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
  componentWillUpdate (nextProps, nextState) {
    const { searchTerm, spells } = this.props
    if (nextProps.searchTerm !== searchTerm) {
      this.props.dispatchFilterSearchSpells(searchTerm, spells)
    }
  }
  render() {
    const { searchTerm, spells, filteredSpells, isLoading } = this.props
    console.log(this.props)
    return (
      <Grid>
        <Row>
          <Col>
            <SpellSearch />
          </Col>
        </Row>
        <Row>
          { isLoading ? <Loading>⏳</Loading> : '' }
          <Col>
            <Accordion>
              {
                searchTerm ?
                  filteredSpells.map(spell =>
                    <LazyLoad placeholder={<Panel>loading...</Panel>} offset={[200, 200]}>
                      <SpellDetails key={spell.level + spell.name} spell={spell} />
                    </LazyLoad>
                  )
                :
                  spells.map(spell =>
                    <LazyLoad placeholder={<Panel>loading...</Panel>} offset={[200, 200]}>
                      <SpellDetails key={spell.level + spell.name} spell={spell} />
                    </LazyLoad>
                  )
              }
              {
                filteredSpells.length === 0 && !isLoading ?
                    <div>No results!</div>
                  :
                    ''
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
    filteredSpells: state.filteredSpells,
    searchTerm: state.searchTerm,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchFetchSpells: () => dispatch(fetchSpells()),
    dispatchFilterSearchSpells: () => dispatch(filterSearchList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
