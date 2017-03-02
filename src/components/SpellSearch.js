import React from 'react'
import { FormGroup, FormControl } from 'react-bootstrap';

const SpellSearch = ({ filteredSpellList }) => (
  <form>
    <FormGroup>
      <FormControl
        autoFocus
        onChange={filteredSpellList}
        type='search'
        placeholder='Search Spells'
      />
    </FormGroup>
  </form>
)

SpellSearch.propTypes = {
  filteredSpellList: React.PropTypes.func,
}

export default SpellSearch
