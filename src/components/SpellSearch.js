import React from 'react'
import { FormGroup, FormControl } from 'react-bootstrap'
import { debouncedSearch } from './helpers.js'

const SpellSearch = ({ filteredSearchList }) => (
  <form onSubmit={e => { e.preventDefault() }}>
    <FormGroup bsSize='large'>
      <FormControl
        autoFocus
        onChange={debouncedSearch(filteredSearchList, 350)}
        type='search'
        placeholder='Search by spell or class'
      />
    </FormGroup>
  </form>
)

SpellSearch.propTypes = {
  filteredSearchList: React.PropTypes.func.isRequired,
}

export default SpellSearch
