import React from 'react'
import { FormGroup, FormControl } from 'react-bootstrap';

const SpellSearch = ({ filteredSearchList }) => (
  <form>
    <FormGroup bsSize='large'>
      <FormControl
        autoFocus
        onChange={filteredSearchList}
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
