import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Accordion, Grid, Row, Col, Panel } from 'react-bootstrap'
import LazyLoad from 'react-lazyload'
import styled, { keyframes } from 'styled-components'
import SpellSearch from './SpellSearch'
import SpellDetails from './SpellDetails'
import { fetchSpells, filterSearchList } from '../../actions'
import debounce from 'lodash/debounce'

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
                  filteredSpells.map((spell, idx) =>
                    <LazyLoad key={idx} placeholder={<Panel>loading...</Panel>} offset={[200, 200]}>
                      <SpellDetails spell={spell} />
                    </LazyLoad>
                  )
                :
                  spells.map((spell, idx) =>
                    <LazyLoad key={idx} placeholder={<Panel>loading...</Panel>} offset={[200, 200]}>
                      <SpellDetails spell={spell} />
                    </LazyLoad>
                  )
              }
            </Accordion>
            { !filteredSpells.length && !isLoading ?
                <div style={{fontSize: '2rem'}}>😞 No results! 😞</div> : '' }
          </Col>
        </Row>
      </Grid>
    );
  }
}

Search.propTypes = {
  spells: PropTypes.arrayOf(PropTypes.object),
  filteredSpells: PropTypes.arrayOf(PropTypes.object),
  searchTerm: PropTypes.string,
  isLoading: PropTypes.bool
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
    dispatchFilterSearchSpells: debounce(() => dispatch(filterSearchList()), 200)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
