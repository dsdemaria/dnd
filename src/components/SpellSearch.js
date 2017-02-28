import React, { PropTypes } from 'react'
import { Button, FormGroup, FormControl } from 'react-bootstrap';

const SpellSearch = ({ filteredSpellList, filteredSpells, spells}) => (
  <form>
    <FormGroup onSubmit={filteredSpellList}>
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
  filteredSpells: React.PropTypes.array,
  spells: React.PropTypes.array
}

export default SpellSearch
