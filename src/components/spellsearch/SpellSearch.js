import React from 'react'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import styled from 'styled-components'
import { debouncedSearch } from '../helpers.js'

const SearchBar = styled.form`
  margin: 1rem;
`

const SpellSearch = ({ filteredSearchList }) => (
  <SearchBar onSubmit={e => { e.preventDefault() }}>
    <FormGroup bsSize='large'>
      <ControlLabel>Search by class, level, school, and/or name</ControlLabel>
      <FormControl
        autoFocus
        onChange={debouncedSearch(filteredSearchList, 400)}
        type='search'
        placeholder='ex. necromancy, 2nd-level'
      />
    </FormGroup>
  </SearchBar>
)

SpellSearch.propTypes = {
  filteredSearchList: React.PropTypes.func.isRequired,
}

export default SpellSearch
