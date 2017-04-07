import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import styled from 'styled-components'
import { setSearchTerm } from '../../actions'

const SearchBar = styled.form`
  margin: 1rem;
`

class SpellSearch extends Component {
  constructor (props) {
    super(props)
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }
  handleSearchTermChange (e) {
    this.props.dispatchSetSearchTerm(e.target.value)
  }
  render () {
    return (
      <SearchBar onSubmit={e => { e.preventDefault() }}>
        <FormGroup bsSize='large'>
          <ControlLabel>Search by class, level, school, and/or name</ControlLabel>
          <FormControl
            autoFocus
            onChange={this.handleSearchTermChange}
            value={this.props.searchTerm}
            type='search'
            placeholder='ex. necromancy, 2nd-level'
          />
        </FormGroup>
      </SearchBar>
    )
  }
}

SpellSearch.propTypes = {
  dispatchSetSearchTerm: React.PropTypes.func.isRequired,
  searchTerm: React.PropTypes.string
}

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchSetSearchTerm(searchTerm) {
      dispatch(setSearchTerm(searchTerm))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpellSearch)
