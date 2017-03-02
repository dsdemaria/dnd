import React from 'react';
import { splitClassList } from './helpers.js';

const styles = {
  span: {
    borderRadius: '.33rem',
    color: '#fbfbfb',
    fontSize: '1rem',
    padding: '.5rem',
    marginRight: '.5rem',
    lineHeignt: '100%'
  },
  Bard: { background: 'OrangeRed' },
  Cleric: { background: 'Lavender',  },
  Druid: { background: 'DarkOliveGreen' },
  Paladin: { background: 'Gold' },
  Ranger: { background: 'ForestGreen' },
  RitualCaster: { background: 'Red' },
  Sorcerer: { background: 'RoyalBlue' },
  Warlock: { background: 'DarkMagenta' },
  Wizard: { background: 'Crimson' }
}

const ClassTags = ({ dndClasses }) => {
  const listOfClasses = splitClassList(dndClasses).map((dndClass, idx) => <span style={{...styles.span, ...styles[dndClass]}} key={idx}>{dndClass}</span>)
  return (
    <dd style={{height: '2.4rem'}}>
      {listOfClasses}
    </dd>
  )
}

ClassTags.propTypes = {
  dndClasses: React.PropTypes.string
}

export default ClassTags
