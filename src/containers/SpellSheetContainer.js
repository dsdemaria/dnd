import React from 'react'
import SpellSheet from '../components/spellsheet/SpellSheet'

const mockData = {
  cantrips: [
    { name: 'True Strike' },
    { name: 'Prestidigitaiton' },
    { name: 'Firebolt' },
    { name: 'Ray of Frost' }
  ],
  level1: [
    { name: 'Magic Missle' },
    { name: 'Ray of Enfeeblement' },
    { name: 'Ray of Sickness' },
    { name: 'Hex' }
  ]
}

const SpellSheetContainer = ( mockData) => (
  <div>
    <SpellSheet spells={mockData} />
  </div>
)

export default SpellSheetContainer
