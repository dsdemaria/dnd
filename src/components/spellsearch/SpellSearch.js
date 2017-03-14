import React from 'react'
import { FormGroup, FormControl } from 'react-bootstrap'
import styled from 'styled-components'
import { debouncedSearch } from '../helpers.js'

const SearchBar = styled.form`
  margin: 1rem;
`

const SpellSearch = ({ filteredSearchList }) => (
  <SearchBar onSubmit={e => { e.preventDefault() }}>
    <FormGroup bsSize='large'>
      <FormControl
        autoFocus
        onChange={debouncedSearch(filteredSearchList, 350)}
        type='search'
        placeholder='Search by spell or class'
      />
    </FormGroup>
  </SearchBar>
)

SpellSearch.propTypes = {
  filteredSearchList: React.PropTypes.func.isRequired,
}

export default SpellSearch
