import React, { propTypes } from 'react';
import TestUtils from 'react-addons-test-utils';

const dndClassesStyles = [
  {
    class: 'bard',
    color: '#591300'
  },
  {
    class: 'cleric',
    color: '#8AF3FF'
  },
  {
    class: 'druid',
    color: '#75BF00'
  },
  {
    class: 'paladin',
    color: '#F3DE8A'
  },
  {
    class: 'ranger',
    color: '#40531B'
  },
  {
    class: 'sorcerer',
    color: '#91171F'
  },
  {
    class: 'warlock',
    color: '#7B287D'
  },
  {
    class: 'wizard',
    color: '#183059'
  },
]

export const classesArray = (dndClassesArray) => {
  dndClassesArray.map(dndClass => {
    dndClassesStyles.filter(style => {
      if (dndClass === style.class) {
        return style
      }
    })
  })
}

export const splitClassList = (props) => props.filteredSpells.class.split(', ')

// evoke splitClassList in SpellDetails prop, returning array of class names
// reduce splitClassList from array of string names to objects with name and color from list above
// pass new list into ClassTags component
