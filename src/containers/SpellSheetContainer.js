import React from 'react'
import SpellSheet from '../components/spellsheet/SpellSheet'

const mockData = [
  {
    title: 'Cantrips',
    spellsList: [
      { name: 'True Strike' },
      { name: 'Prestidigitaiton' },
      { name: 'Firebolt' },
      { name: 'Ray of Frost' }
    ],
    slots: [ false, false, false, false ]
  },
  {
    title: 'Level 1',
    spellsList: [
      { name: 'Magic Missle' },
      { name: 'Ray of Enfeeblement' },
      { name: 'Ray of Sickness' },
      { name: 'Hex' }
    ],
    slots: [ false, false, false, false ]
  },
  {
    title: 'Level 2',
    spellsList: [
      { name: 'Scorching Ray' },
      { name: 'Hold Person' },
      { name: 'Web' }
    ],
    slots: [ false, false, false ]
  }
]

const SpellSheetContainer = (props) => (
  <div>
    <SpellSheet spellsData={mockData} />
  </div>
)

export default SpellSheetContainer
