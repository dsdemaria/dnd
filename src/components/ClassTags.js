import React from 'react';
import { splitClassList } from './helpers.js';

const styles = {
  dd: {
    height: 'auto',
    display: 'flex',
    flexWrap: 'wrap'
  },
  span: {
    borderRadius: '.33rem',
    color: '#fbfbfb',
    fontSize: '1rem',
    padding: '.5rem',
    margin: '0 .5rem .5rem 0',
    lineHeignt: '100%',
    background: 'Navy'
  },
  Bard: { background: 'OrangeRed' },
  Cleric: { background: 'Lavender', textShadow: '1px 1px 1px rgba(150, 150, 150, 0.6)' },
  Druid: { background: 'DarkOliveGreen' },
  Paladin: { background: 'Gold', textShadow: '1px 1px 1px rgba(150, 150, 150, 0.6)' },
  Ranger: { background: 'ForestGreen' },
  RitualCaster: { background: 'Red' },
  Sorcerer: { background: 'RoyalBlue' },
  Warlock: { background: 'DarkMagenta' },
  Wizard: { background: 'Crimson' }
}

const ClassTags = ({ dndClasses }) => {
  const listOfClasses = splitClassList(dndClasses)
    .map((dndClass, idx) => <span style={{...styles.span, ...styles[dndClass]}} key={idx}>{dndClass}</span>)
  return (
    <dd style={styles.dd}>
      {listOfClasses}
    </dd>
  )
}

ClassTags.propTypes = {
  dndClasses: React.PropTypes.string
}

export default ClassTags
