import React from 'react'
import { FormGroup, FormControl } from 'react-bootstrap';

const SpellSearch = ({ filteredSearchList }) => (
  <form>
    <FormGroup>
      <FormControl
        autoFocus
        onChange={filteredSearchList}
        type='search'
        placeholder='Search Spells'
      />
    </FormGroup>
  </form>
)

SpellSearch.propTypes = {
  filteredSearchList: React.PropTypes.func.isRequired,
}

export default SpellSearch
